import React from "react";
import { Metadata } from "next";
import { Login } from "../../widgets";

export const metadata: Metadata = {
  title: "Login",
  description: "GGB login page",
};
const page = () => {
  return <Login />;
};

export default page;
