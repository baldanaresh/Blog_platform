// src/pages/BlogList.jsx

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BlogList = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  


  useEffect(() => {
    // Fetch blogs from the backend
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/posts');
        setBlogs(response.data); // Set the response data (blogs) to state
        setLoading(false);
      } catch (err) {
        setError('Error fetching blogs' +err);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p className="text-center text-blue-500">Loading blogs...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to my Blogs</h1>

      {/* <h1 onClick={()=>{
        navigate('/AdminPosts')
      }}>Create Blog</h1> */}
      <button onClick={()=>{
        navigate('/AdminPostsPage')
      }}> Create Post</button>

      {/* Render the list of blogs */}
      {blogs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-md rounded-lg p-6">
              {/* Blog Title */}
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-700 mb-4">{blog.content.substring(0, 100)}...</p>

              {/* Author and Date */}
              {blog.author && (
                <p className="text-gray-500 text-sm">By {blog.author.name}</p>
              )}
              <p className="text-gray-500 text-sm">
                {new Date(blog.createdAt).toLocaleDateString()}
              </p>

              {/* Comments Section */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Comments:</h3>
                {blog.comments && blog.comments.length > 0 ? (
                  <ul className="mt-2 space-y-2">
                    {blog.comments.map((comment) => (
                      <li key={comment.id} className="border-t pt-2">
                        <p className="text-gray-800">{comment.content}</p>
                        <p className="text-gray-500 text-sm">
                          - {comment.user.name}, {new Date(comment.createdAt).toLocaleString()}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No comments yet.</p>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-700">No blogs available.</p>
      )}
    </div>
  );
};

export default BlogList;
