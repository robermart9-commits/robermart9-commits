import { 
  Check, 
  Clock, 
  Heart, 
  MessageCircle, 
  ChevronDown, 
  Star, 
  Utensils, 
  User, 
  ArrowRight,
  ShieldCheck,
  Instagram
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

// --- Components ---

const WhatsAppButton = () => {
  const phoneNumber = "593995537894";
  const message = encodeURIComponent("Hola, quiero información sobre los planes de Freya");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center gap-2 group"
      id="whatsapp-fixed-btn"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-medium whitespace-nowrap">
        Hablar por WhatsApp
      </span>
    </motion.a>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "bg-[#F1E6D7]/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/freya-logo.png" alt="Freya Logo" className="h-16 w-auto" />
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#problema" className={`text-sm font-medium transition-colors ${isScrolled ? "text-slate-900" : "text-brand-primary"}`}>Beneficios</a>
          <a href="#daniela" className={`text-sm font-medium transition-colors ${isScrolled ? "text-slate-900" : "text-brand-primary"}`}>Sobre Daniela</a>
          <a href="#planes" className={`text-sm font-medium transition-colors ${isScrolled ? "text-slate-900" : "text-brand-primary"}`}>Planes</a>
          <a href="#faq" className={`text-sm font-medium transition-colors ${isScrolled ? "text-slate-900" : "text-brand-primary"}`}>FAQ</a>
          <a 
            href={`https://wa.me/593995537894?text=${encodeURIComponent("Hola, quiero información sobre los planes de Freya")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-accent text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-all shadow-md shadow-brand-accent/20"
          >
            Empezar ahora
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-brand-secondary rounded-l-[100px] hidden lg:block" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src="/freya-logo.png" alt="Freya Logo" className="h-28 w-auto mb-8 hidden lg:block" />
          <span className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-bold mb-6">
            Bienestar en cada bocado
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 text-slate-900">
            Nutrición que se adapta a <span className="text-brand-primary italic">tu estilo de vida</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            Freya es un servicio de alimentación saludable guiada por nutricionista, con entrega a domicilio u oficinas. Ofrece planes de comida equilibrados, personalizados y listos para consumir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#planes"
              className="bg-brand-accent text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-brand-accent/20 hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2"
            >
              Empieza tu plan saludable <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href={`https://wa.me/593995537894?text=${encodeURIComponent("Hola, quiero información sobre los planes de Freya")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" /> Consulta tu plan con nutricionista
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5]">
            <img 
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop" 
              alt="Healthy Food Bowl" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-3xl shadow-xl max-w-[240px]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-brand-secondary rounded-full flex items-center justify-center text-brand-primary">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <span className="font-bold text-slate-800">Plan Mensual</span>
            </div>
            <p className="text-sm text-slate-500">Bienestar en cada bocado</p>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-brand-secondary/50 rounded-full blur-3xl opacity-50" />
        </motion.div>
      </div>
    </section>
  );
};

