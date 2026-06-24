import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Do you only install DrayTek routers?',
    answer:
      'No. We can help with a range of routers, WiFi access points, switches, and small business network equipment.',
  },
  {
    question: 'Can you help if my WiFi is slow?',
    answer:
      'Yes. We can check coverage, interference, router placement, access points, and device setup.',
  },
  {
    question: 'Do you offer remote support?',
    answer:
      'Yes. Some issues can be checked remotely, depending on the router, access method, and customer approval.',
  },
  {
    question: 'Do you offer monthly support?',
    answer:
      'Yes. Monthly support plans are available for small businesses that want ongoing help.',
  },
  {
    question: 'Are prices fixed?',
    answer:
      'Prices are starting prices. Final cost depends on site layout, equipment required, cabling, travel, and complexity.',
  },
  {
    question: 'Do prices include equipment?',
    answer:
      'Unless stated otherwise, prices are for labour and configuration only. Hardware can be quoted separately.',
  },
  {
    question: 'Can you install guest WiFi?',
    answer:
      'Yes. Guest WiFi can be set up for businesses such as cafes, pubs, restaurants, shops, and offices.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-700">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
            Common questions
          </h2>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-lg border border-line bg-white p-5"
            >
              <div className="flex gap-3">
                <HelpCircle
                  className="mt-1 shrink-0 text-blue-700"
                  size={21}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-black text-ink">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
