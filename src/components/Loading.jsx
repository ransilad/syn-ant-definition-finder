const Loading = () => {
  return (
    <div className="animate-pulse flex space-x-4 mt-4">
      <div className="flex-1 space-y-3 py-1">
        <div className="h-2 bg-white/40 rounded"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-white/40 rounded col-span-2"></div>
            <div className="h-2 bg-white/40 rounded col-span-1"></div>
            <div className="h-2 bg-white/40 rounded col-span-1"></div>
            <div className="h-2 bg-white/40 rounded col-span-2"></div>
          </div>
          <div className="h-2 bg-white/40 rounded"></div>
        </div>
      </div>
    </div>
  )
}

export default Loading
