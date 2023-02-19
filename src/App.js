import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import PageUsers from "./users/PageUsers";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ChakraProvider>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/users" element={<PageUsers />} />
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
