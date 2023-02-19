import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import { getUsers } from "./user.service";
import UserRow from "./_partials/UserRow";

const PageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((response) => setUsers(response.data));
  }, []);

  return (
    <TableContainer p={5}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Username</Th>
            <Th>Email</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>

        <Tbody>
          {users.map((user) => {
            return <UserRow user={user} />;
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PageUsers;
