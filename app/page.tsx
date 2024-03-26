'use client'

import { ChangeEvent, useRef, useState } from 'react'

import { FFmpeg } from '@ffmpeg/ffmpeg'
import { toBlobURL, fetchFile } from '@ffmpeg/util'
import { Button } from '@nextui-org/react'

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const [loaded, setLoaded] = useState(false)
  const ffmpegRef = useRef(new FFmpeg())
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const messageRef = useRef<HTMLParagraphElement | null>(null)

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const fileURL = URL.createObjectURL(file)
      setSelectedVideo(fileURL)
    }
  }

  //该函数用于加载 FFmpeg 并设置相关的事件处理程序
  const load = async () => {
    const baseURL = 'https://unpkg.com/@ffmpeg/core-mt@0.12.6/dist/esm'
    const ffmpeg = ffmpegRef.current

    ffmpeg.on('log', ({ message }) => {
      if (messageRef.current) messageRef.current.innerHTML = message
    })

    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
      workerURL: await toBlobURL(`${baseURL}/ffmpeg-core.worker.js`, 'text/javascript')
    })

    setLoaded(true)
    console.log(loaded, 'loaded')
  }

  const transcode = async () => {
    const videoURL = 'https://raw.githubusercontent.com/ffmpegwasm/testdata/master/video-15s.avi'
    const ffmpeg = ffmpegRef.current
    await ffmpeg.writeFile('input.avi', await fetchFile(videoURL))
    await ffmpeg.exec(['-i', 'input.avi', 'output.mp4'])
    const fileData = await ffmpeg.readFile('output.mp4')
    const data = new Uint8Array(fileData as ArrayBuffer)
    if (videoRef.current) {
      videoRef.current.src = URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }))
    }
  }

  // 该函数用于将视频转换为 GIF 格式

  return (
    <main className="bg-pink-200">
      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
      />
      {selectedVideo && (
        <video
          src={selectedVideo}
          controls
        />
      )}
      Click a note on the left to view something! 🥺
      {loaded ? (
        <>
          <video
            ref={videoRef}
            controls
          ></video>
          <br />
          <Button onClick={transcode}>Transcode avi to mp4</Button>
          <p ref={messageRef}></p>
        </>
      ) : (
        <Button onClick={load}>Load ffmpeg-core</Button>
      )}
    </main>
  )
}
