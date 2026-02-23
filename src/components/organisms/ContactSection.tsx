import React from 'react';
import { Github, Twitter, Mail, ShieldQuestion, Facebook } from 'lucide-react';
import SocialLink from '../molecules/SocialLink';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900 text-white text-center">
      <div className="max-w-3xl mx-auto space-y-10">
        <h2 className="text-4xl md:text-5xl font-bold">Let's 一億総キノコ</h2>
        <p className="text-slate-400 text-xl">
          キノコになりませんか？<br />
          キャリア教育、ICT活用、アイデア出し、キノコ活動...<br />
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
          <SocialLink href="https://www.facebook.com/happy.happy.children/" icon={<Facebook size={24} />} title="Facebook" />
          <SocialLink href="https://lin.ee/RjpJefL" icon={<span className="text-xl font-bold" style={{ color: '#06C755' }}>L</span>} title="LINE" />
          <SocialLink
            href="https://www.youtube.com/@mashandroom"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            }
            title="YouTube"
          />
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
