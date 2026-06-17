/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { createRoot } from "react-dom/client";
import { motion, useScroll, useTransform } from "framer-motion";
import "./styles.css";
import logo from "./images/sitelogo.png";

const staffedHours = [
  ["Måndag", "12:00-20:00"],
  ["Tisdag-fredag", "16:00-20:00"],
  ["Lördag", "13:00-17:00"],
  ["Söndag", "Obemannat"],
];

const stats = [
  ["1865 m²", "Total träningsyta"],
  ["3", "Våningar"],
  ["300 m²", "Ladies only-rum"],
  ["24/7", "Öppet för medlemmar"],
];

const cashPlans = [
  ["Årskort", "4988 kr"],
  ["Halvår", "3199 kr"],
  ["Kvartal", "2199 kr"],
];

const discountedPlans = [
  ["Student", "4148 kr"],
  ["Pensionär", "3548 kr"],
];

const flexiblePlans = [
  ["Månadskort", "799 kr"],
  ["Engångskort", "120 kr"],
  ["10-kort", "850 kr"],
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.p className="eyebrow" variants={fadeUp}>
          Lokalt gym med 24/7-träning
        </motion.p>
        <motion.h1 id="hero-title" variants={fadeUp}>
          Antons Gym
        </motion.h1>
        <motion.p className="hero-copy" variants={fadeUp}>
          1865 m² träningsyta fördelat på tre våningar, med moderna maskiner,
          fria vikter och en separat ladies only-avdelning på 300 m².
        </motion.p>
        <motion.div className="hero-actions" variants={fadeUp}>
          <a className="button primary" href="#membership">
            Se medlemskap
          </a>
          <a className="button secondary" href="#facility">
            Utforska gymmet
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-logo"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.86, rotate: -6 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.18 }}
      >
        <img src={logo} alt="" />
      </motion.div>
    </section>
  );
}

function StatsBand() {
  return (
    <motion.section
      className="stats-band"
      aria-label="Snabbfakta om Antons Gym"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={stagger}
    >
      {stats.map(([value, label]) => (
        <motion.div key={label} variants={fadeUp}>
          <strong>{value}</strong>
          <span>{label}</span>
        </motion.div>
      ))}
    </motion.section>
  );
}

