import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../atoms/Button';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-20 px-6 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="z-10 text-center max-w-4xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-4">
          <Sparkles size={16} className="text-orange-500" />
          <span>Available for new projects</span>
        </div>

        <h2 className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 leading-tight">
          ミスチルと野球を愛する<br />
          そこら辺のキノコ
        </h2>

        <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          #ちょっとのITとICTを使って、ちょっとの笑顔とワクワクをお届け
          <br />
          #大人の一歩を子どもたちの百歩に
          <br />
          #情報過多で簡略化だぜ文明の利器は
          <br />
          #一億総キノコ
        </p>

        <div className="flex gap-4 justify-center pt-8">
          <Button
            variant="primary"
            onClick={() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })}
            icon={<ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
          >
            View Kinoko
          </Button>
          <Button
            variant="secondary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
