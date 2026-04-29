import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { Button } from "@heroui/react";
import Link from "next/link";

const ImageCard = ({ topImage }) => {
  console.log(topImage);
  return (
    <div>
      <Card className="border rounded-xl">
        <div className="relative w-full aspect-square">
          <Image
            src={topImage.imageUrl}
            alt={topImage.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-lg"
          ></Image>
          <Chip size="sm" className="absolute top-3 right-3">
            {topImage.category}
          </Chip>
        </div>
        <div>
          <h1>{topImage.title}</h1>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <FaHeart />
            <p>{topImage.likes}</p>
          </div>
          <div className="flex items-center gap-1">
            <IoMdDownload />
            <p>{topImage.downloads}</p>
          </div>
        </div>
        <Link href={`/all-photos/${topImage.id}`}>
          <Button variant="outline" className="w-full">
            Vew details
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default ImageCard;
