import ImageCard from "@/components/home/ImageCard";
import React from "react";

const AllPhotosPage = async () => {
  const res = await fetch(
    "https://pix-gen-ai-image-generation-gallery-eight.vercel.app/data.json",
  );
  const photos = await res.json();
  return (
    <div className="my-20">
      <h1 className="text-2xl font-bold mb-5">All photos</h1>
      <div className="grid grid-cols-4 gap-5">
        {photos.map((topImage) => (
          <ImageCard key={topImage.id} topImage={topImage}></ImageCard>
        ))}
      </div>
    </div>
  );
};

export default AllPhotosPage;
