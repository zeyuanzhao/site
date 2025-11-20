import Link from "next/link";

export function ULink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="bg-gradient-to-r from-indigo-500 to-green-500 bg-clip-text text-transparent hover:underline hover:decoration-slate-500 hover:decoration-2"
    >
      {children}
    </Link>
  );
}
