import React, { useEffect, useState } from "react";
import ReactFlow, { Background } from "reactflow";
import "reactflow/dist/style.css";
import PostNode from "./PostNode"; 

const MindMapPost = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      const rootNode = {
        id: "root",
        type: "customNode",
        data: { title: "Posts", body: "List of Posts" },
        position: { x: 600, y: 50 }, 
      };

      const postNodes = data.slice(0, 10).map((post, index) => ({
        id: post.id.toString(),
        type: "customNode",
        data: { title: post.title, body: post.body },
        position: {
          x: 300 * (index % 4), 
          y: 200 + Math.floor(index / 4) * 250, 
        },
      }));

      const postEdges = data.slice(0, 10).map((post) => ({
        id: `e-root-${post.id}`,
        source: "root",
        target: post.id.toString(),
      }));

      setNodes([rootNode, ...postNodes]);
      setEdges(postEdges);
    };

    fetchData();
  }, []);

  const nodeTypes = { customNode: PostNode };

  return (
    <div style={{ width: "100%", height: "100vh", border: "1px solid #ccc" }}>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
        <Background variant="dots" gap={16} size={1} color="#ddd" />
      </ReactFlow>
    </div>
  );
};

export default MindMapPost;
