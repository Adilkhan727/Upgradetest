function PartnerBanner() {
  return (
    <section className="mt-12 rounded-[2rem] border border-slate-200 bg-slate-50 px-6 py-8 shadow-sm shadow-slate-200/60 sm:px-10 sm:py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Партнёрство с British Council как знак качества
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
            Мы используем проверенные международные методики и стандарты обучения, которые помогают ученикам быстро адаптироваться к формату IELTS.
          </p>
        </div>
        <div className="rounded-3xl bg-white p-5 text-center shadow-lg shadow-slate-200/80 sm:p-7">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Совместная программа</p>
          <p className="mt-3 text-3xl font-semibold text-primary">British Council</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Поддержка методологии, обновлённые задания и уверенность в академическом качестве обучения.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PartnerBanner;