const ProblemSolution = () => {
  const problems = [
    { icon: <Clock className="w-6 h-6" />, title: "Falta de tiempo", desc: "No tienes horas para cocinar o planificar menús complicados." },
    { icon: <Utensils className="w-6 h-6" />, title: "Mala alimentación", desc: "Comes lo primero que encuentras por practicidad, no por salud." },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Efecto rebote", desc: "Cansado de dietas que no funcionan a largo plazo." }
  ];

  return (
    <section id="problema" className="py-24 bg-brand-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Recibe tus comidas en casa u oficina</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Sabemos que llevar una vida saludable puede ser difícil en el mundo moderno. Freya nace para hacerlo simple.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100"
            >
              <div className="w-14 h-14 bg-brand-secondary rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-20 bg-[#777847] rounded-[40px] p-8 lg:p-16 text-white flex flex-col lg:flex-row gap-12 items-center overflow-hidden relative">
          <div className="relative z-10 lg:w-2/3">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">Freya es tu aliado profesional</h3>
            <p className="text-brand-secondary/80 text-lg mb-8 leading-relaxed">
              No solo te damos un bowl de comida. Te brindamos un sistema diseñado por expertos para que logres tu mejor versión de forma práctica, deliciosa y sostenible.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {["Menús personalizados", "Recetas fáciles", "Acompañamiento experto", "Sin pasar hambre"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 font-medium">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/3 relative">
            <img 
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop" 
              alt="Healthy Lifestyle" 
              className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutDaniela = () => {
  return (
    <section id="daniela" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative z-10">
            <img 
              src="/WhatsApp Image 2026-04-02 at 9.07.24 PM.jpeg"
              alt="Daniela Cordero" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-secondary rounded-full -z-10" />
        </div>
        <div>
          <span className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-4 block">Tu Nutricionista</span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">Daniela Cordero</h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            "Mi misión es enseñarte que comer saludable no tiene por qué ser aburrido ni restrictivo. Creo en el equilibrio y en la ciencia aplicada a tu bienestar diario."
          </p>
          <div className="space-y-6 mb-10">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-brand-secondary rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Enfoque Personalizado</h4>
                <p className="text-slate-500">Cada cuerpo es diferente, por eso cada plan es único.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-brand-secondary rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Nutrición Basada en Evidencia</h4>
                <p className="text-slate-500">Sin mitos, solo resultados respaldados por la ciencia.</p>
              </div>
            </div>
          </div>
          <a 
            href={`https://wa.me/593995537894?text=${encodeURIComponent("Hola Daniela, quiero información sobre tus planes")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-accent font-bold text-lg group"
          >
            Conocer más sobre mi metodología <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const categories = [
    {
      title: "Nuestros Planes Wellness",
      subtitle: "Bienestar en cada bocado, diseñado para tu ritmo de vida.",
      plans: [
        {
          name: "Plan Básico",
          price: "95",
          period: "mensual",
          desc: "Alimentación equilibrada para mantener una rutina saludable.",
          features: [
            "20 almuerzos balanceados al mes",
            "Entrega directa a casa u oficina",
            "Menús variados y deliciosos",
            "Ingredientes frescos y naturales",
            "Porciones controladas por expertos"
          ],
          recommended: false,
          promoTag: "Ideal para iniciar"
        },
        {
          name: "Plan Hiperproteico",
          price: "115",
          period: "mensual",
          desc: "Ideal para personas activas, entrenamiento o aumento de masa muscular.",
          features: [
            "20 almuerzos altos en proteína",
            "Cálculo de requerimiento calórico",
            "Enfoque en mantenimiento muscular",
            "Mayor saciedad y energía",
            "Entrega directa a domicilio"
          ],
          recommended: true,
          promoTag: "Más popular para deportistas"
        },
        {
          name: "Plan Terapéutico",
          price: "110",
          period: "mensual",
          desc: "Plan guiado por nutricionista para objetivos específicos de salud.",
          features: [
            "20 almuerzos adaptados a tu condición",
            "Control riguroso de ingredientes",
            "Supervisión nutricional experta",
            "Enfoque en recuperación o control",
            "Entrega personalizada"
          ],
          recommended: false,
          promoTag: "Atención especializada"
        }
      ]
    }
  ];

  return (
    <section id="planes" className="py-24 bg-brand-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Nuestros Planes</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Invierte en tu bienestar diario con Freya.
          </p>
        </div>

        {categories.map((cat, catIdx) => (
          <div key={catIdx} className="mb-20 last:mb-0">
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {cat.plans.map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className={`relative p-8 lg:p-10 rounded-[40px] border-2 transition-all flex flex-col ${
                    plan.recommended 
                      ? "bg-white border-brand-primary shadow-2xl scale-105 z-10" 
                      : "bg-white/50 border-slate-100 shadow-sm hover:bg-white hover:shadow-xl"
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-accent text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest">
                      Más Recomendado
                    </div>
                  )}
                  <div className="mb-6">
                    <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
                    <p className="text-slate-500 text-sm h-12">{plan.desc}</p>
                  </div>

                  <div className="mb-6">
                    <div className="inline-block px-4 py-1.5 bg-brand-accent/10 text-brand-accent rounded-xl text-xs font-bold">
                      {plan.promoTag}
                    </div>
                  </div>

                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl lg:text-6xl font-bold text-slate-900">${plan.price}</span>
                    <span className="text-slate-400 font-medium">/{plan.period}</span>
                  </div>
                  <ul className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700">
                        <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.recommended ? "bg-brand-accent text-white" : "bg-brand-secondary text-brand-primary"}`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-sm font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={`https://wa.me/593995537894?text=${encodeURIComponent(`Hola, quiero contratar el ${plan.name} de Freya`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                      plan.recommended 
                        ? "bg-brand-accent text-white shadow-lg shadow-brand-accent/20 hover:bg-opacity-90" 
                        : "bg-brand-secondary text-brand-primary hover:bg-brand-secondary/80"
                    } shadow-sm hover:shadow-md transition-all`}
                  >
                   Contratar ahora <ArrowRight className="w-5 h-5" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      q: "¿Qué incluye cada plan de Freya y en qué se diferencian?", 
      a: "Cada plan incluye almuerzos saludables diseñados por nutricionistas, entrega a domicilio y diferentes niveles de personalización. Ofrecemos el Plan Básico, Hiperproteico y Terapéutico, cada uno adaptado a tus necesidades de bienestar o rendimiento." 
    },
    { 
      q: "¿Cómo funciona la entrega de los almuerzos a domicilio o trabajo?", 
      a: "Realizamos entregas directas a tu domicilio u oficina, asegurando que recibas tus comidas listas para consumir, permitiéndote disfrutar de bienestar en cada bocado sin complicaciones." 
    },
    { 
      q: "¿Incluye el servicio acompañamiento o asesoría nutricional?", 
      a: "Sí, todos nuestros planes son guiados por expertos para asegurar que tu alimentación sea equilibrada y efectiva para tus objetivos." 
    }
  ];

  return (
    <section id="faq" className="py-24 bg-brand-secondary/30">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-800">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <p className="text-brand-secondary/70 max-w-sm mb-8">
              Freya: Bienestar en cada bocado. Alimentación consciente guiada por profesionales.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/freya.ec1?igsh=MTgxa2ljbXRuMjN5Ng=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/593995537894"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-brand-wellness">Enlaces</h4>
            <ul className="space-y-4 text-brand-secondary/60">
              <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#planes" className="hover:text-white transition-colors">Planes</a></li>
              <li><a href="#daniela" className="hover:text-white transition-colors">Sobre Daniela</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-brand-wellness">Contacto</h4>
            <ul className="space-y-4 text-brand-secondary/60">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> +593 99 553 7894
              </li>
              <li>Ecuador</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-slate-300 text-sm">
          <p>© {new Date().getFullYear()} Freya. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24 bg-brand-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">¿Listo para empezar tu camino al bienestar?</h2>
        <p className="text-xl text-brand-secondary/80 mb-12">
          Empieza tu plan saludable hoy y recibe tus comidas en casa u oficina. Freya te acompaña en cada bocado.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href={`https://wa.me/593995537894?text=${encodeURIComponent("Hola, quiero información sobre los planes de Freya")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-accent text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3"
          >
            <MessageCircle className="w-6 h-6" /> Empieza tu plan saludable
          </a>
          <a 
            href="https://www.instagram.com/freya.ec1?igsh=MTgxa2ljbXRuMjN5Ng=="
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand-primary px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3"
          >
            <Instagram className="w-6 h-6" /> Síguenos en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <AboutDaniela />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
