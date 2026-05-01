function WhyUs() {
  return (
    <section className="mt-14 rounded-[2rem] bg-primary/5 p-6 sm:p-10">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Почему мы</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Академический подход, который работает с 2016 года.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
            Мы объединяем опыт преподавателей, проверенные методики и адаптивные программы для стабильного прогресса.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {[
            { title: 'Авторские модули', description: 'Сочетание экзаменационной практики и коммуникативного английского.' },
            { title: 'Персональный трек', description: 'Каждый ученик получает план с точными целями и контрольными точками.' },
            { title: 'Онлайн и офлайн', description: 'Удобный график и гибридный формат обучения для семьи и занятых профессионалов.' },
            { title: 'Прозрачный результат', description: 'Промежуточные отчёты и анализ прогресса на каждом этапе.' },
          ].map((item) => (
            <div key={item.title} className="rounded-[1.75rem] border border-white bg-white p-6 shadow-sm shadow-slate-200/50">
              <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
