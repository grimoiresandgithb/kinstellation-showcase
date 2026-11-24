
import Image from "next/image";

export default function PrototypeShowcase() {
  return (
    <section
      id="prototype"
      aria-labelledby="prototype-heading"
      className="scroll-mt-12 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section heading */}
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#65CFDF]">
          02 / The Prototype
        </p>

        <h2
          id="prototype-heading"
          className="mb-6 text-3xl text-[#FFE0AA] sm:text-4xl md:text-5xl"
        >
          Explore the constellation.
        </h2>

        <p className="mb-8 max-w-3xl text-base leading-8 text-[#F6F0FF]/90 sm:text-lg">
          Step into a fictional universe of 21 stars connected through friendships, family, and chosen community.
          Explore their relationships, discover the little things worth remembering, and ask Kinstellation 
          questions using natural language.
        </p>

        {/* Interactive demo button */}
        <div className="mb-12 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-start sm:text-left">
          <a
            href="https://kinstellation-alyssa19.vercel.app/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#B7A9F5] px-8 py-4 text-center font-semibold text-[#17152F] transition hover:bg-[#FFE0AA] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFE0AA]"
          >
            Launch Interactive Demo ↗
          </a>

          <p className="text-sm text-[#F6F0FF]/70">
            Explore 21 fictional stars, their connections,
            and meaningful memories. No account required.
          </p>
        </div>

        {/* Featured constellation screenshot */}
        <div className="overflow-hidden rounded-3xl border border-[#B7A9F5]/30 bg-[#302546]/80 p-4 shadow-2xl sm:p-7">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#17152F]">
            <Image
              src="/images/constellation.png"
              alt="Kinstellation's visual constellation interface showing connected stars"
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-contain"
            />
          </div>

          <div className="px-2 pb-2 pt-7">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#65CFDF]">
              01 / See your connections
            </p>

            <h3 className="mb-3 text-2xl text-[#FFE0AA]">
              Relationships, visualized.
            </h3>

            <p className="max-w-2xl leading-7 text-[#F6F0FF]/85">
              Explore an interactive constellation that
              brings your connections together in one
              visual space.
            </p>
          </div>
        </div>

        {/* Three feature screenshots */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {/* Star Profile */}
          <div className="rounded-3xl border border-[#F276B5]/25 bg-[#302546]/80 p-5 shadow-xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#17152F]">
              <Image
                src="/images/star-profile.png"
                alt="Kinstellation star profile showing personal details"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-contain"
              />
            </div>

            <div className="pt-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#F276B5]">
                02 / Remember the details
              </p>

              <h3 className="mb-3 text-xl text-[#FFE0AA]">
                Every star has a story.
              </h3>

              <p className="text-sm leading-7 text-[#F6F0FF]/85">
                Individual profiles provide a home for
                meaningful information about each person.
              </p>
            </div>
          </div>

          {/* Add Detail */}
          <div className="rounded-3xl border border-[#65CFDF]/25 bg-[#302546]/80 p-5 shadow-xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#17152F]">
              <Image
                src="/images/add-detail.png"
                alt="Kinstellation interface for adding a detail to a person's profile"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-contain"
              />
            </div>

            <div className="pt-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#65CFDF]">
                03 / Capture what matters
              </p>

              <h3 className="mb-3 text-xl text-[#FFE0AA]">
                The little things belong somewhere.
              </h3>

              <p className="text-sm leading-7 text-[#F6F0FF]/85">
                Capture meaningful details directly within
                the context of a connection.
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="rounded-3xl border border-[#B7A9F5]/25 bg-[#302546]/80 p-5 shadow-xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#17152F]">
              <Image
                src="/images/search.png"
                alt="Kinstellation search interface displaying matching information"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-contain"
              />
            </div>

            <div className="pt-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#B7A9F5]">
                04 / Find what matters
              </p>

              <h3 className="mb-3 text-xl text-[#FFE0AA]">
                Remember without searching your memory.
              </h3>

              <p className="text-sm leading-7 text-[#F6F0FF]/85">
                Ask questions like &ldquo;Who likes pottery?&rdquo;
                or &ldquo;What does Maya enjoy?&rdquo;
                Kinstellation searches saved memories and interests
                to help you find the information that matters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
