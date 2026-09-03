"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import appleJamImage from "../../public/product-images/apple-jam.jpg";
import appleJuiceImage from "../../public/product-images/apple-juice.jpg";
import blueberryJamImage from "../../public/product-images/blueberry-jam.jpg";
import strawberryBlueberryJamImage from "../../public/product-images/strawberry-blueberry-jam.jpg";
import strawberryJamImage from "../../public/product-images/strawberry-jam.jpg";
import tomatoJuiceImage from "../../public/product-images/tomato-juice.jpg";
import tomatoPureeImage from "../../public/product-images/tomato-puree.jpg";

type Category = "전체" | "잼류" | "퓨레" | "음료";

const categories: Category[] = ["전체", "잼류", "퓨레", "음료"];

type Product = {
  name: string;
  category: Exclude<Category, "전체">;
  image: StaticImageData;
};

const products: Product[] = [
  { name: "블루베리잼", category: "잼류", image: blueberryJamImage },
  { name: "딸기잼", category: "잼류", image: strawberryJamImage },
  { name: "사과즙", category: "음료", image: appleJuiceImage },
  { name: "토마토즙", category: "음료", image: tomatoJuiceImage },
  { name: "토마토퓨레", category: "퓨레", image: tomatoPureeImage },
  { name: "딸기블루베리잼", category: "잼류", image: strawberryBlueberryJamImage },
  { name: "사과잼", category: "잼류", image: appleJamImage },
];

export function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("전체");
  const visibleProducts = products.filter(
    ({ category }) => selectedCategory === "전체" || category === selectedCategory,
  );

  return (
    <>
      <div className="filters" aria-label="제품 분류">
        {categories.map((category) => (
          <button
            className={selectedCategory === category ? "active" : ""}
            type="button"
            aria-pressed={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="product-grid" aria-live="polite">
        {visibleProducts.map(({ name, image }) => (
          <article key={name}>
            <div className="product-art product-art-image">
              <Image
                src={image}
                alt={`${name} 제품 이미지`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 25vw"
              />
            </div>
            <small>JANGSEONG LOCAL FOOD</small>
            <h3>{name}</h3>
          </article>
        ))}
      </div>
    </>
  );
}
