"use client";
import { Flex } from "@/shared/ui";

interface Props {
  nickname: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ nickname, onChangeHandler }: Props) {
  return (
    <section className="h-[90px] w-[584px]">
      <Flex.RowCenter className="h-full gap-3 bg-white p-[12px]">
        <p className="font-black">@</p>
        <input
          type="text"
          value={nickname}
          className="flex-1 text-[24px] font-light"
          onChange={onChangeHandler}
          placeholder="입력해주세요..."
        />
      </Flex.RowCenter>
    </section>
  );
}
