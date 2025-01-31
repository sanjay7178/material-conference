export default function BlogLoading() {
  return (
    <article className="min-h-screen animate-pulse">
      <div className="h-[30vh] sm:h-[40vh] md:h-[60vh] relative bg-gray-200" />
      
      <div className="container py-6 sm:py-10 md:py-20 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {/* Title skeleton */}
            <div className="h-8 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/4" />
            
            {/* Content skeletons */}
            <div className="space-y-3 pt-8">
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded w-11/12" />
              <div className="h-4 bg-gray-200 rounded w-4/5" />
            </div>
            
            <div className="space-y-3 pt-4">
              <div className="h-4 bg-gray-200 rounded w-5/6" />
              <div className="h-4 bg-gray-200 rounded w-11/12" />
              <div className="h-4 bg-gray-200 rounded w-3/4" />
            </div>

            {/* List skeleton */}
            <div className="space-y-2 pt-4">
              <div className="h-4 bg-gray-200 rounded w-1/2" />
              <div className="h-4 bg-gray-200 rounded w-2/3 ml-4" />
              <div className="h-4 bg-gray-200 rounded w-3/4 ml-4" />
              <div className="h-4 bg-gray-200 rounded w-1/2 ml-4" />
            </div>

            {/* Button skeleton */}
            <div className="mt-8">
              <div className="h-10 bg-gray-200 rounded w-full sm:w-40" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export const runtime = 'edge';

