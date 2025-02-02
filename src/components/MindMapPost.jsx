import React, { useEffect, useState } from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";
import PostNode from "./PostNode"; 

const MindMapPost = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [viewport, setViewport] = useState({ x: 0, y: 0, zoom: 1 });

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

  const handleViewportChange = (newViewport) => {
    if (newViewport) {
      setViewport((prev) => ({
        ...prev,
        y: newViewport.y,
        zoom: newViewport.zoom,
      }));
    }
  };

 
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        zoomOnScroll={true}
        panOnDrag={true}
        zoomOnPinch={true}
        onMove={handleViewportChange}
        viewport={viewport}
      >
        <Background variant="dots" gap={16} size={1} color="#ddd" />
        <Controls />
      </ReactFlow>

      {/* Buttons for left and right movement */}
      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
      </div>
    </div>
  );
};

export default MindMapPost;
