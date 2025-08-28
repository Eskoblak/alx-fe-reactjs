import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    refetchOnWindowFocus: true, 
    keepPreviousData: true,     
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Posts</h2>
      <button
        onClick={() => refetch()}
        className="bg-blue-500 text-white px-3 py-1 rounded mb-4"
      >
        Refetch Posts
      </button>

      {isFetching && <p>Updating posts...</p>}

      <ul className="list-disc pl-6">
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
