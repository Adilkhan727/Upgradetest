import { motion } from 'framer-motion';
import { ShieldCheck, BookOpen, ArrowRight } from 'lucide-react';

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/80 sm:p-12 lg:p-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
      >
        <div className="space-y-8">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Modern Academic IELTS
          </span>
          <div className="space-y-5">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Английский и IELTS для детей, подростков и взрослых с академическим подходом.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              UPgrade school готовит учеников по международным стандартам, сохраняя баланс между результатом и уверенностью.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#lead-form" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-[#920000]">
              Получить консультацию
              <ArrowRight className="ml-3 h-4 w-4" />
            </a>
            <a href="#programs" className="text-sm font-semibold text-primary transition hover:text-[#7a161d]">
              Ознакомиться с программами
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Опыт с 2016', value: '8+ лет' },
              { label: 'Средний балл', value: '7.5+' },
              { label: 'Детям, подросткам и взрослым', value: '3 направления' },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                <p className="mt-3 text-2xl font-semibold text-slate-950">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/10 sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,33,35,0.22),_transparent_35%)]" />
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90">
              <ShieldCheck className="h-5 w-5 text-white" />
              Партнёрство с академией British Council
            </div>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-300">IELTS Focus</p>
              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Подготовка к экзамену в международном формате.
              </h2>
              <p className="text-slate-300">
                Курсы строятся вокруг реальных заданий, структурной аналитики и персональной подготовки.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="text-sm text-slate-100">Индивидуальные треки для каждой возрастной группы</span>
              </div>
              <p className="text-sm leading-6 text-slate-300">
                Уроки включают академическую лексику, экзаменационные стратегии и поддержку до дня сдачи.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
