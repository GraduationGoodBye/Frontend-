import React from "react";
import { Flex } from "../../shared/ui";

const page = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="flex w-full flex-col items-center justify-center bg-background_light">
        <p className="text-center font-super text-4xl">Graduation, Good bye.</p>
        <p className="text-center font-super text-4xl">
          and Say Hi to NEW GENERATIONS
        </p>
      </div>
      <Flex.ColCenter className="bg-primary">
        <p className="font-super text-[32px]">sign in!</p>
        <button>google</button>
      </Flex.ColCenter>
    </div>
  );
};

export default page;
