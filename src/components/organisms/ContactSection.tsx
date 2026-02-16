import React from 'react';
import { Github, Twitter, Mail, ShieldQuestion } from 'lucide-react';
import SocialLink from '../molecules/SocialLink';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900 text-white text-center">
      <div className="max-w-3xl mx-auto space-y-10">
        <h2 className="text-4xl md:text-5xl font-bold">Let's work together.</h2>
        <p className="text-slate-400 text-xl">
          キャリア教育、ICT活用、キノコ活動...<br />
          どんなことでもお気軽にご連絡ください。
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center py-8">
          <a href="https://mashandroom.org" className="flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-orange-100 transition-colors w-full md:w-auto justify-center">
            <ShieldQuestion size={20} /> https://mashandroom.org
          </a>
        </div>

        <div className="flex flex-wrap gap-8 justify-center border-t border-slate-800 pt-10">
          <SocialLink href="https://github.com/happy2mylife" icon={<Github size={24} />} title="GitHub" />
          <SocialLink href="https://twitter.com/h2m_kinoko" icon={<Twitter size={24} />} title="Twitter" />
          <SocialLink href="https://qiita.com/h2m_kinoko" icon="Q" title="Qiita" />
          <SocialLink href="https://note.com/mashandroom" icon="N" title="Note" />
          <SocialLink href="https://8card.net/virtual_cards/kDI3_qr5XPcxOj1JdnGKKQ_30247218107" icon="8" title="Eight (Business Card)" />
        </div>

        <footer className="pt-10 text-slate-600 text-sm">
          © 2026 Kinoko Folio. All rights reserved.
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;
