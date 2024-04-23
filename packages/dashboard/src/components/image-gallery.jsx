import React, { useState, useEffect } from "react";

const descriptions = [
  "Stunning landscape captured perfectly for your enjoyment.",
  "Abstract and beautiful, this image tells a story.",
  // Continue adding the rest of your descriptions here...
];

const REACT_APP_UNSPLASH_ACCESS_KEY =
  "LOc3VonP_X330VX8lv1hiG41pDn96byd1BDCU7bVT0I";

function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://api.unsplash.com/photos/random?count=12", {
      headers: {
        Authorization: `Client-ID ${REACT_APP_UNSPLASH_ACCESS_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index} className="bg-white rounded overflow-hidden shadow-lg">
          <img
            src={image.urls.regular}
            alt={image.alt_description || "Unsplash Image"}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="font-bold text-xl mb-2">
              {image.description || "Random Image"}
            </div>
            <p className="text-gray-700 text-base">
              {descriptions[Math.floor(Math.random() * descriptions.length)]}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
