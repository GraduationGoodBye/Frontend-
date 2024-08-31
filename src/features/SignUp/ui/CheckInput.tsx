"use client";

interface Props {
  text: string;
  id: string;
  isChecked: boolean;
  handleClick: () => void;
}

export default function CheckInput({
  text,
  id,
  isChecked,
  handleClick,
}: Props) {
  return (
    <div
      className="relative flex w-[200px] items-center gap-2"
      onChange={handleClick}
    >
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={() => {}}
        className="h-[20px] w-[20px] appearance-none border border-black"
      />
      {!isChecked && (
        <svg
          onClick={handleClick}
          className="absolute left-0 top-0 h-[20px] w-[20px] text-red-700"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      )}

      <label htmlFor={id} className="border-black text-[16px]">
        {text}
      </label>
    </div>
  );
}
