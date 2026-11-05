
export default function CreatorSection() {
  return (
    <section
      id="creator"
      aria-labelledby="creator-heading"
      className="scroll-mt-12 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#F276B5]">
          04 / The Creator
        </p>

        <div className="rounded-3xl border border-[#B7A9F5]/30 bg-[#302546]/90 p-7 shadow-2xl backdrop-blur-sm sm:p-12">
          <div className="mb-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div
              aria-hidden="true"
              className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-[#FFE0AA]/60 bg-[#17152F] text-5xl text-[#FFE0AA]"
            >
              ✦
            </div>

            <div>
              <h2
                id="creator-heading"
                className="mb-3 text-3xl text-[#FFE0AA] sm:text-4xl"
              >
                Alyssa DaCosta
              </h2>

              <p className="text-sm text-[#B7A9F5] sm:text-base">
                Software Developer · Bachelor of Technology,
                SAIT
              </p>
            </div>
          </div>

          <h3 className="mb-7 text-2xl text-[#F6F0FF] sm:text-3xl">
            Creative. Capable. Unconventional.
          </h3>

          <div className="max-w-3xl space-y-5 text-base leading-8 text-[#F6F0FF]/90">
            <p>
              I believe technology works best when thoughtful
              design and practical functionality are developed
              together.
            </p>

            <p>
              My background spans creative production,
              community building, and problem-solving.
              Today, I bring those perspectives into
              software development, with a focus on
              accessible, intuitive experiences that
              serve real people.
            </p>

            <p>
              Kinstellation reflects that approach:
              exploring how technology can support
              meaningful human connections without
              adding unnecessary complexity.
            </p>
          </div>

          <div className="mt-10 border-t border-[#B7A9F5]/25 pt-8">
            <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-[#F276B5]">
              Let&apos;s Connect
            </p>

            <div className="flex flex-wrap gap-4">

                <a
                    href="mailto:alyssalrd@gmail.com?subject=Hello%20from%20Kinstellation"
                    className="inline-flex items-center justify-center rounded-full bg-[#B7A9F5] px-6 py-3 font-semibold text-[#17152F] transition hover:bg-[#FFE0AA] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFE0AA]"
                >
                    ✉ Email Me
                </a>
              <a
                href="https://www.linkedin.com/in/alyssa-d/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#B7A9F5] px-6 py-3 font-semibold text-[#17152F] transition hover:bg-[#FFE0AA]"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/grimoiresandgithb"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#B7A9F5] px-6 py-3 font-semibold text-[#F6F0FF] transition hover:bg-[#17152F]"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
