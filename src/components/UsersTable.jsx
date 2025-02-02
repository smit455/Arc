import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsers } from "../redux/userSlice";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const UsersTable = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        dispatch(setUsers(data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, [dispatch]);

  return (
    <>
    <h3 style={{ textAlign: 'center', fontSize: '24px', color: '#333', marginBottom: '20px' }}>
        <a 
            href="https://jsonplaceholder.typicode.com/users" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none', color: '#007BFF', fontWeight: 'bold' }}
        >
            Visit JSONPlaceholder Users API
        </a>
    </h3>
    <TableContainer component={Paper} sx={{ width: { xs: "100%", md: "50%" }, margin: "auto" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default UsersTable;
