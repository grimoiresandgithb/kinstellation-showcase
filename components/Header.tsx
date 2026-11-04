
export default function Header() {
  return (
    <header className="relative z-10 w-full">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6"
      >
        <a
          href="#top"
          className="font-display text-xl font-semibold tracking-wide text-[#FFE0AA] transition hover:text-[#F276B5]"
        >
          ✦ Kinstellation
        </a>

        <div className="flex flex-wrap items-center gap-5 text-sm text-[#F6F0FF] sm:gap-8">
          <a href="#idea" className="transition hover:text-[#F276B5]">
            The Idea
          </a>

          <a href="#prototype" className="transition hover:text-[#F276B5]">
            Prototype
          </a>

          <a href="#creator" className="transition hover:text-[#F276B5]">
            Creator
          </a>
        </div>
      </nav>
    </header>
  );
}
