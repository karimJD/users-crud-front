import React from "react";
import { Flex, Heading, Button, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Formiz, useForm } from "@formiz/core";

import InputField from "./_partials/InputField";
import { login } from "./auth.service";

const SignIn = () => {
  const signinForm = useForm();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const result = await login(values);
      localStorage.setItem("token", result.data);
      console.log(result);
      navigate("users");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Formiz connect={signinForm} onValidSubmit={handleSubmit}>
      <Flex h="100vh" alignItems="center" justifyContent="center">
        <Flex
          flexDirection="column"
          bg="gray.700"
          p={12}
          borderRadius={8}
          boxShadow="lg"
        >
          <form
            noValidate // Disable native html validation
            onSubmit={signinForm.submit}
          >
            <Heading mb={6}>Sign in</Heading>
            <InputField
              name="email"
              label="Email"
              required="username is required"
            />
            <InputField
              name="password"
              label="Password"
              required="username is required"
            />

            <Button type="submit" colorScheme="teal" mb={8}>
              Log In
            </Button>
            <Flex flexDirection="row">
              <Text>Don't have an account ?</Text>
              <Text
                as={Link}
                to="/signup"
                ml={2}
                color="teal"
                fontWeight="bold"
              >
                Signup
              </Text>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </Formiz>
  );
};

export default SignIn;
