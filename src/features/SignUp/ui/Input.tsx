import { Flex } from "@/shared/ui";

export default function Input() {
  return (
    <section className="h-[90px] w-[584px]">
      <Flex.RowCenter className="h-full gap-3 bg-white p-[12px]">
        <p className="font-black">@</p>
        <input
          type="text"
          className="flex-1 text-[24px] font-light"
          placeholder="입력해주세요..."
        />
      </Flex.RowCenter>
    </section>
  );
}
