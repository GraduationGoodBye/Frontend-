interface Props {
  heading: string;
  content: string;
}

export default function Terms({ heading, content }: Props) {
  return (
    <div className="h-[274px] w-[770px] gap-2 bg-background_light p-[16px]">
      <h3 className="mb-[30px] font-super text-[16px]">{heading}</h3>
      <p className="text-[12px]">{content}</p>
    </div>
  );
}
