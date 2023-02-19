import React from "react";
import { Tr, Td, Button, HStack } from "@chakra-ui/react";
import { deleteUser } from "../user.service";
import { Link } from "react-router-dom";

const UserRow = ({ user }) => {
  return (
    <Tr>
      <Td>{user.name}</Td>
      <Td>{user.username}</Td>
      <Td>{user.email}</Td>
      <Td>
        <HStack flexDirection="row">
          <Button
            colorScheme="red"
            size="sm"
            onClick={() => deleteUser(user._id)}
          >
            Delete
          </Button>
          <Button
            as={Link}
            to={`update/${user._id}`}
            colorScheme="teal"
            size="sm"
          >
            Update
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
};

export default UserRow;
