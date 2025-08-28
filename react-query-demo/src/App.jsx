import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient();

function About() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">About Page</h2>
      <p>This is just a demo page to test React Query caching.</p>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <nav className="p-4 bg-gray-100 flex gap-4">
          <Link to="/posts" className="text-blue-500 hover:underline">
            Posts
          </Link>
          <Link to="/about" className="text-blue-500 hover:underline">
            About
          </Link>
        </nav>
        <Routes>
          <Route path="/posts" element={<PostsComponent />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
