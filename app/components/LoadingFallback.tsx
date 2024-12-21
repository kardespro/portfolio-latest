export const LoadingFallback = () => (
  <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-900 flex items-center justify-center relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
    </div>

    <div className="relative z-10 flex flex-col items-center">
      {/* Loading Spinner */}
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-500/20 rounded-full animate-spin">
          <div className="absolute top-0 left-0 w-full h-full border-t-4 border-blue-500 rounded-full animate-spin" 
               style={{ animationDuration: '1s' }} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Loading Text */}
      <div className="mt-8 space-y-2 text-center">
        <h2 className="text-2xl font-bold text-white">Loading</h2>
        <p className="text-blue-300/80 text-sm">Please wait while we load your content</p>
      </div>
    </div>
  </div>
); 