"use client";

import Image from "next/image";
import { useState } from "react";

export function ProcessGallery({ name, images }: { name: string; images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasImages = images.length > 0;
  const hasMultipleImages = images.length > 1;

  const showPrevious = () => {
    setCurrentIndex((index) => (index - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setCurrentIndex((index) => (index + 1) % images.length);
  };

  return (
    <div className="process-gallery" aria-label={`${name} 제조공정 이미지`}>
      <div className="process-image" aria-live="polite">
        {hasImages ? (
          <Image
            src={images[currentIndex]}
            alt={`${name} 제조공정 ${currentIndex + 1}`}
            fill
            sizes="(max-width: 900px) 100vw, 320px"
          />
        ) : (
          <span><b>IMAGE</b>제조공정 이미지 준비 중</span>
        )}
      </div>
      <div className="process-gallery-controls">
        <button type="button" onClick={showPrevious} disabled={!hasMultipleImages} aria-label={`${name} 이전 이미지`}>
          이전
        </button>
        <span aria-live="polite">{hasImages ? `${currentIndex + 1} / ${images.length}` : "0 / 0"}</span>
        <button type="button" onClick={showNext} disabled={!hasMultipleImages} aria-label={`${name} 다음 이미지`}>
          다음
        </button>
      </div>
    </div>
  );
}
