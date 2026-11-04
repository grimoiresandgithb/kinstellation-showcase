export default function ProjectStory() {
    return (
        <section 
            id="idea"
            aria-labelledby="idea-heading"
            className="relative scroll-mt-12 px-6 py-24 sm:py-32"
        >
            <div className="mx-auto max-w-5xl">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#F276B5]">
                    01 / The Idea 
                </p>

                <h2 
                    id="idea-heading"
                    className="mb-10 text-3xl leading-tight text-[#FFE0AA] sm:text-4xl md:text-5xl"
                >
                    The little things aren't so little.
                </h2>

                <div className="max-w-3xl space-y-6 text-base leading-8 text-[#F6F0FF]/90 sm:text-lg">
                    <p>
                        A favourite coffee order. An upcoming milestone. Something important mentioned in passing.
                    </p>
                    <p>
                        These details help us show people that they matter. But remembering them all takes mental energy, especially
                        when information is scattered across conversations, calendars, contacts, and notes.
                    </p>
                </div>

                <div className="my-16 rounded-3xl border border-[#B7A9F5]/30 bg-[#302546]/85 px-7 py-10 shadow-xl backdrop-blur-sm sm:px-12 sm:py-14">
                    <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#F276B5]">
                        The Question That Started It All
                    </p>

                    <blockquote className="max-w-3xl text-2xl italic leading-relaxed text-[#F6F0FF] sm:text-3xl md:text-4xl">
                        How might we spend less energy remembering, and more energy connecting?
                    </blockquote>

                    <div className="mt-8 h-px w-28 bg-[#FFE0AA]/60" />
                </div>

                <div className="max-w-3xl">
                    <h3 className="mb-6 text-2xl text-[#FFE0AA] sm:text-3xl">
                        A different kind of relationship tool.
                    </h3>

                    <p className="text-base leading-8 text-[#F6F0FF]/90 sm:text-lg">
                        Kinstellation brings meaningful information about the people in our lives into one accessible,
                        interconnected space. Instead of managing relationships as tasks, it helps us keep track of the 
                        details that support genuine connection.
                    </p>
                </div>
            </div>
        </section>
    );
}