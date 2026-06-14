import Image from "next/image";
import Link from "next/link";

export default function BrandLogo() {
  return (
    <Link
      href="/"
      className="hidden shrink-0 items-center gap-3 sm:flex"
      aria-label="E-NISHI home"
    >
      <Image
        src="/icon.png"
        alt="E-NISHI icon"
        width={44}
        height={44}
        className="h-10 w-10 object-contain"
        priority
      />
      <span className="h-10 w-px bg-[#C7A86B]/70" aria-hidden="true" />
      <div className="flex items-baseline gap-3 text-[#222]">
        <span
          className="text-[1.9rem] leading-none tracking-[-0.06em] sm:text-[2.35rem]"
          style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
        >
          縁
        </span>
        <span className="text-[0.74rem] font-light tracking-[0.34em] text-[#2A2A2A] sm:text-[0.88rem]">
          E-NISHI
        </span>
      </div>
    </Link>
  );
}
