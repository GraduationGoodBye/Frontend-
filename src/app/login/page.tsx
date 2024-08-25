import React from "react";
import { Flex } from "../../shared/ui";
import Image from "next/image";
import { Icon } from "../../shared/icon/icon";
import { Metadata } from "next";
import LoginButtons from "./LoginButtons";

export const metadata: Metadata = {
  title: "Login",
  description: "GGB login page",
};

const page = () => {
  return (
    <div className="flex h-screen w-full">
      <Flex.ColCenter className="bg-background_light">
        <p className="text-center font-super text-4xl">Graduation, Good bye.</p>
        <p className="text-center font-super text-4xl">
          and Say Hi to NEW GENERATIONS
        </p>
      </Flex.ColCenter>
      <Flex.ColCenter className="gap-8 bg-primary">
        <p className="font-super text-[32px]">sign in!</p>
        <LoginButtons />
      </Flex.ColCenter>
    </div>
  );
};

export default page;
