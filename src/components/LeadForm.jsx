import { motion } from 'framer-motion';

function LeadForm() {
  return (
    <motion.section
      id="lead-form"
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

      {/* Используем iframe для обхода CORS */}
      <div style={{ width: '100%', minHeight: '500px', display: 'flex', justifyContent: 'center' }}>
        <iframe 
          src="https://crm.tennet.kz/api/public/forms/65e86ef8-8fac-4075-8dc8-cf18b1fd5f2c/" 
          width="100%" 
          height="500px" 
          frameBorder="0"
          title="CRM Lead Form"
          style={{ border: 'none', maxWidth: '800px' }}
        ></iframe>
      </div>
    </motion.section>
  );
}

export default LeadForm;