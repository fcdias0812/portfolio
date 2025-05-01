interface TechnologiesProps {
  img: string;
  name: string;
}

export function Technologies({ img, name }: TechnologiesProps) {
  return (
    <div className="flex gap-1 items-center px-2 py-1 border-1 border-zinc-500/60 rounded-sm w-fit">
      <img src={img} alt={name} className="w-4.5 h-4.5" />
      <p>{name}</p>
    </div>
  );
}
