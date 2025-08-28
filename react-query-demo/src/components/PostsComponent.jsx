import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

function PostsComponent() {
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60, // 1 min before considering "stale"
    cacheTime: 1000 * 60 * 5, // keep cache for 5 min
  });

  if (isLoading) return <p className="p-4">Loading posts...</p>;
  if (isError) return <p className="p-4 text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Posts</h2>
      <button
        onClick={() => refetch()}
        className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
      >
        Refetch Posts
      </button>
      <ul className="list-disc ml-6">
        {data.slice(0, 10).map((post) => (
          <li key={post.id} className="mb-2">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
