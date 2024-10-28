import CategoryBadge from "../CategoryBadge/CategoryBadge";
import { CategoryListStyled } from "./CategoryList.styled";

export default function CategoryList({ categories }) {
  return (
    <CategoryListStyled>
      {categories.map((category) => (
        <li key={category.icon} className="category-item">
          <CategoryBadge icon={category.icon} feature={category.text} />
        </li>
      ))}
    </CategoryListStyled>
  );
}
