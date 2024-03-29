
interface CategoryCardProps {
  image: string;
  name: string;
}

export function CategoryCard({ image, name }: CategoryCardProps) {
  return (
    <div className="category-card">
      <img src={image} />
      <span>{name}</span>
    </div>
  )
}