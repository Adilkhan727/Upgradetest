import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'С какого возраста можно начать учиться?',
    answer: 'Мы принимаем детей с 6 лет. Для каждой возрастной группы есть адаптированная программа: дети (6–10), подростки (11–17) и взрослые.',
  },
  {
    question: 'Как часто проходят занятия?',
    answer: 'Это зависит от выбранной программы. Стандартная схема — 2–3 занятия в неделю по 60–90 минут. Возможна индивидуальная настройка графика.',
  },
  {
    question: 'Можно ли учиться онлайн?',
    answer: 'Да, мы предлагаем как онлайн, так и офлайн занятия, а также гибридный формат. Выбирайте удобный вам способ.',
  },
  {
    question: 'Какой балл IELTS я смогу получить?',
    answer: 'Средний результат наших студентов — 7.5+. Конечный балл зависит от вашего начального уровня, прилежания и времени подготовки. Мы даём персональную прогнозную оценку на первой консультации.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-14 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40 sm:p-10">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">FAQ</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Часто задаваемые вопросы.
        </h2>
      </div>
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((faq, index) => (
          <button
            key={index}
            onClick={() => toggleFaq(index)}
            className="w-full rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 text-left transition hover:border-primary hover:bg-white"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-base font-semibold text-slate-950 sm:text-lg">{faq.question}</h3>
              <ChevronDown
                className={`h-5 w-5 flex-shrink-0 text-primary transition duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </div>
            {openIndex === index && (
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{faq.answer}</p>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
