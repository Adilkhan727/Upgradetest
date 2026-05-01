const programs = [
  {
    title: 'Дети 6–10 лет',
    description: 'Игровой академический английский, подготовка к школьным олимпиадам и чтению.',
    badge: 'Начальный / Средний',
  },
  {
    title: 'Подростки 11–17 лет',
    description: 'IELTS академический, проектные занятия и развитие навыков письменной речи.',
    badge: 'Средний / Продвинутый',
  },
  {
    title: 'Взрослые',
    description: 'Целенаправленный IELTS, английский для карьеры и международной учебы.',
    badge: 'Академический / Эксперт',
  },
];

function ProgramsGrid() {
  return (
    <section id="programs" className="mt-14 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40 sm:p-10">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Программы</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Обучение по возрасту и целям.
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          Три направления разработаны с учётом мотивации и экзаменационных требований: дети, подростки и взрослые.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {programs.map((program) => (
          <article key={program.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-slate-950">{program.title}</h3>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                {program.badge}
              </span>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-600">{program.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProgramsGrid;