function Facility() {
  return (
    <section className="section split" id="facility">
      <motion.div
        className="section-copy"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={stagger}
      >
        <motion.p className="eyebrow" variants={fadeUp}>
          Lokalen
        </motion.p>
        <motion.h2 variants={fadeUp}>
          Rymligt, välvårdat och byggt för regelbunden träning.
        </motion.h2>
        <motion.p variants={fadeUp}>
          Antons Gym erbjuder en stor och genomtänkt träningsmiljö med 1865 m²
          fördelat över tre plan. Här finns plats för styrka, kondition,
          funktionell träning och lugnare pass när du vill fokusera ostört.
        </motion.p>
        <motion.p variants={fadeUp}>
          Faciliteterna håller hög standard och är i gott skick, så att varje
          besök känns tryggt, rent och redo för träning.
        </motion.p>
      </motion.div>

      <motion.div
        className="feature-panel"
        initial={{ opacity: 0, x: 36 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <h3>Ladies only</h3>
        <p>
          En separat avdelning på 300 m² för dig som vill träna i en mer
          avskild miljö med samma seriösa standard som resten av gymmet.
        </p>
      </motion.div>
    </section>
  );
}

function Hours() {
  return (
    <section className="section hours-section" id="hours">
      <motion.div
        className="section-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={stagger}
      >
        <motion.p className="eyebrow" variants={fadeUp}>
          Öppettider
        </motion.p>
        <motion.h2 variants={fadeUp}>Träna när det passar dig.</motion.h2>
        <motion.p variants={fadeUp}>
          Gymmet är öppet dygnet runt för medlemmar. Under bemannade tider finns
          personal på plats för frågor, hjälp och medlemsärenden.
        </motion.p>
      </motion.div>

      <motion.div
        className="hours-grid"
        aria-label="Bemannade tider"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
      >
        {staffedHours.map(([day, time]) => (
          <motion.div
            className={`hours-row ${day === "Söndag" ? "muted" : ""}`}
            key={day}
            variants={fadeUp}
          >
            <span>{day}</span>
            <strong>{time}</strong>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function Membership() {
  return (
    <section className="membership section" id="membership" aria-labelledby="membership-title">
      <motion.div
        className="membership-copy"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={stagger}
      >
        <motion.p className="eyebrow" variants={fadeUp}>
          Medlemskap
        </motion.p>
        <motion.h2 id="membership-title" variants={fadeUp}>
          Välj medlemskap efter hur du vill träna.
        </motion.h2>
        <motion.p variants={fadeUp}>
          Alla medlemskap ger dig tillgång till en välskött anläggning med tre
          våningar träningsyta, 24/7-öppet och ladies only-rummet på 300 m².
        </motion.p>
      </motion.div>

      <motion.div
        className="membership-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
      >
        <motion.article className="membership-card" variants={fadeUp}>
          <span className="price-label">Endast kontantbetalning</span>
          <h3>Periodkort</h3>
          <PriceList items={cashPlans} />
        </motion.article>

        <motion.article className="membership-card featured" variants={fadeUp}>
          <span className="price-label">Autogiro</span>
          <strong>399 kr</strong>
          <span className="price-period">per månad</span>
          <p>
            Löpande medlemskap med återkommande månadsbetalning för dig som vill
            träna regelbundet utan att betala hela perioden direkt.
          </p>
        </motion.article>

        <motion.article className="membership-card" variants={fadeUp}>
          <span className="price-label">Kontantkort & rabatter</span>
          <h3>Fler kontantalternativ</h3>
          <PriceList items={[...discountedPlans, ...flexiblePlans]} />
        </motion.article>
      </motion.div>
    </section>
  );
}

function PriceList({ items }) {
  return (
    <dl className="price-list">
      {items.map(([label, price]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{price}</dd>
        </div>
      ))}
    </dl>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <motion.div
        className="section-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={stagger}
      >
        <motion.p className="eyebrow" variants={fadeUp}>
          Kontakt
        </motion.p>
        <motion.h2 variants={fadeUp}>Kom förbi under bemannade tider.</motion.h2>
        <motion.p variants={fadeUp}>
          Har du frågor om medlemskap, rabatter eller anläggningen? Besök oss när
          personalen är på plats så hjälper vi dig vidare.
        </motion.p>
      </motion.div>

      <motion.div
        className="contact-actions"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={stagger}
      >
        <motion.a
          className="button primary"
          href="https://antonsgym.se/"
          variants={fadeUp}
        >
          Gå till antonsgym.se
        </motion.a>
        <motion.a className="button dark-outline" href="#hours" variants={fadeUp}>
          Se bemannade tider
        </motion.a>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <img src={logo} alt="Antons Gym logo" />
      <p>Antons Gym - träning för alla, varje dag.</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <StatsBand />
        <Facility />
        <Hours />
        <Membership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}



function Header() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 120], [1, 0.35]);

  return (
    <motion.header
      className="site-header"
      aria-label="Huvudnavigation"
      style={{ opacity }}
    >
      <a className="brand" href="#top" aria-label="Antons Gym startsida">
        <img src={logo} alt="Antons Gym logo" />
      </a>
      <nav className="nav-links" aria-label="Sidnavigation">
        <a href="#membership">Medlemskap</a>
        <a href="#hours">Öppettider</a>
        <a href="#contact">Kontakt</a>
        <a href="#facility">Om oss</a>
      </nav>
    </motion.header>
  );
}

createRoot(document.getElementById("root")).render(<App />);
