import React from "react";
import ImageCard from "./ImageCard";

const ImageGalary = async () => {
  const res = await fetch(
    "https://pix-gen-ai-image-generation-gallery-eight.vercel.app/data.json",
  );
  const images = await res.json();
  const topImages = images.slice(0, 8);
  // console.log(topImages);

  return (
    <div className=" my-20">
      <h1 className="text-2xl font-bold mb-5">Top Generations</h1>
      <div className="grid grid-cols-4 gap-5">
        {topImages.map((topImage) => (
          <ImageCard key={topImage.id} topImage={topImage}></ImageCard>
        ))}
      </div>
    </div>
  );
};

export default ImageGalary;
