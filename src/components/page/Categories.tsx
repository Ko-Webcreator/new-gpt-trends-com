import React from "react";
import categoriesStyles from "./categories.module.scss";
import { fetchComWP } from "@/libs/fetchComWP";
import { FetchType } from "@/types/fetchType";
import { CategoryType } from "@/types/categoryType";

const Categories = async () => {
  const data = await fetchComWP<CategoryType>({
    method: FetchType.Get,
    endpoint: `/categories?_fields=id,count,name`,
  });

  console.log(data);

  return (
    <div className={categoriesStyles.wrap}>
      <h3>Categories</h3>
      <ul>
        {data.map((e) => (
          <li key={e.id}>
            <a href={`/categories/${e.id}`}>
              <h4>{e.name}</h4>(<span>{e.count}</span>)
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
