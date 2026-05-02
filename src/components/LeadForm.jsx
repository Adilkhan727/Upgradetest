import { useEffect } from 'react';
import { motion } from 'framer-motion';

function LeadForm() {
  useEffect(() => {
    // Добавляем скрипт виджета динамически при монтировании компонента
    const script = document.createElement('script');
    script.src = 'https://crm.tennet.kz/static/js/lead-form-widget.js?v=1777694783';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.CRMLeadForm) {
        window.CRMLeadForm.init({
          containerId: 'crm-lead-form-234f09f7-c1b3-4154-8632-ba3fa6134f0d',
          formId: '234f09f7-c1b3-4154-8632-ba3fa6134f0d',
          apiUrl: 'https://crm.tennet.kz/api/public/forms/234f09f7-c1b3-4154-8632-ba3fa6134f0d/'
        });
      }
    };

    return () => {
      // Удаляем скрипт при размонтировании, чтобы не было дублей
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="mt-14 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40 sm:p-10"
    >
      <div className="mb-10 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Записаться</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Оставьте заявку — мы подберём программу лично для вас.
        </h2>
      </div>

      {/* Контейнер для виджета */}
      <div id="crm-lead-form-234f09f7-c1b3-4154-8632-ba3fa6134f0d" className="mx-auto max-w-2xl"></div>
    </motion.section>
  );
}

export default LeadForm;