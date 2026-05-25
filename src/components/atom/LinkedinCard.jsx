import React, { useState } from "react";

const LinkedInCard = React.memo(({ url, index, previewImage }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex-none snap-center">
      {!isLoaded ? (
        <div 
          onClick={() => setIsLoaded(true)}
          className="rounded-lg shadow-lg max-w-[85vw] md:max-w-full cursor-pointer bg-gray-100 flex flex-col items-center justify-center overflow-hidden "
          style={{ width: '300px', height: '350px' }}
        >
          {previewImage ? (
            <img src={previewImage} alt="LinkedIn Preview" className="w-full h-full object-cover" />
          ) : (
            <div className="p-4 text-center">
              <p className="text-blue-600 font-bold">Lihat Postingan LinkedIn</p>
              <p className="text-xs text-gray-500 mt-2">Klik untuk memuat konten</p>
            </div>
          )}
        </div>
      ) : (
        <iframe
          src={url}
          height="350"
          width="300"
          frameBorder="0"
          allowFullScreen=""
          title={`Posting LinkedIn ${index + 1}`}
          className="rounded-lg shadow-lg max-w-[85vw] md:max-w-full animate-pulse-once"
          style={{ height: '350px' }}
          onLoad={(e) => e.target.classList.remove('animate-pulse-once')}
        />
      )}
    </div>
  );
});

export default LinkedInCard;