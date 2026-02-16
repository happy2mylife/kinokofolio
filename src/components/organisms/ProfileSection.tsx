import React, { useState } from 'react';
import { User } from 'lucide-react';
import { CareerTab, QualificationGroup, SocialLinkData } from '../../types';
import SectionTitle from '../atoms/SectionTitle';
import CareerCard from '../molecules/CareerCard';
import QualificationItem from '../molecules/QualificationItem';
import IconWrapper from '../atoms/IconWrapper';
import SocialLink from '../molecules/SocialLink';

interface ProfileSectionProps {
  careerData: Record<string, CareerTab>;
  qualifications: QualificationGroup[];
  activities: QualificationGroup[];
  socialLinks: SocialLinkData[];
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ careerData, qualifications, activities, socialLinks }) => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setMousePosition({
      x: e.clientX - 32,
      y: e.clientY - 32,
    });
  };

  const handleMouseLeave = () => {
    setMousePosition(null);
  };

  return (
    <section
      id="profile"
      className="py-24 px-6 bg-white"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-6xl mx-auto space-y-24">

        {/* 1. Introduction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="aspect-square rounded-full overflow-hidden border-8 border-slate-100 shadow-2xl max-w-sm mx-auto bg-slate-200 relative">
              <img
                src={`${import.meta.env.BASE_URL}images/prof1.jpg`}
                alt="Kinoko Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">About Kinoko</h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                2000年 法学部卒。不動産関係の仕事に就こうと思いましたが、就活は散々な結果に。
                そんな時、趣味で<span className="font-bold text-slate-800">Mr.Children</span>のホームページを作っていたら楽しくなって、ITの世界へ飛び込みました。
              </p>
              <p>
                仕事以外で、<span className="font-bold text-orange-500">「キノコ活動」</span>に勤しむ日々。
                色々なご縁と使命感から、教育関係にも積極的に関わっています。
              </p>
              <p className="text-base bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm">
                <span className="block font-bold text-slate-800 mb-1">🤝 連携のお誘い</span>
                アカデミック関係の皆様とも何か<br className="md:hidden" />
                <span className="font-bold text-orange-600">「産学菌・菌学官・産菌官」連携</span><br className="md:hidden" />
                などできたら嬉しいです。お気軽にご連絡ください。
              </p>
            </div>

            {/* SNS Links */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">SNS & Links</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, idx) => (
                  <SocialLink
                    key={idx}
                    href={social.href}
                    icon={social.icon}
                    title={social.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Career & Activities */}
        <div className="space-y-10">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Career & Activities</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(careerData).map(([key, category]) => (
              <div
                key={key}
                className="bg-slate-50 rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
                  <div className={`p-3 rounded-xl bg-white shadow-sm ${category.color}`}>
                    {category.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">{category.title}</h4>
                </div>

                <div className="space-y-6">
                  {category.content.map((item, idx) => (
                    <CareerCard key={idx} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Qualifications */}
        <div className="space-y-10">
          <SectionTitle title="Certifications & Skills" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualifications.map((group, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
                  {group.icon}
                  <h4 className="font-bold text-lg text-slate-800">{group.category}</h4>
                </div>
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <QualificationItem key={i} item={item} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Social Activities & IT Support */}
        <div className="space-y-10">
          <SectionTitle title="Social Activities & Support" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((group, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
                  {group.icon}
                  <h4 className="font-bold text-lg text-slate-800">{group.category}</h4>
                </div>
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <QualificationItem key={i} item={item} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProfileSection;
