
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPosts } from "../redux/postSlice";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";


const PostTable = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        dispatch(setPosts(data)); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, [dispatch]);

  return (
    <>
    <h3 style={{ textAlign: 'center', fontSize: '24px', color: '#333', marginBottom: '20px' }}>
        <a 
            href="https://jsonplaceholder.typicode.com/posts" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none', color: '#007BFF', fontWeight: 'bold' }}
        >
            Visit JSONPlaceholder Posts API
        </a>
    </h3>
    <TableContainer component={Paper} sx={{ width: { xs: "100%", md: "50%" }, margin: "auto" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.id}</TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

const MindMapPost = () => {
  return (
    <div>
      <PostTable /> 
    </div>
  );
};

export default MindMapPost;
