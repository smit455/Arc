import React from "react";
import { Handle } from "reactflow";
import "reactflow/dist/style.css";

const PostNode = ({ data }) => (
  <div style={{
    padding: 10,
    border: "1px solid #ddd",
    borderRadius: 5,
    background: "#f4f4f4",
    textAlign: "center",
    width: 200,
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
  }}>
    <strong>{data.title}</strong>
    <p style={{ fontSize: "12px", color: "#555" }}>{data.body}</p>
    <Handle type="source" position="bottom" style={{ background: "#555" }} />
    <Handle type="target" position="top" style={{ background: "#555" }} />
  </div>
);

export default PostNode;
