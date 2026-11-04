
export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[85vh] flex-col"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#F276B5] sm:text-sm">
          A personal relationship management app
        </p>

        <h1 className="font-display mb-8 text-5xl font-semibold tracking-wide text-[#FFE0AA] sm:text-6xl md:text-7xl">
          Kinstellation
        </h1>

        <div className="space-y-3">
          <p className="text-2xl font-medium text-[#F6F0FF] sm:text-3xl md:text-4xl">
            Spend less energy remembering.
          </p>

          <p className="text-2xl italic text-[#B7A9F5] sm:text-3xl md:text-4xl">
            More energy connecting.
          </p>
        </div>

        <p className="mt-9 max-w-2xl text-base leading-relaxed text-[#F6F0FF]/85 sm:text-lg">
          A thoughtful new way to organize the details that
          make our relationships meaningful.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#idea"
            className="rounded-full bg-[#B7A9F5] px-7 py-3 font-semibold text-[#17152F] transition hover:bg-[#FFE0AA] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFE0AA]"
          >
            Explore the Project
          </a>

          <a
            href="#creator"
            className="rounded-full border border-[#B7A9F5] px-7 py-3 font-semibold text-[#F6F0FF] transition hover:bg-[#302546] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFE0AA]"
          >
            Meet the Creator
          </a>
        </div>

        <a
          href="#idea"
          className="mt-16 text-sm text-[#B7A9F5] transition hover:text-[#FFE0AA]"
        >
          Scroll to explore ↓
        </a>
      </div>
    </section>
  );
}
