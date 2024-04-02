import LoadingIcon from '~icons/svg-spinners/blocks-shuffle-2'

export default function Loading() {
  return (
    <main className="h-[calc(100vh-64px)] flex  justify-center items-center">
      <LoadingIcon className="bg-red-400 text-2xl" />
    </main>
  )
}
