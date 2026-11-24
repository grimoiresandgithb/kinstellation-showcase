
const currentFeatures = [
  {
    title: "Visual connections",
    description:
      "Explore your relationships through an interactive constellation, where every star represents someone in your life.",
  },
  {
    title: "Meaningful profiles",
    description:
      "Keep birthdays, preferences, interests, memories, and important details together in each person's profile.",
  },
  {
    title: "Connected relationships",
    description:
      "Discover how the people in your universe are connected through family, friendship, and chosen community.",
  },
  {
    title: "Voice-to-text input",
    description:
      "Ask questions or capture thoughts using your voice, with everything returned as readable text.",
  },
  {
    title: "AI-assisted search",
    description:
      "Ask natural-language questions like 'Who likes pottery?' or 'What does Maya enjoy?' to find relevant saved information.",
  },
  {
    title: "Flexible memory capture",
    description:
      "Capture meaningful details using natural-language input or organize them within individual profiles.",
  },
];

const futureFeatures = [
  {
    title: "Thoughtful reminders",
    description:
      "Explore optional birthday, occasion, and context-aware reminders that surface useful information at the right moment.",
  },
  {
    title: "Smarter memory capture",
    description:
      "Expand AI-assisted input to recognize and organize multiple meaningful details from a single thought, with user confirmation before saving.",
  },
  {
    title: "Discover shared interests",
    description:
      "Explore connections between people, hobbies, and preferences through a richer interactive relationship graph.",
  },
  {
    title: "A universe that grows with you",
    description:
      "Develop more ways to organize, explore, and maintain meaningful connections while keeping the experience flexible and low-pressure.",
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
          Kinstellation combines visual navigation,
          meaningful memories, and intelligent search
          to help you remember what matters.
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
            Kinstellation is an evolving prototype.
            The public demo showcases its current
            capabilities using fictional data;
            future features are exploratory.
          </p>
        </div>
      </div>
    </section>
  );
}
