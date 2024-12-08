import React from "react";

interface SkillCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ imageSrc, altText, title, description }) => {
  return (
    <div className="flex items-center justify-center p-4 max-w-xs">
      <div className="bg-[#e6f9e6] shadow-md rounded-lg overflow-hidden  min-h-[24rem]">
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-6 bg-[#e6f9e6] mb-0 h-full">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            {title}
          </h2>
          <p className="text-gray-600 font-light text-xs">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

