import React, { useEffect, useState } from "react";
import ReactFlow, { Handle, Background } from "reactflow";
import "reactflow/dist/style.css";

const MindMapNode = ({ data }) => (
  <div
    style={{
      padding: 10,
      border: "1px solid #ddd",
      borderRadius: 5,
      background: "#f4f4f4",
      textAlign: "center",
      width: 180, 
      boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    }}
  >
    <strong>{data.label}</strong>
    {data.email && <p style={{ fontSize: "12px", color: "#555" }}>{data.email}</p>}
    <Handle type="source" position="bottom" style={{ background: "#555" }} />
    <Handle type="target" position="top" style={{ background: "#555" }} />
  </div>
);

const MindMap = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      const rootNode = {
        id: "root",
        type: "customNode", 
        data: { label: "Users" },
        position: { x: 400, y: 50 }, 
      };

      const userNodes = data.map((user, index) => ({
        id: user.id.toString(),
        type: "customNode", 
        data: { label: user.name, email: user.email },
        position: {
          x: 250 * (index % 4),
          y: 150 + Math.floor(index / 4) * 150, 
        },
      }));

      const userEdges = data.map((user) => ({
        id: `e-root-${user.id}`,
        source: "root",
        target: user.id.toString(),
      }));

      setNodes([rootNode, ...userNodes]);
      setEdges(userEdges);
    };

    fetchData();
  }, []);

  const nodeTypes = { customNode: MindMapNode };
 
  return (
    <div style={{ width: "100%", height: "600px", border: "1px solid #ccc" }}>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView >
        <Background variant="dots" gap={16} size={1} color="#ddd" />
      </ReactFlow>
    </div>
  );
};


export default MindMap;
