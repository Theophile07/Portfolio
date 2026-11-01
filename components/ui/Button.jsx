import Link from "next/link";

export default function Button({
  text,
  href = "#contact",
  variant = "primary",
  className = "",
}) {
  const buttonVariants = {
    primary: "bg-[#6366F1] text-white hover:bg-indigo-500/85",
    secondary: "bg-[#1A1E28] text-white hover:bg-slate-800",
  };

  return (
    <Link
      href={href}
      className={`inline-flex w-fit items-center justify-center rounded-[13px] px-5 py-3 text-base font-semibold transition duration-300 hover:-translate-y-0.5 ${buttonVariants[variant]} ${className}`}
    >
      {text}
    </Link>
  );
}