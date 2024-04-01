
interface BlogPostProps {
  post: {
    image: string;
    title: string;
    description: string;
    link: string;
  }
}

export function BlogPost({ post }: BlogPostProps) {
  const { image, title, description, link } = post;
  return (
    <div className="blog-post">
      <img src={image} />
      <h1>{title}</h1>
      <p>{description}</p>
      <a href={link}>Saiba mais!</a>
    </div>
  )
}