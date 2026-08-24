import {Link} from 'react-router-dom';
import CTA from '../components/CTA';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import {projects} from '../data/projects';
import {services} from '../data/services';
import CodingAnimation from "../components/CodingAnimation";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  MapPin,
} from "lucide-react";

const benefits = [
  'Solutions shaped around real needs',
  'Scalable, maintainable development',
  'Clear collaborative communication',
  'Responsive, accessible experiences',
  'Performance and security awareness',
  'Long-term product thinking',
];

const processSteps = ['Discover', 'Plan', 'Design', 'Build', 'Test', 'Launch & Improve'];

function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-pad grid items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Software Development Company in Sri Lanka</p>
          <h1 className="mb-6 text-5xl font-extrabold leading-tight sm:text-7xl">
            We build digital products that{' '}
            <span className="bg-gradient-to-r from-brand to-cyan bg-clip-text text-transparent">
              move businesses forward.
            </span>
          </h1>
          <p className="muted mb-8 max-w-2xl text-lg">
            Zrio Labs creates modern websites, custom software, mobile applications, SaaS products,
            user experiences, and interactive digital solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary">
              Start Your Project <ArrowRight size={18}/>
            </Link>
            <Link to="/services" className="btn-secondary">Explore Services</Link>
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm text-slate-400">
            <MapPin size={17} className="text-cyan"/>
            Based in Colombo, Sri Lanka - Remote collaboration
          </p>
        </div>
        <CodingAnimation />
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="section border-y border-slate-800 bg-slate-950/40">
      <div className="container-pad">
        <p className="eyebrow">What we do</p>
        <h2 className="title mb-12">Services built around your goals</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => <ServiceCard key={service.slug} service={service}/>) }
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="section">
      <div className="container-pad grid gap-14 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Why Zrio Labs</p>
          <h2 className="title mb-6">Practical thinking. Maintainable engineering.</h2>
          <p className="muted">We approach each engagement as a product and business challenge, not only a coding task.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <p key={benefit} className="card flex items-start gap-3">
              <CheckCircle2 className="mt-1 shrink-0 text-cyan" size={19}/>
              {benefit}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section bg-panel/50">
      <div className="container-pad">
        <p className="eyebrow">Our process</p>
        <h2 className="title mb-12">From idea to improvement</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {processSteps.map((step, index) => (
            <div key={step} className="card">
              <span className="text-sm text-cyan">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkSection() {
  return (
    // <section className="section">
    //   <div className="container-pad">
    //     <p className="eyebrow">Our work</p>
    //     <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
    //       <h2 className="title">Capabilities in action</h2>
    //       <Link to="/work" className="inline-flex items-center gap-2 text-cyan">
    //         View our work <ArrowRight size={17}/>
    //       </Link>
    //     </div>
    //     <div className="grid gap-6 md:grid-cols-3">
    //       {projects.map((project) => (
    //         <article className="card" key={project.title}>
    //           <span className="text-xs font-semibold uppercase tracking-wider text-cyan">{project.status}</span>
    //           <h3 className="my-4 text-xl font-semibold">{project.title}</h3>
    //           <p className="muted">{project.description}</p>
    //         </article>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="section">
  <div className="container-pad">
    {/* Section heading */}
    <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
      <div>
        <p className="eyebrow">Our Work</p>

        <h2 className="title">
          Capabilities in action
        </h2>
      </div>

      <Link
        to="/work"
        className="inline-flex items-center gap-2 font-medium text-cyan hover:text-white"
      >
        View our work
        <ArrowRight size={18} />
      </Link>
    </div>

    {/* Compact homepage project cards */}
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects
        .filter((project) => project.featured)
        .slice(0, 3)
        .map((project) => (
          <article
            key={project.title}
            className="card group flex min-h-[280px] flex-col"
          >
            {/* Category and status */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan">
                {project.category}
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                {project.status}
              </span>
            </div>

            {/* Project information */}
            <h3 className="mb-3 text-2xl font-bold text-white">
              {project.title}
            </h3>

            <p className="mb-8 text-sm text-slate-400">
              Client:{" "}
              <span className="text-slate-300">
                {project.client}
              </span>
            </p>

            {/* Website link */}
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 font-semibold text-cyan hover:text-white"
              aria-label={`Visit the ${project.title} live website`}
            >
              Visit Live Website
              <ExternalLink
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </article>
        ))}
    </div>
  </div>
</section>
  );
}

export default function Home() {
  return (
    <>
      <SEO
        title="Zrio Labs | Software Development Company in Sri Lanka"
        description="Web development, custom software, mobile apps, SaaS, UI/UX, and game development services from Colombo."
      />
      <Hero/>
      <ServicesSection/>
      <BenefitsSection/>
      <ProcessSection/>
      <WorkSection/>
      <CTA/>
    </>
  );
}
