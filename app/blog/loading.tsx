export default function Loading() {
  return (
    <div className="container py-10 animate-pulse">
      <div className="h-[40vh] bg-gray-200 dark:bg-gray-800 rounded-lg mb-8" />
      <div className="space-y-4 max-w-3xl mx-auto">
        <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/4" />
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded" />
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded" />
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6" />
        </div>
      </div>
    </div>
  );
}
