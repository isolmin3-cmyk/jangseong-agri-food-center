"use client";

import { useState } from "react";

type Category = "전체" | "잼류" | "퓨레" | "음료";

const categories: Category[] = ["전체", "잼류", "퓨레", "음료"];

const products = [
  { name: "블루베리쨈", category: "잼류", art: "art-2" },
  { name: "딸기쨈", category: "잼류", art: "art-3" },
  { name: "사과즙", category: "음료", art: "art-1" },
  { name: "토마토즙", category: "음료", art: "art-3" },
  { name: "토마토퓨레", category: "퓨레", art: "art-4" },
  { name: "딸기블루베리잼", category: "잼류", art: "art-2" },
  { name: "사과잼", category: "잼류", art: "art-1" },
] as const;

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
        {visibleProducts.map(({ name, art }) => (
          <article key={name}>
            <span className={`product-art ${art}`} aria-hidden="true">
              {name.slice(0, 1)}
            </span>
            <small>JANGSEONG LOCAL FOOD</small>
            <h3>{name}</h3>
          </article>
        ))}
      </div>
    </>
  );
}
