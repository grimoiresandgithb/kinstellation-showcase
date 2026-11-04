
import Image from "next/image";

export default function PrototypeShowcase() {
  return (
    <section
      id="prototype"
      aria-labelledby="prototype-heading"
      className="scroll-mt-12 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#65CFDF]">
          02 / The Prototype
        </p>

        <h2
          id="prototype-heading"
          className="mb-6 text-3xl text-[#FFE0AA] sm:text-4xl md:text-5xl"
        >
          Explore the constellation.
        </h2>

        <p className="mb-14 max-w-3xl text-base leading-8 text-[#F6F0FF]/90 sm:text-lg">
          A connected, visual approach to organizing the
          people and details that matter.
        </p>

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

        {/* Profile and detail entry */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-[#F276B5]/25 bg-[#302546]/80 p-5 shadow-xl sm:p-7">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#17152F]">
              <Image
                src="/images/star-profile.png"
                alt="Kinstellation star profile showing personal details"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-contain"
              />
            </div>

            <div className="pt-7">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#F276B5]">
                02 / Remember the details
              </p>

              <h3 className="mb-3 text-2xl text-[#FFE0AA]">
                Every star has a story.
              </h3>

              <p className="leading-7 text-[#F6F0FF]/85">
                Individual profiles provide a home for
                the meaningful information associated
                with each person.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-[#65CFDF]/25 bg-[#302546]/80 p-5 shadow-xl sm:p-7">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#17152F]">
              <Image
                src="/images/add-detail.png"
                alt="Kinstellation interface for adding a detail to a person's profile"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-contain"
              />
            </div>

            <div className="pt-7">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#65CFDF]">
                03 / Capture what matters
              </p>

              <h3 className="mb-3 text-2xl text-[#FFE0AA]">
                The little things belong somewhere.
              </h3>

              <p className="leading-7 text-[#F6F0FF]/85">
                A dedicated detail-entry experience
                makes it easy to capture information
                within the context of a connection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
