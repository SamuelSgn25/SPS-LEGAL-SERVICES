import React, { useState } from 'react';

const LOGO_PRIMARY_SRC = '/assets/logo-principal.jpeg';

const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#services', label: 'Services' },
  { href: '#domaines', label: 'Domaines' },
  { href: '#faq', label: 'FAQ' },
  { href: '#equipe', label: 'Équipe' },
  { href: '#contact', label: 'Contact' },
];

function Navbar({ onOpenBooking }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-sps-dark/80 backdrop-blur-xl">
      <nav className="container-default flex items-center justify-between py-4">
        <a href="#accueil" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 via-sps-gold to-amber-600 shadow-soft-lg">
            <span className="text-lg font-heading font-semibold text-sps-dark">SPS</span>
          </div>
          <div className="hidden flex-col sm:flex">
            <span className="font-heading text-sm font-semibold tracking-wide text-sps-gold">
              SPS LEGAL SERVICES
            </span>
            <span className="text-xs text-slate-300">Cabinet &amp; services juridiques</span>
          </div>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-100 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-sps-gold"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="btn-primary"
            onClick={onOpenBooking}
          >
            Prendre rendez-vous
          </button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-sps-gold/50 p-2 text-sps-gold md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-sps-gold" />
            <span className="block h-0.5 w-4 bg-sps-gold" />
            <span className="block h-0.5 w-3 bg-sps-gold" />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-sps-dark/95 md:hidden">
          <div className="container-default flex flex-col gap-4 py-4 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-100 transition hover:text-sps-gold"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              className="btn-primary w-full justify-center"
              onClick={() => {
                setOpen(false);
                onOpenBooking();
              }}
            >
              Prendre rendez-vous
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ onOpenBooking }) {
  return (
    <section
      id="accueil"
      className="section-padding bg-gradient-to-b from-sps-dark via-slate-950 to-black"
    >
      <div className="container-default grid items-center gap-10 md:grid-cols-[3fr,2fr]">
        <div>
          <span className="badge">Depuis le 21 août 2020</span>
          <h1 className="mt-6 font-heading text-4xl leading-tight md:text-5xl lg:text-6xl">
            <span className="block text-slate-100">Votre partenaire</span>
            <span className="mt-2 block text-sps-gold">juridique &amp; administratif</span>
            <span className="mt-2 block text-slate-200"></span>
          </h1>
          <p className="mt-5 max-w-xl text-sm md:text-base text-slate-300">
            SPS LEGAL SERVICES accompagne particuliers et entreprises dans leurs
            consultations juridiques, démarches administratives et procédures auprès des
            juridictions et institutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              className="btn-primary"
              onClick={onOpenBooking}
            >
              Contacter le cabinet
            </button>
            <a href="#services" className="btn-outline">
              Découvrir nos services
            </a>
          </div>
          <dl className="mt-10 grid gap-6 text-sm text-slate-200 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Localisation
              </dt>
              <dd className="mt-1">
                Cococodji, Oiseaux Blanc
                <br />
                Maison SOGLOHOUN
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Services clients
              </dt>
              <dd className="mt-1">
                01 91 11 60 64
                <br />
                01 91 98 62 38
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Prestations ANIP
              </dt>
              <dd className="mt-1">Traitement sous 24h–48h* selon dossier</dd>
            </div>
          </dl>
        </div>

        <div className="glass-panel relative mx-auto flex w-full max-w-md flex-col items-center rounded-3xl p-8">
          <div className="absolute inset-x-8 -top-6 -z-10 h-32 rounded-3xl bg-gradient-to-tr from-sps-gold/40 via-yellow-400/10 to-transparent blur-2xl" />
          <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-slate-950/80 ring-2 ring-sps-gold/60">
            <img
              src={LOGO_PRIMARY_SRC}
              alt="Logo institutionnel SPS LEGAL SERVICES"
              className="max-h-24 max-w-full object-contain"
            />
          </div>
          
          <ul className="mt-6 w-full space-y-3 text-sm text-slate-200">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-5 w-5 rounded-full bg-sps-gold/10 text-center text-xs font-semibold text-sps-gold">
                ⚖️
              </span>
              <span>Conformité légale et sécurité de vos actes.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-5 w-5 rounded-full bg-sps-gold/10 text-center text-xs font-semibold text-sps-gold">
                ✓
              </span>
              <span>Procédures ANIP, civiles, commerciales, sociales et foncières.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-5 w-5 rounded-full bg-sps-gold/10 text-center text-xs font-semibold text-sps-gold">
                ★
              </span>
              <span>Accompagnement personnalisé sur rendez-vous.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="historique" className="section-padding bg-sps-dark">
      <div className="container-default grid gap-10 md:grid-cols-[3fr,2fr]">
        <div>
          <h2 className="section-title">Historique &amp; positionnement</h2>
          <p className="section-subtitle">
            Créé le <span className="font-semibold text-sps-gold">21 août 2020</span>,
            SPS LEGAL SERVICES est un cabinet / service juridique dédié à la conformité
            légale et à l&apos;accompagnement administratif.
          </p>

          <div className="mt-8 space-y-4 text-sm text-slate-200">
            <p>
              Dès sa création, le cabinet a structuré ses activités autour des
              consultations juridiques, des actes de saisine et de l&apos;assistance
              administrative.
            </p>
            <p>
              Au fil des années, l&apos;offre s&apos;est renforcée avec les procédures
              civiles, commerciales, foncières, sociales et pénales ainsi que les
              prestations ANIP et la création d&apos;entreprise en ligne.
            </p>
            <p>
              Aujourd&apos;hui, SPS LEGAL SERVICES se positionne comme un{' '}
              <span className="font-semibold">partenaire de confiance</span> pour sécuriser
              vos décisions, contrats et démarches administratives.
            </p>
          </div>
        </div>

        <div className="glass-panel rounded-3xl p-6 text-sm text-slate-100">
          <h3 className="font-heading text-lg font-semibold text-sps-gold">
            En quelques mots
          </h3>
          <ul className="mt-4 space-y-2">
            <li>
              <span className="font-semibold text-sps-gold">Justice&nbsp;:</span> défense
              équilibrée des droits et obligations.
            </li>
            <li>
              <span className="font-semibold text-sps-gold">Excellence&nbsp;:</span>{' '}
              qualité des actes et suivi rigoureux des dossiers.
            </li>
            <li>
              <span className="font-semibold text-sps-gold">Sécurité&nbsp;:</span>{' '}
              confidentialité et traçabilité de vos démarches.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const coreServices = [
  'Consultations juridiques',
  'Assistance administrative',
  'Recouvrement de créances',
  'Actes de saisine des juridictions',
  'Rédaction de contrats (bail, vente, etc.)',
  'Création d’entreprise en ligne (IFU et RCCM)',
];

const anipServices = [
  'Duplicata de récépissé RAVIP',
  'Acte de naissance sécurisé',
  "Certificat d'identification personnelle (CIP)",
  'Carte d’identité biométrique',
  'Passeport biométrique',
  'Relevé de casier judiciaire',
];

const procedureServices = [
  'Actes administratifs et procédures classiques',
  'Procédures civiles et commerciales',
  'Procédures foncières',
  "Procédures devant l’inspection du travail",
  'Procédures pénales et sociales',
  'Procédures en tout genre liées au droit du travail (GRH, contrats, etc.)',
];

const domainesIntervention = [
  'Plainte & requête',
  'Contrats (bail, travail, prestation de service)',
  'Droit du travail & GRH',
  'Droit commercial & affaires',
  'Droit foncier',
  'Droit civil & familial',
];

function ServicesSection() {
  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-b from-black via-sps-dark to-slate-950"
    >
      <div className="container-default">
        <h2 className="section-title">Services du cabinet</h2>
        <p className="section-subtitle">
          Chez SPS LEGAL SERVICES, chaque dossier bénéficie d&apos;un suivi personnalisé,
          d&apos;une analyse juridique rigoureuse et d&apos;une gestion administrative
          structurée pour limiter les risques et optimiser vos démarches.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="glass-panel rounded-3xl p-6">
            <h3 className="font-heading text-xl font-semibold text-sps-gold">
              Accompagnement juridique &amp; administratif
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-100">
              {coreServices.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sps-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel rounded-3xl p-6">
            <h3 className="font-heading text-xl font-semibold text-sps-gold">
              Prestations ANIP (24h–48h*)
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-100">
              {anipServices.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sps-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-slate-400">
              *Sous réserve de la complétude du dossier et des délais institutionnels.
            </p>
          </div>

          <div className="glass-panel rounded-3xl p-6">
            <h3 className="font-heading text-xl font-semibold text-sps-gold">
              Procédures &amp; contentieux
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-100">
              {procedureServices.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sps-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function DomainesSection() {
  return (
    <section
      id="domaines"
      className="section-padding bg-gradient-to-b from-slate-950 via-sps-dark to-black"
    >
      <div className="container-default grid gap-10 md:grid-cols-[3fr,2fr]">
        <div>
          <h2 className="section-title">Domaines d&apos;intervention</h2>
          <p className="section-subtitle">
            Nous intervenons sur rendez-vous pour analyser votre situation et vous proposer
            une stratégie adaptée dans les domaines juridiques suivants.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-slate-100 sm:grid-cols-2">
            {domainesIntervention.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-full border border-sps-gold/30 bg-sps-navy/40 px-4 py-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sps-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-panel rounded-3xl p-6 text-sm text-slate-100">
          <h3 className="font-heading text-lg font-semibold text-sps-gold">
            Un accompagnement structuré
          </h3>
          <p className="mt-3 text-slate-200">
            Chaque dossier fait l&apos;objet d&apos;une analyse préalable, d&apos;une
            explication claire des options possibles et d&apos;un suivi des étapes clés
            (constitution du dossier, dépôt, relances, retour de décision).
          </p>
          <p className="mt-3 text-slate-200">
            L&apos;objectif&nbsp;: vous permettre de comprendre où en est votre procédure
            et de prendre vos décisions en toute sérénité.
          </p>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section
      id="equipe"
      className="section-padding bg-sps-dark"
    >
      <div className="container-default">
        <h2 className="section-title">Équipe dirigeante</h2>
        <p className="section-subtitle">
          Une équipe engagée autour de la direction générale, de la communication et du
          service digital, au service de vos démarches juridiques et administratives.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <article className="group glass-panel flex flex-col items-center rounded-3xl p-5 transition hover:-translate-y-1 hover:border-sps-gold/60 hover:bg-sps-navy/60 md:flex-row md:items-stretch md:gap-5">
            <div className="relative h-40 w-40 overflow-hidden rounded-2xl md:h-44 md:w-36">
              <img
                src="/assets/Sandrelle.jpeg"
                alt="Sandrelle Prisca SOGLOHOUN"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
            </div>
            <div className="mt-4 text-center md:mt-0 md:text-left">
              <h3 className="font-heading text-sm font-semibold text-sps-gold">
                Sandrelle Prisca SOGLOHOUN
              </h3>
              <p className="mt-1 text-xs text-slate-300">
                Présidente Directrice Générale
              </p>
              <p className="mt-2 text-[11px] text-slate-400">
                Coordonne la stratégie du cabinet et valide les dossiers sensibles.
              </p>
            </div>
          </article>

          <article className="group glass-panel flex flex-col items-center rounded-3xl p-5 transition hover:-translate-y-1 hover:border-sps-gold/60 hover:bg-sps-navy/60 md:flex-row md:items-stretch md:gap-5">
            <div className="relative h-40 w-40 overflow-hidden rounded-2xl md:h-44 md:w-36">
              <img
                src="/assets/Graçia.jpeg"
                alt="Grâcia SOGADJI"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
            </div>
            <div className="mt-4 text-center md:mt-0 md:text-left">
              <h3 className="font-heading text-sm font-semibold text-sps-gold">
                Grâcia SOGADJI
              </h3>
              <p className="mt-1 text-xs text-slate-300">Service Communication</p>
              <p className="mt-2 text-[11px] text-slate-400">
                Assure la visibilité du cabinet et la qualité des échanges avec la
                clientèle.
              </p>
            </div>
          </article>

          <article className="group glass-panel flex flex-col items-center rounded-3xl p-5 transition hover:-translate-y-1 hover:border-sps-gold/60 hover:bg-sps-navy/60 md:flex-row md:items-stretch md:gap-5">
            <div className="relative h-40 w-40 overflow-hidden rounded-2xl md:h-44 md:w-36">
              <img
                src="/assets/Norbert.jpeg"
                alt="Norbert HOUNZANDJI"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
            </div>
            <div className="mt-4 text-center md:mt-0 md:text-left">
              <h3 className="font-heading text-sm font-semibold text-sps-gold">
                Norbert HOUNZANDJI
              </h3>
              <p className="mt-1 text-xs text-slate-300">Service Communication</p>
              <p className="mt-2 text-[11px] text-slate-400">
                Conçoit les supports d’information et accompagne les campagnes de
                communication.
              </p>
            </div>
          </article>

          <article className="group glass-panel flex flex-col items-center rounded-3xl p-5 transition hover:-translate-y-1 hover:border-sps-gold/60 hover:bg-sps-navy/60 md:flex-row md:items-stretch md:gap-5">
            <div className="relative h-40 w-40 overflow-hidden rounded-2xl md:h-44 md:w-36">
              <img
                src="/assets/Samuel.jpg"
                alt="Samuel SOGLOHOUN"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
            </div>
            <div className="mt-4 text-center md:mt-0 md:text-left">
              <h3 className="font-heading text-sm font-semibold text-sps-gold">
                Samuel SOGLOHOUN
              </h3>
              <p className="mt-1 text-xs text-slate-300">Service Informatique / Digital</p>
              <p className="mt-2 text-[11px] text-slate-400">
                Développe et maintient les outils digitaux qui soutiennent les services du
                cabinet.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-black via-sps-dark to-black"
    >
      <div className="container-default grid gap-10 md:grid-cols-[3fr,2fr]">
        <div>
          <h2 className="section-title">Contact &amp; rendez-vous</h2>
          <p className="section-subtitle">
            Pour toute consultation, demande de procédure ou prestation ANIP, prenez
            contact avec le cabinet via les coordonnées ci-dessous. Un membre de
            l&apos;équipe vous répondra dans les meilleurs délais.
          </p>

          <div className="mt-8 grid gap-6 text-sm text-slate-100 sm:grid-cols-2">
            <div>
              <h3 className="font-heading text-sm font-semibold text-sps-gold">
                Adresse du cabinet
              </h3>
              <p className="mt-2">
                Cococodji, quartier Oiseaux Blanc
                <br />
                Maison SOGLOHOUN
              </p>
            </div>
            <div>
              <h3 className="font-heading text-sm font-semibold text-sps-gold">
                Services clients
              </h3>
              <p className="mt-2">
                Tel&nbsp;: 01 91 11 60 64
                <br />
                Tel&nbsp;: 01 91 98 62 38
              </p>
            </div>
            <div>
              <h3 className="font-heading text-sm font-semibold text-sps-gold">
                WhatsApp
              </h3>
              <p className="mt-2">01 64 94 93 13</p>
            </div>
            <div>
              <h3 className="font-heading text-sm font-semibold text-sps-gold">
                Email
              </h3>
              <p className="mt-2">
                <a
                  href="mailto:sandrellesoglohoun05@gmail.com"
                  className="text-sps-gold underline-offset-2 hover:underline"
                >
                  sandrellesoglohoun05@gmail.com
                    </a>
              </p>
            </div>
          </div>

        </div>

        <div className="glass-panel flex flex-col justify-between rounded-3xl p-6 text-sm text-slate-100">
          <div>
            <h3 className="font-heading text-lg font-semibold text-sps-gold">
              Prendre un rendez-vous
            </h3>
            <p className="mt-3">
              Expliquez brièvement votre besoin par WhatsApp ou par email (type de
              procédure, documents déjà disponibles, urgence éventuelle). Nous vous
              proposerons un rendez-vous et une estimation des délais.
            </p>
          </div>
          <div className="mt-6 rounded-2xl border border-sps-gold/40 bg-sps-navy/40 p-4 text-xs text-slate-200">
            <p className="font-semibold text-sps-gold">
              Domaines couverts sur rendez-vous :
            </p>
            <p className="mt-2">
              Plainte / requête, contrats de bail et de travail, procédures ANIP,
              procédures civiles, commerciales, foncières, sociales et pénales, ainsi que
              les actes administratifs en tout genre.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    question: 'Comment prendre rendez-vous avec le cabinet ?',
    answer:
      'Vous pouvez cliquer sur « Prendre rendez-vous » en haut de page, remplir le formulaire et valider. Un email prérempli sera ouvert vers le cabinet pour finaliser la demande.',
  },
  {
    question: 'Quels types de dossiers traitez-vous le plus souvent ?',
    answer:
      'Les consultations juridiques courantes, les contrats (bail, travail, prestation), les procédures ANIP, les dossiers fonciers ainsi que les litiges civils et commerciaux.',
  },
  {
    question: 'Les prestations ANIP sont-elles vraiment disponibles sous 24h–48h ?',
    answer:
      'Oui, lorsque le dossier est complet et que les délais institutionnels le permettent. Dans le cas contraire, vous êtes informé des délais prévisionnels.',
  },
  {
    question: 'Quels documents apporter pour une première consultation ?',
    answer:
      'Toute pièce déjà en votre possession : contrats, échanges écrits, décisions de justice antérieures, pièces d’identité et références de dossier si vous en avez.',
  },
  {
    question: 'Proposez-vous un accompagnement à distance ?',
    answer:
      'Oui, certaines démarches peuvent être préparées à distance (échanges par téléphone, WhatsApp ou email), puis finalisées sur place si nécessaire.',
  },
];

function FaqSection() {
  return (
    <section
      id="faq"
      className="section-padding bg-gradient-to-b from-black via-sps-dark to-slate-950"
    >
      <div className="container-default">
        <h2 className="section-title">Questions fréquentes</h2>
        <p className="section-subtitle">
          Quelques réponses rapides pour mieux comprendre la manière dont SPS LEGAL SERVICES
          vous accompagne au quotidien.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <article
              key={item.question}
              className="glass-panel rounded-2xl p-5 text-sm text-slate-100"
            >
              <h3 className="font-heading text-sm font-semibold text-sps-gold">
                {item.question}
              </h3>
              <p className="mt-2 text-xs md:text-sm text-slate-200">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingModal({ open, onClose }) {
  if (!open) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const nom = (data.get('nom') || '').toString().trim();
    const telephone = (data.get('telephone') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const type = (data.get('type') || '').toString().trim();
    const message = (data.get('message') || '').toString().trim();

    const subject = `Demande de rendez-vous - ${nom || 'Client SPS'}`;

    const body = [
      `Nom complet : ${nom || '-'}`,
      `Téléphone / WhatsApp : ${telephone || '-'}`,
      `Email : ${email || '-'}`,
      `Type de service : ${type || '-'}`,
      '',
      'Message / objet de la demande :',
      message || '-',
    ].join('\n');

    const mailtoLink = `mailto:sandrellesoglohoun05@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    onClose();
    form.reset();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      <div className="glass-panel relative w-full max-w-lg rounded-3xl p-6">
        <button
          type="button"
          className="absolute right-4 top-4 rounded-full border border-sps-gold/40 p-1 text-xs text-sps-gold hover:bg-sps-gold/10"
          onClick={onClose}
          aria-label="Fermer le formulaire de rendez-vous"
        >
          ✕
        </button>

        <h2 className="font-heading text-xl font-semibold text-sps-gold">
          Demande de rendez-vous
        </h2>
        <p className="mt-2 text-xs text-slate-300">
          Remplissez ce formulaire en quelques lignes. Un email prérempli sera ouvert vers le
          cabinet pour finaliser votre demande.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-xs text-slate-100">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1">
              <span>Nom complet</span>
              <input
                name="nom"
                type="text"
                className="rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-xs outline-none ring-0 placeholder:text-slate-500 focus:border-sps-gold/70"
                placeholder="Nom et prénoms"
                required
              />
            </label>
            <label className="flex flex-col gap-1">
              <span>Téléphone / WhatsApp</span>
              <input
                name="telephone"
                type="tel"
                className="rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-xs outline-none ring-0 placeholder:text-slate-500 focus:border-sps-gold/70"
                placeholder="Ex. 01 64 94 93 13"
                required
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1">
              <span>Adresse email</span>
              <input
                name="email"
                type="email"
                className="rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-xs outline-none ring-0 placeholder:text-slate-500 focus:border-sps-gold/70"
                placeholder="Votre email (optionnel)"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span>Type de service</span>
              <select
                name="type"
                className="rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-xs outline-none ring-0 focus:border-sps-gold/70"
                defaultValue=""
              >
                <option value="" disabled>
                  Sélectionnez un service
                </option>
                <option value="Consultation juridique">Consultation juridique</option>
                <option value="Prestation ANIP">Prestation ANIP</option>
                <option value="Contrat / rédaction d’acte">
                  Contrat / rédaction d’acte
                </option>
                <option value="Procédure (civile, commerciale, foncière, etc.)">
                  Procédure (civile, commerciale, foncière, etc.)
                </option>
                <option value="Autre">Autre demande</option>
              </select>
            </label>
          </div>

          <label className="flex flex-col gap-1">
            <span>Message / objet de la demande</span>
            <textarea
              name="message"
              rows={4}
              className="rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-xs outline-none ring-0 placeholder:text-slate-500 focus:border-sps-gold/70"
              placeholder="Expliquez brièvement votre besoin, les documents que vous avez déjà et les délais souhaités."
              required
            />
          </label>

          <div className="mt-4 flex items-center justify-between gap-3">
            <p className="text-[10px] text-slate-400">
              En envoyant ce formulaire, vous autorisez le cabinet à vous recontacter pour
              traiter votre demande.
            </p>
            <button type="submit" className="btn-primary whitespace-nowrap px-5 py-2">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-6 text-xs text-slate-400">
      <div className="container-default flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p>
            © {new Date().getFullYear()} SPS LEGAL SERVICES. Tous droits réservés.
          </p>
          <p className="text-[11px] text-slate-500">
            Développé par le Service digital SPS LEGAL SERVICES.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-300">
          <span className="uppercase tracking-[0.16em] text-slate-500">
            Réseaux sociaux
          </span>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-sps-navy/60 px-2.5 py-1 transition hover:bg-sps-gold/15"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sps-gold text-[10px] font-bold text-sps-dark">
              f
            </span>
            <span>Facebook</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-sps-navy/60 px-2.5 py-1 transition hover:bg-sps-gold/15"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sps-gold text-[10px] font-bold text-sps-dark">
              in
            </span>
            <span>Instagram</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-sps-navy/60 px-2.5 py-1 transition hover:bg-sps-gold/15"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sps-gold text-[10px] font-bold text-sps-dark">
              in
            </span>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://wa.me/2290164949313"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-sps-navy/60 px-2.5 py-1 transition hover:bg-sps-gold/15"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sps-gold text-[10px] font-bold text-sps-dark">
              wa
            </span>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleOpenBooking = () => setBookingOpen(true);
  const handleCloseBooking = () => setBookingOpen(false);

  return (
    <div className="min-h-screen bg-black text-slate-50">
      <Navbar onOpenBooking={handleOpenBooking} />
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <AboutSection />
        <ServicesSection />
        <DomainesSection />
        <FaqSection />
        <TeamSection />
        <ContactSection />
      </main>
      <BookingModal open={bookingOpen} onClose={handleCloseBooking} />
      <Footer />
    </div>
  );
}

