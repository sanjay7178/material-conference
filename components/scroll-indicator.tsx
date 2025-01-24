'use client';
export function ScrollIndicator() {
    return (
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full p-1">
          <div className="w-1.5 h-3 bg-white rounded-full animate-bounce mx-auto" />
        </div>
      </div>
    );
  }