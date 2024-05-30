interface PillProps {
  children: React.ReactNode;
}

export default function Pill({ children }: PillProps) {
  return (
    <button className="inline-flex items-center justify-center gap-2 border border-[hsla(240, 10%, 4%, 0.08)] rounded-full px-[10px] py-[5px] inline-block font-semibold">
      {children}
    </button>
  );
}
