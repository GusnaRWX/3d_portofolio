

function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-600 bg-opacity-50 flex flex-col items-center justify-center">
      <div className="custom-page-loader ease-linear rounded-full border-4 t-4  border-gray-200 h-12 w-12 mb-4"></div>
      <h2 className="text-center text-white text-xl mt-2 font-semibold">Loading...</h2>
      <p className="w-1/3 text-center text-white">This may take a few seconds, please dont close this page.</p>
    </div>
  )
}

export default Loading