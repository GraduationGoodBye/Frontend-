import React from "react";
import { Flex } from "../../shared/ui";
import { Metadata } from "next";
import LoginButtons from "../../features/login/ui/LoginButtons";
import { Login } from "../../widgets";

export const metadata: Metadata = {
  title: "Login",
  description: "GGB login page",
};

const page = () => {
  return <Login />;
};

export default page;
