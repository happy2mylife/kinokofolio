import React, { useState, useEffect } from 'react';
import { 
  Github, Twitter, Mail, ExternalLink, ArrowRight, User, 
  Code, Layers, Sparkles, Briefcase, Coffee, Globe, 
  Award, BookOpen, Home, Cpu, FileText, Mic, Map, Smartphone, Video, Link as LinkIcon
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [activeCareerTab, setActiveCareerTab] = useState('public');

  // スクロール検知
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ナビゲーションのクラス
  const navLinkClass = (section) => `
    cursor-pointer px-4 py-2 rounded-full transition-all duration-300 text-sm md:text-base font-medium whitespace-nowrap
    ${activeSection === section 
      ? 'bg-slate-900 text-white shadow-lg transform scale-105' 
      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}
  `;

  // プロジェクトデータ
  const projects = [
    {
      id: 1,
      title: "デジタルえほん「えぽん」",
      category: "Mobile App / Education",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
      description: "音読することで絵が動いたり音が鳴ったりするデジタル絵本アプリ。第14回キッズデザイン賞受賞。",
      tags: ["App", "Kids Design", "Interactive"],
      link: "https://mashandroom.org/epon-meguri/"
    },
    {
      id: 2,
      title: "キノコラリー",
      category: "Regional / Web App",
      image: "https://images.unsplash.com/photo-1476973422084-e0fa66ff9456?auto=format&fit=crop&q=80&w=800",
      description: "「リアル冒険 × デジタルスタンプラリー」。密にならずに地域や町内会を巡る冒険学習イベント。",
      tags: ["Gamification", "Regional", "Web App"],
      link: "https://mashandroom.org/kinoko-rally/"
    },
    {
      id: 3,
      title: "キノコクエスト",
      category: "Event / Online Quest",
      image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?auto=format&fit=crop&q=80&w=800",
      description: "リアル地域が舞台のオンラインクエスト。子供たちが楽しみながら地域やイベントを学べる企画。",
      tags: ["Online Event", "Community", "Quest"],
      link: "https://mashandroom.org/kinoko-quest/"
    },
    {
      id: 4,
      title: "キノコリフレクション",
      category: "Media Art",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
      description: "心のリフレクション（投影）を表現するプロジェクションマッピング・インスタレーション。",
      tags: ["Projection Mapping", "Art", "Event"],
      link: "https://mashandroom.org/kinoko-reflection/"
    },
    {
      id: 5,
      title: "ティーチャソン",
      category: "Workshop / Community",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
      description: "「先生の一歩を子供たちの百歩に」。先生方がオンラインツールのホスト体験等をワイワイ学ぶコミュニティ。",
      tags: ["Education", "Workshop", "Teachers"],
      link: "https://mashandroom.org/report/3280/"
    },
    {
      id: 6,
      title: "マッシュ＆ルーム",
      category: "Organization",
      image: "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?auto=format&fit=crop&q=80&w=800",
      description: "「ちょっとのITとICTで笑顔を」をモットーに活動する任意団体。一億総キノコを目指して。",
      tags: ["Non-profit", "Social", "IT Support"],
      link: "https://mashandroom.org"
    }
  ];

  // メディア・論文データ
  const mediaData = [
    {
      category: "Academic & Writing",
      icon: <FileText size={24} className="text-blue-500" />,
      items: [
        {
          tag: "CiNii",
          title: "バーチャル空間を利用した他地域遠隔交流による学習活動実践報告",
          desc: "教育版マインクラフトマルチプレイによる発達障害のある不登校児童支援",
          link: "https://cir.nii.ac.jp/crid/1050580691349974656" // 類似のCiNiiリンクを適用（廃校の扉等）
        },
        {
          tag: "CiNii",
          title: "「OSS の品質管理」に対する市民共創方法",
          desc: "データ可視化プラットホーム E2D3 の事例紹介",
          link: "https://cir.nii.ac.jp/crid/1050865676189748736" // 類似のCiNiiリンクを適用
        },
        {
          tag: "論文",
          title: "ゲーミフィケーションによる児童の情報モラル・リテラシー教育支援の提案",
          desc: "ゲーム学会「ゲームと健康科学」研究部会 / 下條公寛, 村瀬真琴, 後藤田中",
          link: "https://eng.kagawa-u.ac.jp/eng/summary/article/35093/"
        },
        {
          tag: "書籍",
          title: "人生という旅人の書 (Kindle出版)",
          desc: "寄稿「大人の一歩を子供たちの百歩に」",
          link: "https://www.amazon.co.jp/dp/B07RJ6D3KG"
        }
      ]
    },
    {
      category: "Media & Talks",
      icon: <Mic size={24} className="text-pink-500" />,
      items: [
        {
          tag: "Radio",
          title: "東京FM「サステナ*デイズ」",
          desc: "ロールプレーイングゲームを使った防災教育「かわせみ防災クエスト」",
          link: "https://www.tfm.co.jp/solution/index.php?catid=4030&itemid=186468"
        },
        {
          tag: "Radio",
          title: "FMしながわ",
          desc: "マッシュ＆ルームの活動紹介 / シナガワンラジオ",
          link: "https://mashandroom.org/report/2569"
        },
        {
          tag: "Event",
          title: "プログラミング教育セミナーONLINE",
          desc: "民間と現場に学ぶ、プログラミング教育のカリキュラム・マネジメントと授業づくり",
          link: "https://www.sobal.co.jp/about/newsrelease/news_20201211.html"
        },
        {
          tag: "YouTube",
          title: "Infra Study 2nd #8「エンジニアのアウトプット」",
          desc: "基調講演：まつもとゆきひろ氏 / Forkwell",
          link: "https://www.youtube.com/live/EHb7bY1H7wM?si=Zvef3YegV0Xmii8U&t=6309"
        },
        {
          tag: "YouTube",
          title: "ChatGPT Meetup Tokyo #3",
          desc: "歌え！GPT！text LLMによるアドリブ生成AIコンテスト参戦！",
          link: "https://www.youtube.com/live/-BbF_H-mDWg?si=-jxx66lRbUMaE1IT&t=4338"
        }
      ]
    }
  ];

  // 経歴データ
  const careerData = {
    public: {
      title: "Public / Work",
      icon: <Briefcase size={20} />,
      color: "bg-blue-100 text-blue-600",
      content: [
        {
          title: "Development & Engineering",
          description: "プリンタドライバ、iOSアプリ、Webフロントエンド〜バックエンドまで幅広く開発。",
          tech: ["C", "Swift", "TypeScript", "Angular", "Vue.js", "React", "Next.js", "AWS", "PostgreSQL"]
        },
        {
          title: "Business & Education",
          description: "新規事業開発、IT/ICTと教育を軸にした学校・自治体向けセミナーやアプリ企画・開発。",
          details: [
            { text: "教育関係者向けイベント共催", link: "https://www.sobal.co.jp/about/newsrelease/news_20201211.html" },
            { text: "プログラミング教育セミナー講師" }
          ]
        },
        {
          title: "Mentorship & Training",
          description: "次世代エンジニアの育成に注力。",
          details: [
            { text: "インターンシップ講師 (500名以上)" },
            { text: "新卒社員開発研修講師 (150名以上)" },
            { text: "社内ハッカソン・勉強会運営", link: "https://www.sobal.co.jp/ir/irnews_2025_0210.html" },
            { text: "企業訪問支援", link: "https://www.sobal.co.jp/csr/volunteer.html" }
          ]
        }
      ]
    },
    private: {
      title: "Private / Hobby",
      icon: <Coffee size={20} />,
      color: "bg-orange-100 text-orange-600",
      content: [
        {
          title: "Mr.Children",
          description: "大学生の頃『my life』を聴いてどっぷりハマる。IT業界に入ったきっかけも、趣味で作ったミスチルのファンサイト。",
        },
        {
          title: "Baseball",
          description: "小学校や高校時代のメンバーでチームを作り、20年近く活動中。",
        },
        {
          title: "Gym & Cafe",
          description: "引っ越しの絶対条件は「近くにジムとカフェがあること」。",
        }
      ]
    },
    social: {
      title: "Social / Kinoko",
      icon: <Globe size={20} />,
      color: "bg-green-100 text-green-600",
      content: [
        {
          title: "Mushroom Activities",
          description: "任意団体マッシュ＆ルーム代表。キノコ活動に勤しむ日々。",
        },
        {
          title: "Academic & Regional",
          description: "香川大学客員研究員。「産学菌・菌学官・産菌官連携」を目指し、ゲーミフィケーションやアセスメントを研究。",
          details: [
            { text: "研究者情報 (researchmap)", link: "https://researchmap.jp/kinoko" }
          ]
        },
        {
          title: "Career & Education",
          description: "キャリアコンサルタントとして、小中高大のキャリア教育や地域・PTAでのICT活用支援に関わる。",
        }
      ]
    },
    hackathon: {
      title: "Hackathon",
      icon: <Award size={20} />,
      color: "bg-purple-100 text-purple-600",
      content: [
        {
          title: "2015",
          details: [
            { text: "SPAJAM（東京予選入賞）" },
            { text: "禅Hack" },
            { text: "Music Hack Day Tokyo（ローランド賞）" },
            { text: "超特大ペッパソン（Pepper賞）" }
          ]
        },
        {
          title: "2016",
          details: [
            { text: "Webと車のハッカソン" },
            { text: "Yahoo Hack Day" },
            { text: "Space Apps Challenge" },
            { text: "MIZUHO.HACK（Pepper賞）" },
            { text: "NTTドコモｘTBS TVHACKDAY（myThings賞）" },
            { text: "Facebook Messenger ハッカソン（IBM賞）" },
            { text: "特大ペッパソン" }
          ]
        },
        {
          title: "2017",
          details: [
            { text: "Space Apps Challenge（ヤフー賞）" },
            { text: "ペッパソン東の陣（SONY賞）" },
            { text: "ハママチューン（グランプリ）" }
          ]
        },
        {
          title: "2018",
          details: [
            { text: "SPAJAM" },
            { text: "RIZAPｘベルマーレハッカソン（最優秀賞）" },
            { text: "LINE BOOT AWARDSハッカソン" }
          ]
        },
        {
          title: "2019",
          details: [
            { text: "Alexaスキルアワードハッカソン 東京" }
          ]
        },
        {
          title: "2023",
          details: [
            { text: "SPAJAM" }
          ]
        }
      ]
    }
  };

  // 資格データ
  const qualifications = [
    {
      category: "IT & Engineering",
      icon: <Cpu size={24} className="text-blue-500" />,
      items: [
        { name: "AWS 認定 12冠達成 ('21〜'23)", link: "https://www.line-community.me/ja/evangelist/h2m_kinoko" },
        { name: "AWS Certified Solutions Architect – Professional", link: "https://www.credly.com/users/h2m_kinoko/badges" },
        { name: "AWS Certified DevOps Engineer – Professional", link: "https://www.credly.com/users/h2m_kinoko/badges" },
        { name: "AWS Certified Security – Specialty", link: "https://www.credly.com/users/h2m_kinoko/badges" },
        { name: "AWS Certified Machine Learning – Specialty", link: "https://www.credly.com/users/h2m_kinoko/badges" },
        { name: "Google Cloud Associate Cloud Engineer", link: "https://www.credential.net/e480a467-3f9e-478f-b94c-616c9731f220" },
        { name: "Microsoft Certified: Azure Fundamentals", link: "https://www.credly.com/badges/86cf6883-de06-4cf1-8d74-c69191eb9be3" },
        { name: "基本情報処理技術者 / ソフトウェア開発技術者" },
        { name: "データベーススペシャリスト / プロジェクトマネージャー" },
        { name: "Oracle Certified Java Programmer Gold SE8" },
        { name: "G検定2020#1", link: "https://www.openbadge-global.com/ns/portal/openbadge/public/assertions/user/eTZHWnpTL21RakloMjRmQnBtS3oxUT09" },
        { name: "Generative AI Test 2025#1", link: "https://www.openbadge-global.com/ns/portal/openbadge/public/assertions/detail/Z3JkaHhPcnJ1QzFEZndHV25XS3NmUT09" }
      ]
    },
    {
      category: "Education & Career",
      icon: <BookOpen size={24} className="text-green-500" />,
      items: [
        { name: "国家資格キャリアコンサルタント" },
        { name: "ICT支援員 / 情報教育化コーディネータ3級" },
        { name: "キッズコーチ検定3級" },
        { name: "JSSC 統計検定3級" }
      ]
    },
    {
      category: "Living & Welfare",
      icon: <Home size={24} className="text-orange-500" />,
      items: [
        { name: "宅地建物取引主任者" },
        { name: "福祉住環境コーディネーター2級" },
        { name: "スマート介護士Basic" },
        { name: "第2種衛生管理者" }
      ]
    },
    {
      category: "Social Activities",
      icon: <Sparkles size={24} className="text-purple-500" />,
      items: [
        { name: "任意団体マッシュ＆ルーム代表" },
        { name: "SDGs de 地方創生公認ファシリテーター" },
        { name: "Softbank Robotics公認Pepperアンバサダー", link: "https://www.line-community.me/ja/evangelist/h2m_kinoko" },
        { name: "LINE API Expert ('22〜)", link: "https://www.line-community.me/ja/evangelist/h2m_kinoko" },
        { name: "micro:bit champion ('25〜)", link: "https://note.com/h2mkinoko/n/n0c7d2c305816" },
        { name: "香川大学客員研究員 ('25〜)", link: "https://researchmap.jp/kinoko" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 font-sans selection:bg-orange-200">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center py-6 transition-all duration-300 ${scrollY > 50 ? 'bg-[#FDFBF7]/80 backdrop-blur-md py-4' : ''}`}>
        <div className="flex bg-white/50 backdrop-blur-sm p-1.5 rounded-full border border-slate-200 shadow-sm overflow-x-auto max-w-full mx-4 no-scrollbar">
          {['home', 'works', 'media', 'profile', 'contact'].map((item) => (
            <a
              key={item}
              onClick={() => {
                setActiveSection(item);
                document.getElementById(item).scrollIntoView({ behavior: 'smooth' });
              }}
              className={navLinkClass(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="z-10 text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-4">
            <Sparkles size={16} className="text-orange-500" />
            <span>Available for new projects</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 leading-tight">
            Design with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 italic pr-2">Passion</span>
            & Logic.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Hi, I'm <span className="font-bold text-slate-800">Kinoko</span>.
            <br />
            デジタル領域を中心に、記憶に残る体験をデザインします。
          </p>

          <div className="flex gap-4 justify-center pt-8">
            <button 
              onClick={() => document.getElementById('works').scrollIntoView({ behavior: 'smooth' })}
              className="group bg-slate-900 text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-slate-800 hover:scale-105 flex items-center gap-2"
            >
              View Works <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-medium transition-all hover:bg-slate-50 hover:border-slate-300"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Selected Works</h2>
              <p className="text-slate-500 text-lg">最近の取り組みの一部をご紹介します。</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[400px]">
            {projects.map((project, index) => (
              <a 
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ${index === 0 || index === 3 ? 'md:col-span-2' : ''} bg-slate-100`}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex flex-wrap gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-200 line-clamp-2 text-sm md:text-base group-hover:text-white transition-colors">
                    {project.description}
                  </p>
                </div>
                
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 rotate-45 group-hover:rotate-0">
                  <ExternalLink size={20} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Publications & Media Section */}
      <section id="media" className="py-24 px-6 bg-[#FDFBF7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Publications & Media</h2>
            <p className="text-slate-500 text-lg">論文、書籍寄稿、メディア出演、LTなど。</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mediaData.map((category, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                  <div className="p-3 bg-slate-50 rounded-xl">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{category.category}</h3>
                </div>
                
                <div className="space-y-8">
                  {category.items.map((item, i) => (
                    <div key={i} className="group relative pl-6 border-l-2 border-slate-100 hover:border-orange-300 transition-colors">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-200 border-2 border-white group-hover:bg-orange-400 transition-colors"></div>
                      <span className="inline-block px-2 py-1 bg-slate-100 text-slate-500 text-xs font-medium rounded mb-2">
                        {item.tag}
                      </span>
                      <h4 className="text-lg font-bold text-slate-900 leading-snug mb-1">
                        {item.link ? (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors flex items-center gap-1">
                            {item.title} <ExternalLink size={14} />
                          </a>
                        ) : (
                          item.title
                        )}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Section (About + Career + Qualifications) */}
      <section id="profile" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-24">
          
          {/* 1. Introduction */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-square rounded-full overflow-hidden border-8 border-slate-100 shadow-2xl max-w-sm mx-auto bg-slate-200 relative">
                 <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-400">
                    <User size={80} />
                 </div>
              </div>
              <div className="absolute -bottom-6 -right-6 md:right-12 bg-white p-4 rounded-2xl shadow-lg animate-bounce duration-[3000ms]">
                <span className="text-4xl">🍄</span>
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
                  現在はエンジニアとしての仕事以外で、<span className="font-bold text-orange-500">「キノコ活動」</span>に勤しむ日々。
                  色々なご縁と使命感から、教育関係にも積極的に関わっています。
                </p>
                <p className="text-base bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm">
                  <span className="block font-bold text-slate-800 mb-1">🤝 連携のお誘い</span>
                  アカデミック関係の皆様とも何か<br className="md:hidden"/>
                  <span className="font-bold text-orange-600">「産学菌・菌学官・産菌官連携」</span><br className="md:hidden"/>
                  などできたら嬉しいです。
                </p>
              </div>
            </div>
          </div>

          {/* 2. Career (Tabs) */}
          <div className="space-y-10">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Career & Activities</h3>
              <div className="flex flex-wrap justify-center gap-2 bg-slate-100 p-1 rounded-full">
                {Object.keys(careerData).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveCareerTab(key)}
                    className={`px-6 py-2 rounded-full font-medium transition-all text-sm md:text-base ${
                      activeCareerTab === key 
                      ? 'bg-white text-slate-900 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {careerData[key].title}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 min-h-[400px]">
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-3 rounded-xl bg-white shadow-sm text-${careerData[activeCareerTab].color.split(' ')[1]}`}>
                  {careerData[activeCareerTab].icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-900">{careerData[activeCareerTab].title}</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {careerData[activeCareerTab].content.map((item, idx) => (
                  <div key={idx} className="space-y-3">
                    <h5 className="font-bold text-lg text-slate-800">{item.title}</h5>
                    {item.description && <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>}
                    {item.tech && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {item.tech.map(t => (
                          <span key={t} className="px-2 py-1 bg-white border border-slate-200 text-slate-600 text-xs rounded-md">{t}</span>
                        ))}
                      </div>
                    )}
                    {item.details && (
                      <ul className="list-inside text-sm text-slate-500 space-y-1 pt-2">
                        {item.details.map((d, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-slate-400">•</span>
                            {d.link ? (
                              <a href={d.link} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 underline decoration-slate-300 underline-offset-2 transition-colors">
                                {d.text}
                              </a>
                            ) : (
                              <span>{d.text}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Qualifications */}
          <div className="space-y-10">
             <h3 className="text-3xl font-bold text-slate-900 text-center">Certifications & Skills</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {qualifications.map((group, idx) => (
                  <div key={idx} className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
                      {group.icon}
                      <h4 className="font-bold text-lg text-slate-800">{group.category}</h4>
                    </div>
                    <ul className="space-y-3">
                      {group.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                           <span className="text-orange-400 mt-1 flex-shrink-0">•</span>
                           {item.link ? (
                             <a href={item.link} target="_blank" rel="noopener noreferrer" className={`hover:text-orange-600 transition-colors underline decoration-slate-300 underline-offset-2 ${item.name.includes("AWS") ? "font-medium text-slate-800" : ""}`}>
                               {item.name}
                             </a>
                           ) : (
                             <span className={item.name.includes("AWS") ? "font-medium text-slate-800" : ""}>{item.name}</span>
                           )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
             </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-5xl font-bold">Let's work together.</h2>
          <p className="text-slate-400 text-xl">
            キャリア教育、ICT活用、キノコ活動...<br />
            どんなことでもお気軽にご連絡ください。
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center py-8">
            <a href="mailto:hello@kinokofolio.com" className="flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-orange-100 transition-colors w-full md:w-auto justify-center">
              <Mail size={20} /> hello@kinokofolio.com
            </a>
          </div>

          <div className="flex flex-wrap gap-8 justify-center border-t border-slate-800 pt-10">
            <a href="https://github.com/happy2mylife" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-orange-400 transition-all" title="GitHub">
              <Github size={24} />
            </a>
            <a href="https://twitter.com/h2m_kinoko" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-orange-400 transition-all" title="Twitter">
              <Twitter size={24} />
            </a>
            <a href="https://qiita.com/h2m_kinoko" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-orange-400 transition-all font-bold" title="Qiita">
              Q
            </a>
            <a href="https://note.com/h2mkinoko" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-orange-400 transition-all font-bold" title="Note">
              N
            </a>
             <a href="https://8card.net/virtual_cards/kDI3_qr5XPcxOj1JdnGKKQ_30247218107" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-orange-400 transition-all font-bold" title="Eight (Business Card)">
              8
            </a>
          </div>

          <footer className="pt-10 text-slate-600 text-sm">
            © 2026 Kinoko Folio. All rights reserved.
          </footer>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;