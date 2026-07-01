import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, MapPin, Clock, Phone, MessageCircle, Leaf, Cake } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

// Real photos
import heroImg from "@/imports/4.png";
import miriamImg from "@/imports/image.png";
import lemonCakeImg from "@/imports/e1b2ce71-cd5e-45c2-8069-f9395229e96c-e1778170199337-819x1024.png";
import cherryCakeImg from "@/imports/Dise_o_sin_t_tulo__8_.png";
import carnivalCakeImg from "@/imports/3.png";
import cheesecakeImg from "@/imports/501b5b58-d1c8-4f54-b27b-404817814f61.png";
import croissantsImg from "@/imports/2.png";
import eventCakeImg from "@/imports/31.png";
import ig1Img from "@/imports/Dise_o_sin_t_tulo__3_.png";
import ig2Img from "@/imports/Dise_o_sin_t_tulo__2_.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "¿Quién soy?", href: "#quien-soy" },
  { label: "Productos", href: "#productos" },
  { label: "Eventos / Tartas", href: "#eventos" },
  { label: "Contacto", href: "#contacto" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    dark ? root.classList.add("dark") : root.classList.remove("dark");
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased" style={{ scrollBehavior: "smooth" }}>

      {/* ── NAVBAR ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 dark:bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between gap-8">
          <a href="#inicio" className="font-display text-xl md:text-2xl text-primary font-semibold tracking-tight shrink-0">
            Miriam Bakery
          </a>

          <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setDark(!dark)}
              aria-label="Cambiar tema"
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="https://wa.me/34662472171"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-5 py-2.5 rounded hover:opacity-90 transition-opacity"
            >
              WhatsApp
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
              className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-background border-t border-border"
            >
              <nav className="flex flex-col px-6 py-4 gap-0">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="py-3.5 text-foreground hover:text-accent border-b border-border last:border-0 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="https://wa.me/34662472171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-center bg-primary text-primary-foreground text-sm font-medium px-5 py-3.5 rounded"
                >
                  WhatsApp
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* ── HERO ── */}
        <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
          {/* Full-bleed photo with overlay */}
          <div className="absolute inset-0">
            <ImageWithFallback
              src={heroImg}
              alt="Interior de Miriam Bakery con mesa de bienvenida y flores"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/75 dark:bg-background/85" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 pt-28 pb-20 w-full">
            <motion.div
              className="flex flex-col gap-7 max-w-xl"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="text-xs uppercase tracking-[0.25em] font-medium" style={{ color: "var(--accent)" }}>
                Artesanal · Lucena · Sin aceite de palma
              </span>
              <h1 className="font-display text-5xl md:text-[4.5rem] text-primary leading-[1.03] font-semibold">
                Horneado<br />
                <em className="not-italic" style={{ color: "var(--accent)" }}>artesanal</em><br />
                cada día
              </h1>
              <p className="text-muted-foreground text-lg max-w-sm leading-relaxed">
                Sabor auténtico y natural en Lucena. Ingredientes de verdad, elaborados con pasión.
              </p>
              <div className="flex items-center gap-4 pt-1">
                <a
                  href="#productos"
                  className="bg-primary text-primary-foreground px-7 py-3.5 rounded text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Ver carta
                </a>
                <a
                  href="#quien-soy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
                >
                  Conoce la historia
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── QUIÉN SOY ── */}
        <section id="quien-soy" className="py-24 px-6 md:px-16 bg-secondary">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src={miriamImg}
                  alt="Miriam, propietaria de Miriam Bakery, sonriendo con un ramo de flores"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-border -z-10" />
            </div>
            <div className="order-1 md:order-2 flex flex-col gap-6">
              <span className="text-xs uppercase tracking-[0.25em] font-medium" style={{ color: "var(--accent)" }}>
                Nuestra historia
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-primary font-semibold leading-tight">
                ¿Quién soy?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                En Miriam Bakery, horneamos diariamente con pasión y dedicación. Creemos en los ingredientes naturales y en los procesos artesanales.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ven a disfrutar de nuestro acogedor espacio en Lucena, donde el aroma a pan recién horneado y café de especialidad te harán sentir como en casa.
              </p>
              <div className="flex items-center gap-3 mt-2">
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                  style={{ background: "rgba(184,114,42,0.1)", color: "var(--accent)" }}
                >
                  <Leaf size={14} /> Sin aceite de palma
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── NOVEDADES ── */}
        <section className="py-24 px-6 md:px-16 bg-background">
          <div className="max-w-6xl mx-auto flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.25em] font-medium" style={{ color: "var(--accent)" }}>
                Actualidad
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-primary font-semibold">Novedades</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  img: lemonCakeImg,
                  alt: "Bizcocho glaseado de limón cortado sobre tabla de madera",
                  title: "Jueves de Tartas",
                  desc: "Tarta del día por solo 3,5€ (bebida incluida). ¡Solo los jueves!",
                  tag: "Oferta semanal",
                },
                {
                  img: cherryCakeImg,
                  alt: "Tarta blanca con nata y cerezas frescas encima",
                  title: "Tartas de Temporada",
                  desc: "Creaciones frescas con ingredientes de temporada, elaboradas a diario.",
                  tag: "Temporada",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-md transition-shadow flex flex-col sm:flex-row"
                >
                  <div className="w-full sm:w-2/5 flex-shrink-0 overflow-hidden" style={{ minHeight: 200 }}>
                    <ImageWithFallback
                      src={item.img}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col gap-3 justify-center">
                    <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--accent)" }}>
                      {item.tag}
                    </span>
                    <h3 className="font-display text-2xl text-primary font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCTOS ── */}
        <section id="productos" className="py-24 px-6 md:px-16 bg-secondary">
          <div className="max-w-6xl mx-auto flex flex-col gap-12">
            <div className="text-center flex flex-col gap-2 items-center">
              <span className="text-xs uppercase tracking-[0.25em] font-medium" style={{ color: "var(--accent)" }}>
                Lo que hacemos
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-primary font-semibold">Nuestros Productos</h2>
              <p className="text-muted-foreground mt-1">Elaborados a mano, horneados con cariño.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { img: carnivalCakeImg, alt: "Tarta de cumpleaños colorida con máscara de carnaval y plumas", label: "Tartas" },
                { img: cheesecakeImg, alt: "Tarta de queso al horno con corte perfecto", label: "Tartas de Queso" },
                { img: croissantsImg, alt: "Pila de croissants de chocolate sobre plato blanco", label: "Bollería" },
                { img: null, alt: "", label: "Brownies" },
                { img: null, alt: "", label: "Helados" },
                { img: null, alt: "", label: "Cafés y Bebidas" },
              ].map(({ img, alt, label }) => (
                <a
                  href="#"
                  key={label}
                  className="group rounded-xl overflow-hidden bg-card border border-border hover:shadow-md transition-all hover:-translate-y-0.5 flex flex-col"
                >
                  <div className="aspect-[3/2] w-full overflow-hidden bg-muted">
                    {img ? (
                      <ImageWithFallback
                        src={img}
                        alt={alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-end p-4" style={{ background: "linear-gradient(135deg, var(--muted) 0%, var(--secondary) 100%)" }}>
                        <span className="text-xs uppercase tracking-widest text-muted-foreground/40">{label}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <span className="font-display text-lg text-primary font-semibold">{label}</span>
                    <span
                      className="text-xs font-medium group-hover:underline underline-offset-2 transition-all"
                      style={{ color: "var(--accent)" }}
                    >
                      Ver más →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── TARTAS PERSONALIZADAS ── */}
        <section id="eventos" className="py-24 px-6 md:px-16 bg-background overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 relative flex-shrink-0">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src={eventCakeImg}
                  alt="Tarta elegante blanca sobre mesa con velas y flores secas para evento especial"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl border border-border -z-10" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-8">
              <span className="text-xs uppercase tracking-[0.25em] font-medium" style={{ color: "var(--accent)" }}>
                Eventos especiales
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-primary font-semibold leading-tight">
                Momentos especiales,<br />
                tartas{" "}
                <em className="not-italic" style={{ color: "var(--accent)" }}>inolvidables</em>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Creamos tartas personalizadas para bodas, cumpleaños y eventos especiales. Cuéntanos tu idea y diseñaremos una tarta única que será el centro de atención.
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  "Diseños exclusivos a medida",
                  "Para cualquier tipo de evento",
                  "Ingredientes naturales sin aceite de palma",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <Cake size={16} className="shrink-0" style={{ color: "var(--accent)" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/34662472171"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded text-sm font-medium hover:opacity-90 transition-opacity w-fit"
              >
                Pide tu tarta por WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ── INSTAGRAM ── */}
        <section className="py-24 px-6 md:px-16 bg-secondary">
          <div className="max-w-6xl mx-auto flex flex-col gap-12 items-center text-center">
            <div className="flex flex-col gap-2 items-center">
              <span className="text-xs uppercase tracking-[0.25em] font-medium" style={{ color: "var(--accent)" }}>
                Instagram
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-primary font-semibold">
                Síguenos en el día a día
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
              {[
                { img: ig1Img, alt: "Croissants de chocolate apilados — foto de Instagram de Miriam Bakery" },
                { img: ig2Img, alt: "Tarta de cumpleaños azul con ositos de peluche — foto de Instagram de Miriam Bakery" },
                { img: carnivalCakeImg, alt: "Tarta colorida de carnaval — foto de Instagram de Miriam Bakery" },
                { img: cheesecakeImg, alt: "Tarta de queso al horno — foto de Instagram de Miriam Bakery" },
              ].map(({ img, alt }, i) => (
                <a
                  key={i}
                  href="https://www.instagram.com/miriambakery.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square rounded-xl overflow-hidden hover:opacity-80 transition-opacity"
                >
                  <ImageWithFallback
                    src={img}
                    alt={alt}
                    className="w-full h-full object-cover"
                  />
                </a>
              ))}
            </div>
            <a
              href="https://www.instagram.com/miriambakery.es"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3 rounded text-sm font-medium hover:bg-muted transition-colors"
            >
              @miriambakery.es en Instagram
            </a>
          </div>
        </section>

        {/* ── CONTACTO ── */}
        <section id="contacto" className="py-24 px-6 md:px-16 bg-background">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-6">
              <span className="text-xs uppercase tracking-[0.25em] font-medium" style={{ color: "var(--accent)" }}>
                Visítanos
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-primary font-semibold leading-tight">
                Ven a<br />visitarnos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Estaremos encantados de atenderte. Siéntate, pide un café y disfruta del momento.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Calle+Juan+Jim%C3%A9nez+Cuenca,+23,+14900+Lucena,+C%C3%B3rdoba,+Spain"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-7 py-3.5 rounded text-sm font-medium hover:opacity-90 transition-opacity w-fit"
              >
                Cómo llegar
              </a>
            </div>
            <div className="flex flex-col gap-7">
              {[
                {
                  icon: <MapPin size={18} className="shrink-0 mt-0.5" style={{ color: "var(--accent)" }} />,
                  title: "Dirección",
                  lines: [
                    "Calle Juan Jiménez Cuenca, 23",
                    "Lucena, 14900",
                    "Frente a la Parroquia de Santo Domingo",
                  ],
                },
                {
                  icon: <Clock size={18} className="shrink-0 mt-0.5" style={{ color: "var(--accent)" }} />,
                  title: "Horario",
                  lines: [
                    "Mar – Sáb: 8:00–14:00 | 16:30–20:30",
                    "Domingo: 9:00–14:00",
                    "Lunes: cerrado",
                  ],
                },
                {
                  icon: <Phone size={18} className="shrink-0 mt-0.5" style={{ color: "var(--accent)" }} />,
                  title: "Teléfono",
                  lines: ["+34 662 472 171"],
                },
              ].map(({ icon, title, lines }) => (
                <div key={title} className="flex gap-4">
                  {icon}
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-primary text-sm">{title}</p>
                    {lines.map((l) => (
                      <p key={l} className="text-muted-foreground text-sm">{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-16 py-10 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
          <div>
            <span className="font-display text-xl text-primary font-semibold">Miriam Bakery</span>
            <p className="text-muted-foreground text-sm mt-1">
              © 2026 · Calle Juan Jiménez Cuenca, 23, Lucena
            </p>
          </div>
          <div className="flex gap-8">
            {["Privacidad", "Aviso Legal", "Cookies"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* ── WHATSAPP FAB (mobile) ── */}
      <a
        href="https://wa.me/34662472171"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        style={{ background: "#25D366" }}
      >
        <MessageCircle size={24} className="text-white" />
      </a>
    </div>
  );
}
