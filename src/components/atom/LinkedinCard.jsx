import React from "react";

const LinkedInCard = React.memo(({ url, index }) => {
  return (
    <div className="flex-none snap-center">
      <iframe
        src={url}
        loading="lazy"
        height="450"
        width="300"
        frameBorder="0"
        allowFullScreen=""
        title={`Posting LinkedIn ${index + 1}`}
        className="rounded-lg shadow-lg max-w-[85vw] md:max-w-full"
        style={{ height: '350px' }}
      />
    </div>
  );
});

export default LinkedInCard;