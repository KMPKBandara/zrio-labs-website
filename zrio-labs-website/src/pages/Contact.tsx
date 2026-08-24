import {FormEvent, useState} from 'react';
import {ExternalLink as Linkedin, Mail, MapPin, Share2} from 'lucide-react';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import {services} from '../data/services';
import {site} from '../data/site';

function ContactDetails() {
  return (
    <aside className="card h-fit">
      <h2 className="mb-6 text-2xl font-bold">Connect with us</h2>
      <div className="space-y-5 text-slate-300">
        <p className="flex gap-3"><MapPin className="text-cyan"/>{site.location}</p>
        <a className="flex gap-3" href={`mailto:${site.email}`}>
          <Mail className="text-cyan"/>{site.email}
        </a>
        <a className="flex gap-3" href={site.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin className="text-cyan"/>LinkedIn
        </a>
        <a className="flex gap-3" href={site.facebook} target="_blank" rel="noopener noreferrer">
          <Share2 className="text-cyan"/>Facebook
        </a>
      </div>
    </aside>
  );
}

function InquiryForm() {
  const [notice, setNotice] = useState('');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice('Your form is valid. Connect a form service in src/pages/Contact.tsx before publishing to send messages.');
  }

  return (
    <form onSubmit={submit} className="card grid gap-5 sm:grid-cols-2">
      <label>Full name *<input required name="name" className="field mt-2" autoComplete="name"/></label>
      <label>Work email *<input required type="email" name="email" className="field mt-2" autoComplete="email"/></label>
      <label>Phone <input type="tel" name="phone" className="field mt-2" autoComplete="tel"/></label>
      <label>Company <input name="company" className="field mt-2" autoComplete="organization"/></label>
      <label>Service *
        <select required name="service" className="field mt-2">
          <option value="">Choose a service</option>
          {services.map((service) => <option key={service.slug}>{service.title}</option>)}
          <option>Other</option>
        </select>
      </label>
      <label>Budget
        <select name="budget" className="field mt-2">
          <option>Not decided yet</option>
          <option>Prefer to discuss</option>
          <option>Under $1,000</option>
          <option>$1,000-$5,000</option>
          <option>$5,000+</option>
        </select>
      </label>
      <label className="sm:col-span-2">Project description *
        <textarea required name="description" className="field mt-2 min-h-36" placeholder="Describe your goals, users, and preferred timeline."/>
      </label>
      <label className="flex items-start gap-3 text-sm text-slate-400 sm:col-span-2">
        <input required type="checkbox" name="consent" className="mt-1"/>
        I agree that Zrio Labs may use these details to respond to my inquiry.
      </label>
      <div className="sm:col-span-2">
        <button className="btn-primary" type="submit">Validate Inquiry</button>
        {notice && <p className="mt-4 text-sm text-cyan" role="status">{notice}</p>}
      </div>
    </form>
  );
}

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Zrio Labs | Start a Software Project"
        description="Contact Zrio Labs in Colombo to discuss a website, custom software, mobile, SaaS, UI/UX, or game project."
      />
      <PageHero
        eyebrow="Contact"
        title="Tell us what you want to build."
        text="Share your idea, challenge, or project goals. We’ll use the information to understand where Zrio Labs can help."
      />
      <section className="section">
        <div className="container-pad grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <ContactDetails/>
          <InquiryForm/>
        </div>
      </section>
    </>
  );
}
