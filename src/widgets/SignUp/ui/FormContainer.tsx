import React from "react";
import { Flex } from "@/shared/ui";
import { Title, CheckInput, Input, ConfirmButton } from "@/features/SignUp";

export default function FormContainer() {
  return (
    <div className="h-[760px] w-[840px] bg-background_grey pt-[205px]">
      <Flex.ColCenter className="w-[584px] gap-[95px]">
        <Title />
        <div className="w-[584px]">
          <Flex.ColCenter className="gap-[60px]">
            <Input />
            <Flex.ColEnd className="w-full gap-[4px]">
              <CheckInput text="(필수) 이용약관 전체동의" id={"이용약관"} />
              <CheckInput text="(선택) 마케팅 수신 동의" id={"마케팅"} />
            </Flex.ColEnd>
            <Flex.ColEnd className="w-full">
              <ConfirmButton />
            </Flex.ColEnd>
          </Flex.ColCenter>
        </div>
      </Flex.ColCenter>
    </div>
  );
}
