import Link from "next/link";

export default function MenuItem({ item, onClose }) {
  const sharedClasses =
    "group flex items-baseline justify-between border-b border-stone-300/60 pb-4";
  const titleClasses =
    "text-2xl tracking-[0.12em] font-light text-stone-700 transition-colors group-hover:text-stone-500";
  const descriptionClasses = "text-xs font-light tracking-wider text-stone-500";

  if (item.action) {
    return (
      <button
        type="button"
        className={`${sharedClasses} text-left`}
        onClick={item.action}
      >
        <span
          className={titleClasses}
          style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
        >
          {item.title}
        </span>
        <span className={descriptionClasses}>{item.description}</span>
      </button>
    );
  }

  return (
    <Link
      href={item.href}
      target={item.target}
      rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
      className={sharedClasses}
      onClick={onClose}
    >
      <span
        className={titleClasses}
        style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
      >
        {item.title}
      </span>
      <span className={descriptionClasses}>{item.description}</span>
    </Link>
  );
}
