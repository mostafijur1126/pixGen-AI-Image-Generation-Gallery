import Image from "next/image";
import { Button, Chip, Avatar, Badge } from "@heroui/react";
import Link from "next/link";
import { FaArrowLeft, FaCloudDownloadAlt } from "react-icons/fa";
// import {
//   ArrowLeftIcon,
//   HeartIcon,
//   DownloadIcon,
//   ShareIcon,
//   BookmarkIcon,
//   EyeIcon,
//   CalendarIcon,
//   CpuChipIcon,
//   ArrowsPointingOutIcon,
//   TagIcon,
// } from "@heroicons/react/24/outline";
import {
  ArrowsPointingOutIcon,
  BookmarkIcon,
  CalendarIcon,
  CpuChipIcon,
  EyeIcon,
  HeartIcon,
  HeartIcon as HeartSolidIcon,
  ShareIcon,
  TagIcon,
} from "@heroicons/react/24/solid";

const photoDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    "https://pix-gen-ai-image-generation-gallery-eight.vercel.app/data.json",
  );
  const images = await res.json();
  const expectedImage = images.find((i) => i.id == id);
  //   console.log(expectedImage);

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown date";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatNumber = (num) => {
    if (!num) return 0;
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      {/* Hero Section with Image */}
      <div className="relative h-[65vh] md:h-[75vh] w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src={expectedImage.imageUrl}
            alt={expectedImage.title}
            fill
            priority
            className="object-cover transition-transform duration-1000 hover:scale-105"
            sizes="100vw"
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
        </div>

        {/* Navigation Bar */}
        <div className="absolute top-0 left-0 right-0 z-20 p-4 md:p-6">
          <div className="mx-auto max-w-7xl flex items-center justify-between">
            <Link href="/">
              <Button
                variant="flat"
                color="default"
                startContent={<FaArrowLeft className="h-4 w-4" />}
                className="bg-white/10 backdrop-blur-xl text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Back to Gallery
              </Button>
            </Link>

            <div className="flex gap-2">
              <Button
                isIconOnly
                variant="flat"
                className="bg-white/10 backdrop-blur-xl text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <ShareIcon className="h-5 w-5" />
              </Button>
              <Button
                isIconOnly
                variant="flat"
                className="bg-white/10 backdrop-blur-xl text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <BookmarkIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Title Section */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-10">
          <div className="mx-auto max-w-7xl">
            {/* Category Badge */}
            <div className="mb-4">
              <Chip
                color="secondary"
                variant="flat"
                className="bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold"
              >
                {expectedImage.category || "Sci-Fi"}
              </Chip>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl tracking-tight mb-3">
              {expectedImage.title}
            </h1>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-4 text-white/80 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                <span>{formatDate(expectedImage.createdAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <CpuChipIcon className="h-4 w-4" />
                <span>{expectedImage.model || "DALL·E 3"}</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowsPointingOutIcon className="h-4 w-4" />
                <span>{expectedImage.resolution || "1024x1024"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
                <EyeIcon className="h-7 w-7 text-blue-500 mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  2.4K
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Views
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
                <HeartIcon className="h-7 w-7 text-red-500 mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {formatNumber(expectedImage.likes)}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Likes
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
                <FaCloudDownloadAlt className="h-7 w-7 text-green-500 mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {formatNumber(expectedImage.downloads)}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Downloads
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
                <ArrowsPointingOutIcon className="h-7 w-7 text-purple-500 mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {expectedImage.resolution?.split("x")[0]}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Resolution
                </div>
              </div>
            </div>

            {/* Prompt Section */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 p-6 md:p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                  <CpuChipIcon className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  Generation Prompt
                </h2>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl p-5 border-l-4 border-blue-500">
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-base">
                  {expectedImage.prompt}
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <CpuChipIcon className="h-4 w-4" />
                <span>
                  Generated by{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    {expectedImage.model || "DALL·E 3"}
                  </span>
                </span>
              </div>
            </div>

            {/* Tags Section */}
            {expectedImage.tags && expectedImage.tags.length > 0 && (
              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg">
                    <TagIcon className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    Tags
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {expectedImage.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      variant="flat"
                      color="primary"
                      size="lg"
                      className="capitalize cursor-pointer hover:scale-105 transition-transform duration-200"
                    >
                      #{tag}
                    </Chip>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Right Column */}
          <div className="space-y-6">
            {/* Action Buttons */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 p-6 sticky top-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Actions
              </h3>
              <div className="space-y-3">
                <Button
                  size="lg"
                  color="danger"
                  variant="flat"
                  startContent={<HeartIcon className="h-5 w-5" />}
                  className="w-full justify-start font-semibold"
                >
                  Like ({formatNumber(expectedImage.likes)})
                </Button>
                <Button
                  size="lg"
                  color="primary"
                  variant="flat"
                  startContent={<FaCloudDownloadAlt className="h-5 w-5" />}
                  className="w-full justify-start font-semibold"
                >
                  Download Image
                </Button>
                <Button
                  size="lg"
                  color="secondary"
                  variant="flat"
                  startContent={<ShareIcon className="h-5 w-5" />}
                  className="w-full justify-start font-semibold"
                >
                  Share
                </Button>
              </div>
            </div>

            {/* Information Card */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Information
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    Image ID
                  </span>
                  <span className="font-mono text-sm text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">
                    #{expectedImage.id}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    Created
                  </span>
                  <span className="text-gray-900 dark:text-white text-sm font-medium">
                    {formatDate(expectedImage.createdAt)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    Dimensions
                  </span>
                  <span className="text-gray-900 dark:text-white text-sm font-medium">
                    {expectedImage.resolution || "1024x1024"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    Format
                  </span>
                  <span className="text-gray-900 dark:text-white text-sm font-medium">
                    PNG/JPEG
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    Model
                  </span>
                  <span className="text-gray-900 dark:text-white text-sm font-medium">
                    {expectedImage.model || "DALL·E 3"}
                  </span>
                </div>
              </div>
            </div>

            {/* License Note */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl p-5 border border-blue-200 dark:border-blue-800">
              <div className="flex items-start gap-3">
                <div className="p-1">
                  <svg
                    className="h-5 w-5 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="font-semibold mb-1">AI Generated Content</p>
                  <p>
                    This image was created using AI. Please respect the terms of
                    use and provide attribution when required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default photoDetailsPage;
