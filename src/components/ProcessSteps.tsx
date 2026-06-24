import { ClipboardList, MessageSquareText, ThumbsUp, Wrench } from 'lucide-react';

const steps = [
  {
    title: 'Contact us',
    description: 'Send the basics through the quote form or call when ready.',
    icon: MessageSquareText,
  },
  {
    title: 'Tell us the issue or project',
    description: 'Share the symptoms, site type, location, and what needs to work.',
    icon: ClipboardList,
  },
  {
    title: 'We recommend the best option',
    description: 'You get a plain-English recommendation and a clear starting price.',
    icon: ThumbsUp,
  },
  {
    title: 'Installation, testing, and handover',
    description: 'We install, test, explain what changed, and leave useful notes.',
    icon: Wrench,
  },
];

export function ProcessSteps() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-700">
            Process
          </p>
          <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
            A straightforward way to get the network fixed
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-lg border border-line bg-slate-50 p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-black text-blue-700">
                  Step {index + 1}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-brand-700 shadow-sm">
                  <step.icon size={21} aria-hidden="true" />
                </span>
              </div>
              <h3 className="text-lg font-black text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
