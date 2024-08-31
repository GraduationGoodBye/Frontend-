import React from "react";
import { Metadata } from "next";

import { SignUpPage } from "@/pages/SignUp";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "GGB SignUp page",
};

export default () => {
  return <SignUpPage />;
};
