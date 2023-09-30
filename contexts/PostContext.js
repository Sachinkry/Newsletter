import { createContext, useContext, useState } from 'react';

const PostContext = createContext();

export const usePosts = () => {
  return useContext(PostContext);
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const addPost = async (post) => {
    try {
      console.log("post to be added", post)
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
      });

      const data = await res.json();
      setPosts([...posts, data]);
    } catch (error) {
      console.error("Couldn't add post:", error);
    }
  };

  // Add other CRUD operations here

  const value = { posts, addPost };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
