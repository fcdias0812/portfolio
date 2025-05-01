interface LinksProps {
  img: string;
  name: string;
  href?: string;
}

export function Links({ img, name, href }: LinksProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-1 items-center px-2 py-1 border-1 border-zinc-500/60 rounded-sm w-fit bg-white text-black md:hover:scale-110"
    >
      <img src={img} alt={name} className="w-4.5 h-4.5" />
      <p>{name}</p>
    </a>
  );
}
