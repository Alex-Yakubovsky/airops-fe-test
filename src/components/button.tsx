interface IconButtonProps {
  children: React.ReactNode;
}

export function IconButton({ children }: IconButtonProps) {
  return (
    <button className="w-6 h-6 bg-[hsla(240,_10%,_4%,_0.04)] inline-flex items-center justify-center rounded-md hover:bg-gray-200">
      {children}
    </button>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  fluid?: boolean;
}

export function Button({ children, fluid }: ButtonProps) {
  return (
    <button
      className={`px-4 py-[6px] border border-[hsla(220,_9%,_93%,_1)] text-sm rounded-md font-semibold flex items-center gap-1 h-8 justify-center shadow-sm ${
        fluid ? "w-full" : ""
      } hover:bg-gray-100`}
    >
      {children}
    </button>
  );
}
