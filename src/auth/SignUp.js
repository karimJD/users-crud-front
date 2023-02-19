import React from "react";

import { Flex, Heading, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Formiz, useForm } from "@formiz/core";
import { isEmail } from "@formiz/validations";

import InputField from "./_partials/InputField";
import { userRegistration } from "./auth.service";

const SignUp = () => {
  const signupForm = useForm();

  const handleSubmit = (values) => {
    userRegistration(values);
  };

  return (
    <Formiz connect={signupForm} onValidSubmit={handleSubmit}>
      <Flex h="100vh" alignItems="center" justifyContent="center">
        <Flex
          flexDirection="column"
          bg="gray.700"
          p={12}
          borderRadius={8}
          boxShadow="lg"
        >
          <Heading mb={6}>Sign up</Heading>
          <form
            noValidate // Disable native html validation
            onSubmit={signupForm.submit}
          >
            <Flex flexDirection="row">
              <InputField
                name="name"
                label="Name"
                required="Name is required"
              />
              <InputField
                name="username"
                label="Username"
                required="username is required"
              />
            </Flex>
            <InputField
              name="email"
              label="Email"
              required="Email is required"
              validations={[
                {
                  rule: isEmail(),
                  message: "Not a valid email",
                },
              ]}
            />
            <InputField name="password" label="Password" type="password" />
            <InputField
              name="passwordConfirm"
              label="Confirm password"
              type="password"
              validations={[
                {
                  rule: (value) => signupForm.values.password === value,
                  deps: [signupForm.values.password],
                  message: "Passwords do not match",
                },
              ]}
            />
            <Button
              disabled={!signupForm.isValid}
              type="submit"
              colorScheme="teal"
              mb={8}
            >
              Create
            </Button>
            <Flex flexDirection="row">
              <Text>Already have an account ?</Text>
              <Text as={Link} to="/" ml={2} color="teal" fontWeight="bold">
                Sign in
              </Text>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </Formiz>
  );
};

export default SignUp;
