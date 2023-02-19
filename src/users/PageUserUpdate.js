import React, { useState, useEffect } from "react";

import { Flex, Heading, Button, HStack } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { Formiz, useForm } from "@formiz/core";
import { isEmail } from "@formiz/validations";

import InputField from "../auth/_partials/InputField";
import { updateUser, getUser } from "./user.service";

const PageUserUpdate = () => {
  const updateForm = useForm();
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const { id } = useParams();

  useEffect(() => {
    getUser(id).then((response) => setUser(response.data));
  }, [id]);

  const handleSubmit = async (values) => {
    try {
      updateUser(id, values);
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formiz connect={updateForm} onValidSubmit={handleSubmit}>
      <form
        noValidate // Disable native html validation
        onSubmit={updateForm.submit}
      >
        <Flex h="100vh" alignItems="center" justifyContent="center">
          <Flex
            flexDirection="column"
            bg="gray.700"
            p={12}
            borderRadius={8}
            boxShadow="lg"
          >
            <Heading mb={6}>Update user</Heading>

            <HStack flexDirection="row">
              <InputField
                name="name"
                label="Name"
                required="Name is required"
                placeholder={user.name}
              />
              <InputField
                name="username"
                label="Username"
                required="username is required"
                placeholder={user.username}
              />
            </HStack>
            <InputField
              name="email"
              label="Email"
              required="Email is required"
              placeholder={user.email}
              validations={[
                {
                  rule: isEmail(),
                  message: "Not a valid email",
                },
              ]}
            />
            <Button
              disabled={!updateForm.isValid}
              type="submit"
              colorScheme="teal"
              mb={8}
            >
              Update
            </Button>
          </Flex>
        </Flex>
      </form>
    </Formiz>
  );
};

export default PageUserUpdate;
