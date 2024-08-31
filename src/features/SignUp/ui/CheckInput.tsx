export default function CheckInput({ text, id }: { text: string; id: string }) {
  return (
    <div className="flex w-[200px] items-center gap-2">
      <input
        type="checkbox"
        className="h-[20px] w-[20px] appearance-none border border-black"
      />
      <label htmlFor={id} className="border-black text-[16px]">
        {text}
      </label>
    </div>
  );
}
