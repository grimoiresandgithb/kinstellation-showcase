
const currentFeatures = [
  {
    title: "Visual connections",
    description:
      "Explore relationships through an interactive constellation.",
  },
  {
    title: "Personal profiles",
    description:
      "Keep meaningful information about the people in your life.",
  },
  {
    title: "Voice-to-text",
    description:
      "Capture information using spoken input.",
  },
  {
    title: "Natural-language filtering",
    description:
      "Find information using conversational search terms.",
  },
];

const futureFeatures = [
  {
    title: "AI-assisted interaction",
    description:
      "Explore intelligent interpretation of natural-language input and information retrieval.",
  },
  {
    title: "Thoughtful reminders",
    description:
      "Investigate optional birthday and location-based alerts that help surface relevant details at useful moments.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="scroll-mt-12 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#F276B5]">
          03 / The Experience
        </p>

        <h2
          id="features-heading"
          className="mb-6 text-3xl text-[#FFE0AA] sm:text-4xl md:text-5xl"
        >
          Designed around real connections.
        </h2>

        <p className="mb-12 max-w-3xl text-base leading-8 text-[#F6F0FF]/85 sm:text-lg">
          Kinstellation combines visual navigation with
          flexible ways to capture and find information.
          The goal is to reduce cognitive effort without
          making relationships feel like another task list.
        </p>

        <h3 className="mb-6 text-xl text-[#65CFDF]">
          In the current prototype
        </h3>

        <div className="mb-16 grid gap-5 sm:grid-cols-2">
          {currentFeatures.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-[#65CFDF]/25 bg-[#302546]/80 p-7"
            >
              <h4 className="mb-3 text-lg font-semibold text-[#FFE0AA]">
                {feature.title}
              </h4>
              <p className="leading-7 text-[#F6F0FF]/85">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-[#B7A9F5]/30 bg-[#17152F]/85 p-7 sm:p-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#F276B5]">
            Looking Ahead
          </p>

          <h3 className="mb-8 text-2xl text-[#FFE0AA] sm:text-3xl">
            A constellation still growing.
          </h3>

          <div className="grid gap-8 sm:grid-cols-2">
            {futureFeatures.map((feature) => (
              <div key={feature.title}>
                <h4 className="mb-3 text-lg font-semibold text-[#B7A9F5]">
                  {feature.title}
                </h4>

                <p className="leading-7 text-[#F6F0FF]/85">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-9 border-t border-[#B7A9F5]/20 pt-6 text-sm italic text-[#B7A9F5]">
            Future capabilities are exploratory and are
            not yet part of the working prototype.
          </p>
        </div>
      </div>
    </section>
  );
}
