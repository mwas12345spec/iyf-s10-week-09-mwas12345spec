import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Posts() {
  const { data: posts, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Posts</h1>
      {posts.slice(0, 10).map((post) => (
        <div key={post.id} className="card">
          <h3>{post.title}</h3>
          <p>{post.body.slice(0, 100)}...</p>
          <Link to={`/posts/${post.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}