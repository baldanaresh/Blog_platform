import  { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [editingPost, setEditingPost] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const token = localStorage.getItem('token');
  // Fetch all posts
  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/posts'); // Updated according to `/` in your backend route
      setPosts(response.data);
      
    } catch (error) {
      console.error('Error fetching posts:', error);
    }finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  const handleCreatePost = async () => {
      setLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/posts/create', newPost,
            {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      ); // Updated to `/create`
      // setPosts([...posts, response.data]);
       setPosts((prevPosts) => [...prevPosts, response.data]);
      setNewPost({ title: '', content: '' });
     
      console.log("post created successfully")
    } catch (error) {
      console.error('Error creating post:', error);
    }finally {
      setLoading(false);
    }
  };

  // Handle updating a post
  const handleUpdatePost = async (postId) => {
      setLoading(true);
    try {
      const response = await axios.put(`http://localhost:3000/posts/update/${postId}`, editingPost,
         {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      ); // Updated to `/update/:id`
      setPosts(posts.map(post => (post.id === postId ? response.data : post)));
      setEditingPost(null);
      
      console.log("post updated successfully");
    } catch (error) {
      console.error('Error updating post:', error);
    }finally {
      setLoading(false);
    }
  };

   return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Post Management</h1>

      {loading ? (
        <p className="text-blue-500">Loading...</p>
      ) : (
        <>
          {/* Form for creating a new post */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
            <input
              type="text"
              placeholder="Title"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              className="border mb-2 p-2 w-full"
            />
            <textarea
              placeholder="Content"
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
              className="border mb-4 p-2 w-full"
            />
            <button
              onClick={handleCreatePost}
              className="bg-blue-500 text-white px-4 py-2 rounded"
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Creating...' : 'Create Post'}
            </button>
          </div>

          {/* List of posts created by the admin */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Your Posts</h2>
            {posts.map((post,index) => (
              <div key={`${post.id}-${index}`} className="border p-4 mb-4 rounded">
                {editingPost?.id === post.id ? (
                  <div>
                    <input
                      type="text"
                      value={editingPost?.title || ''}
                      onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                      className="border mb-2 p-2 w-full"
                    />
                    <textarea
                      value={editingPost?.content || ''}
                      onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                      className="border mb-4 p-2 w-full"
                    />
                    <button
                      onClick={() => handleUpdatePost(post.id)}
                      className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                      disabled={loading} // Disable button while loading
                    >
                      {loading ? 'Saving...' : 'Save'}
                    </button>
                    <button onClick={() => setEditingPost(null)} className="text-red-500">
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-lg font-bold">{post.title}</h3>
                    <p className="mb-2">{post.content}</p>
                    <button
                      onClick={() => setEditingPost(post)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded"
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AdminPostsPage;
