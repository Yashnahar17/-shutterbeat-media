export default function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-primary/65 text-sm tracking-widest uppercase">Loading...</p>
      </div>
    </div>
  )
}
