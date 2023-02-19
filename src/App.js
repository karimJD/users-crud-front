import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import PageSignUp from "./auth/PageSignUp";
import PageSignIn from "./auth/PageSignIn";
import PageUsers from "./users/PageUsers";
import PageUserUpdate from "./users/PageUserUpdate";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ChakraProvider>
          <Routes>
            <Route path="/" element={<PageSignIn />} />
            <Route path="/signup" element={<PageSignUp />} />
            <Route path="/users" element={<PageUsers />} />
            <Route path="/users/update/:id" element={<PageUserUpdate />} />
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
