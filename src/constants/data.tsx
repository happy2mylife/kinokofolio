import React from 'react';
import {
  FileText, Mic, Cpu, BookOpen, Home, Sparkles, Monitor,
  Briefcase, Coffee, Globe, Award, Github, Linkedin, Facebook
} from 'lucide-react';
import { Project, MediaCategory, CareerTab, QualificationGroup, SocialLinkData } from '../types';

export const socialLinks: SocialLinkData[] = [
  {
    icon: <span className="text-2xl">𝕏</span>,
    href: "https://x.com/h2m_kinoko",
    label: "X (Twitter)"
  },
  {
    icon: <span className="text-2xl">🍄</span>,
    href: "https://8card.net/virtual_cards/kDI3_qr5XPcxOj1JdnGKKQ_30247218107",
    label: "8card"
  },
  {
    icon: <Facebook size={24} />,
    href: "https://www.facebook.com/happy.happy.children/",
    label: "Facebook"
  },
  {
    icon: <span className="text-2xl font-bold" style={{ color: '#06C755' }}>L</span>,
    href: "https://lin.ee/RjpJefL",
    label: "LINE"
  },
  {
    icon: <span className="text-2xl font-bold">Q</span>,
    href: "https://qiita.com/h2m_kinoko",
    label: "Qiita"
  },
  {
    icon: <span className="text-2xl">▶</span>,
    href: "https://www.youtube.com/@mashandroom",
    label: "YouTube"
  },
  {
    icon: <Linkedin size={24} />,
    href: "https://www.linkedin.com/in/happy-happy-children/",
    label: "LinkedIn"
  },
  {
    icon: <Github size={24} />,
    href: "https://github.com/happy2mylife",
    label: "GitHub"
  }
];


// Selected Works - プロフェッショナルな実績
export const selectedWorks: Project[] = [
  // TODO: Add selected works here
  {
    id: 1,
    title: "マッシュ＆ルーム",
    category: "Organization",
    image: `${import.meta.env.BASE_URL}images/mashandroom.jpg`,
    description: "「ちょっとのITとICTで笑顔を」をモットーに活動する任意団体。一億総キノコを目指して。",
    tags: ["Non-profit", "Social", "IT Support"],
    link: "https://mashandroom.org"
  },
];

// Kinoko Contents - キノコなコンテンツ
export const kinokoContents: Project[] = [
  {
    id: 1,
    title: "デジタルえほん「えぽん」",
    category: "Mobile App / Education",
    image: `${import.meta.env.BASE_URL}images/epon.jpg`,
    description: "音読することで絵が動いたり音が鳴ったりするデジタル絵本アプリ。第14回キッズデザイン賞受賞。",
    tags: ["App", "Kids Design", "Interactive"],
    link: "https://mashandroom.org/epon-meguri/"
  },
  {
    id: 2,
    title: "キノコラリー",
    category: "Regional / Web App / Digital Stamp Rally",
    image: `${import.meta.env.BASE_URL}images/kinoko_rally.png`,
    description: "「リアル冒険 × デジタルスタンプラリー」。地域や町内会を巡る冒険型学習イベント。",
    tags: ["Gamification", "Regional", "Web App"],
    link: "https://mashandroom.org/kinoko-rally/"
  },
  {
    id: 3,
    title: "キノコクエスト",
    category: "Event / Online Quest",
    image: `${import.meta.env.BASE_URL}images/kinoko_quest.png`,
    description: "リアル地域が舞台のオンラインクエスト。子供たちが楽しみながら地域やイベントを学べる企画。",
    tags: ["Online Event", "Community", "Quest"],
    link: "https://mashandroom.org/kinoko-quest/"
  },
  {
    id: 4,
    title: "キノコリフレクション",
    category: "Projection Mapping / Art / Event",
    image: `${import.meta.env.BASE_URL}images/kinoko_reflection.png`,
    description: "心のリフレクション（投影）を表現するプロジェクションマッピング・インスタレーション。",
    tags: ["Projection Mapping", "Art", "Event"],
    link: "https://mashandroom.org/kinoko-reflection/"
  },
  {
    id: 5,
    title: "キノコの館",
    category: "Media Art",
    image: `${import.meta.env.BASE_URL}images/kinoko_castle.jpg`,
    description: "世界観に没入する体験型アドベンチャー。テーマに沿った形で館を設置し、クイズやミッションなどを体験できる館。",
    tags: ["Projection Mapping", "Art", "Event"],
    link: "https://mashandroom.org/kinoko-castle/"
  },
  {
    id: 6,
    title: "七夕Pepper（Pepper Braille）",
    category: "Accessibility / Robot / Education",
    image: `${import.meta.env.BASE_URL}images/tanabata_pepper.jpg`,
    description: "視覚障がいのある子どもたちが、点字入力デバイスを使ってPepper（織姫・彦星）とコミュニケーションし、願い事を届けるプロジェクト。",
    tags: ["Robot", "Accessibility", "Education"],
    link: "https://note.com/mashandroom/n/nd921f89fa0b3"
  },
  {
    id: 7,
    title: "キノコ式！",
    category: "Education",
    image: `${import.meta.env.BASE_URL}images/kinoko-style.png`,
    description: "「先生の一歩を子どもたちの百歩に」。ゆったりまったりのんびり。誰も置いて行かないキノコ式！",
    tags: ["Education", "Workshop", "Teachers"],
    link: "https://mashandroom.org/kinoko-style/"
  }

];

// 後方互換性のため
export const projects = [...selectedWorks, ...kinokoContents];


export const mediaData: MediaCategory[] = [
  {
    category: "Academic & Writing",
    icon: <FileText size={24} className="text-blue-500" />,
    items: [
      {
        tag: "CiNii",
        title: "「OSS の品質管理」に対する市民共創方法",
        desc: "データ可視化プラットホーム E2D3 の事例紹介",
        link: "https://cir.nii.ac.jp/crid/1390570699999459840",
        year: 2019

      },
      {
        tag: "表彰",
        title: "「ぼうさい甲子園 特別支援学校・団体の部」大賞を受賞",
        desc: "「かわせみ防災クエスト」～冒険しながら防災を学ぼう！～",
        link: "https://bousai-koushien.net/jusyoukou/archives/1392",
        year: 2021
      },
      {
        tag: "CiNii",
        title: "バーチャル空間を利用した他地域遠隔交流による学習活動実践報告",
        desc: "教育版マインクラフトマルチプレイによる発達障害のある不登校児童支援",
        link: "https://cir.nii.ac.jp/crid/1520296918635445376",
        year: 2022
      },
      {
        tag: "書籍",
        title: "ＬＤ，ＡＤＨＤ＆ＡＳＤ 2022年 10月号 (ＧＩＧＡスクール　多様性に応じた個別最適な学び)",
        desc: "寄稿：「大人の一歩を子どもたちの百歩に」",
        link: "https://www.amazon.co.jp/dp/B0B8CF6VKK",
        year: 2022
      },
      {
        tag: "表彰",
        title: "青少年健全育成地区委員会等推進モデル事例",
        desc: "～夏休み企画～親子で楽しもう！えばごリアルクエスト",
        link: "https://www.seikatubunka.metro.tokyo.lg.jp/documents/d/seikatubunka/r4models",
        year: 2022
      },
      {
        tag: "書籍",
        title: "掲載：実践みんなの特別支援教育 2022年2月号にも掲載！",
        desc: "掲載：防災xキノコラリー かわせみ防災クエストの記事",
        link: "https://www.seikatubunka.metro.tokyo.lg.jp/documents/d/seikatubunka/r4models",
        year: 2022
      },
      {
        tag: "メディア",
        title: "タウンニュース今井南町自治会",
        desc: "掲載：防災クイズで意識向上",
        link: "https://www.townnews.co.jp/0204/2022/12/16/655754.html",
        year: 2022
      },
      {
        tag: "新聞",
        title: "2023/3/8の読売新聞朝刊",
        desc: "掲載：防災xキノコラリー かわせみ防災クエストの記事",
        link: "https://bousai-koushien.net/jusyoukou/archives/1885",
        year: 2023
      },
      {
        tag: "表彰",
        title: "「ぼうさい甲子園」優秀賞を受賞",
        desc: "かわせみ防災クエスト2022",
        link: "https://bousai-koushien.net/jusyoukou/archives/1885",
        year: 2023
      },
      {
        tag: "論文",
        title: "ゲーミフィケーションによる児童の情報モラル・リテラシー教育支援の提案",
        desc: "ゲーム学会「ゲームと健康科学」研究部会 / 下條公寛, 村瀬真琴, 後藤田中",
        link: "https://www.eng.kagawa-u.ac.jp/~hayashi/gas/GAS_Research_Report_2025.pdf",
        year: 2025
      }, {
        tag: "活動",
        title: "香川大学サイバー防犯ボランティアSETOKUとキノコラリー",
        desc: "「みらいワクワク！子供仕事体験フェスタin高松」でインターネットセキュリティ教室を開催",
        link: "https://www.kagawa-u.ac.jp/setoku17/",
        year: 2025
      },

      {
        tag: "論文",
        title: "ロールプレイ型イベントにおける設問設計を支援する プラットフォームの開発と評価",
        desc: "一般社団法人 教育システム情報学会 四国地区",
        link: "https://www.jsise.org/wp-content/uploads/2026/02/2025_shikoku_a10_h.pdf",
        year: 2026
      },
      {
        tag: "活動",
        title: "キノコラリーを活用したPBLで心理学部4年生のみなさん",
        desc: "第14回「実学の帝塚山大学」実践学生発表祭の様子",
        link: "https://www.tezukayama-u.ac.jp/faculty/psychology_welfare/news/2026/144/",
        year: 2026
      },
      {
        tag: "ポスター",
        title: "特別支援教育における共創型冒険学習デジタルスタンプラリーの構築",
        desc: "日本シミュレーション＆ゲーミング学会2026年度春期全国大会",
        link: "https://note.com/mashandroom/n/n2ecdef51639d",
        year: 2026
      }
    ]
  },
  {
    category: "Media, Talks & Lectures",
    icon: <Mic size={24} className="text-pink-500" />,
    items: [
      {
        tag: "Radio",
        title: "FMしながわ",
        desc: "マッシュ＆ルームの活動紹介 / 品川区広報情報番組 ほっとラジオしながわ",
        link: "https://mashandroom.org/report/2569",
        year: 2019
      },
      {
        tag: "Article",
        title: "ソフトバンクニュース「春休みPepperすごろくトライアル」",
        desc: "キノコ先生として出演。Pepperとmicro:bitを使ったプログラミングワークショップ。",
        link: "https://www.softbank.jp/sbnews/entry/20190405_01",
        year: 2019
      },
      {
        tag: "Event",
        title: "プログラミング教育セミナーONLINE",
        desc: "民間と現場に学ぶ、プログラミング教育のカリキュラム・マネジメントと授業づくり",
        link: "https://www.sobal.co.jp/about/newsrelease/news_20201211.html",
        year: 2020
      },
      {
        tag: "YouTube",
        title: "LINE Developer Community",
        desc: "たった30分でできる！サンタから毎日メッセージが届くLINE Botを作るチャレンジ",
        link: "https://www.youtube.com/live/rz5lw8pAGDI",
        year: 2020
      },
      {
        tag: "YouTube",
        title: "KINOKO QUEST ライブ",
        desc: "キノコクエスト - 荏原第五お家で地域くえすと",
        link: "https://www.youtube.com/live/WMGSqWOc2Mg",
        year: 2020
      },
      {
        tag: "YouTube",
        title: "Infra Study 2nd #8「エンジニアのアウトプット」",
        desc: "ハッカソンに参加してたらキノコになっちゃった",
        link: "https://www.youtube.com/live/EHb7bY1h7wM?t=6309s",
        year: 2021
      },
      {
        tag: "Radio",
        title: "東京FM「サステナ*デイズ」",
        desc: "ロールプレーイングゲームを使った防災教育「かわせみ防災クエスト」",
        link: "https://www.tfm.co.jp/solution/index.php?catid=4030&itemid=186468",
        year: 2022
      },
      {
        tag: "YouTube",
        title: "ChatGPT Meetup Tokyo #3",
        desc: "かまいたちの夜っぽいのを作ってみたら何かそれっぽくなった",
        link: "https://www.youtube.com/live/-BbF_H-mDWg?si=-jxx66lRbUMaE1IT&t=4338",
        year: 2023
      },
      {
        tag: "Event",
        title: "2025年度第7回S.E.N.S年次大会 in 長野",
        desc: "講座8 ICT活用「支援学級での活用体験」講師",
        year: 2025
      },
      {
        tag: "YouTube",
        title: "【大阪・関西万国博覧会】ミライキッズラボ Day2",
        desc: "2025年8月1日、大阪・関西万博にて開催された「ミライキッズラボ」に登壇。",
        link: "https://www.youtube.com/live/w4PURqws7kM?si=flD5wNHetzQstY4-&t=10784",
        year: 2025
      },
      {
        tag: "Lecture",
        title: "宮城学院女子大学「ビジネスレディネス」ゲスト講演",
        desc: "「ビジネスと情報技術」をテーマに、現代ビジネス学部の学生に向けて講義を担当",
        link: "https://note.com/mashandroom/n/n4664d4a1892e",
        year: 2026
      }
    ]
  }
];

export const careerData: Record<string, CareerTab> = {
  public: {
    title: "Public / Work",
    icon: <Briefcase size={20} />,
    color: "bg-blue-100 text-blue-600",
    content: [
      {
        title: "Development & Engineering",
        description: "プリンタドライバ、iOSアプリ、Webフロントエンド〜バックエンドまで幅広く開発。AWSインフラ構築。",
        tech: ["C", "C++", "Java", "Swift", "TypeScript", "Angular", "Vue.js", "React", "Next.js", "AWS", "PostgreSQL", "ブロックチェーン", "Solidity",]
      },
      {
        title: "Business & Education",
        description: "新規事業開発、IT/ICTと教育を軸にした学校・自治体向けセミナーやアプリ企画・開発。",
        details: [
          { text: "教育関係者向けイベント共催", link: "https://www.sobal.co.jp/about/newsrelease/news_20201211.html" },
          { text: "プログラミング教育セミナー講師" },
          { text: "学校や自治体向けのアプリ企画、開発" }
        ]
      },
      {
        title: "Mentorship & Training",
        description: "採用支援、次世代エンジニアの育成に注力。",
        details: [
          { text: "インターンシップ講師 (500名以上)" },
          { text: "新卒社員開発研修講師 (150名以上)" },
          { text: "社内ハッカソン・勉強会企画運営", link: "https://www.sobal.co.jp/ir/irnews_2025_0210.html" },
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
        description: "大学生の頃『my life』を聴いてどっぷりハマる。IT業界に入ったきっかけも、趣味で作ったミスチルのファンサイト。"
      },
      {
        title: "Baseball",
        description: "小学校や高校時代のメンバーでチームを作り、20年近く活動中。"
      },
      {
        title: "Gym & Cafe",
        description: "引っ越しの条件は「近くにジムとカフェがあること」になるっぽい。"
      }
    ]
  },
  social: {
    title: "Social / Kinoko",
    icon: <Globe size={20} />,
    color: "bg-green-100 text-green-600",
    content: [
      {
        title: "Mash & Room Activities",
        description: "任意団体マッシュ＆ルーム代表。ちょっとのITとICTを使ってちょっとの笑顔とワクワクをお届け！をモットーに、キノコ活動に勤しむ日々。",
        details: [
          { text: "団体サイト", link: "https://mashandroom.org/" }
        ]
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
        description: "キャリアコンサルタントとして、小中高大のキャリア教育や地域・PTAでのICT活用支援に関わる。"
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
          { text: "SPAJAM（東京予選入賞）", link: "https://mashandroom.org/report/205/" },
          { text: "禅Hack", link: "https://mashandroom.org/report/214/" },
          { text: "Music Hack Day Tokyo（ローランド賞）", link: "https://mashandroom.org/report/219/" },
          { text: "超特大ペッパソン（Pepper賞）", link: "https://mashandroom.org/report/230/" }
        ]
      },
      {
        title: "2016",
        details: [
          { text: "Webと車のハッカソン", link: "https://mashandroom.org/report/246/" },
          { text: "Yahoo Hack Day", link: "https://mashandroom.org/report/256/" },
          { text: "Space Apps Challenge", link: "https://mashandroom.org/report/261/" },
          { text: "MIZUHO.HACK（Pepper賞）", link: "https://mashandroom.org/report/272/" },
          { text: "NTTドコモｘTBS TVHACKDAY（myThings賞）", link: "https://mashandroom.org/report/282/" },
          { text: "Facebook Messenger ハッカソン（IBM賞）", link: "https://mashandroom.org/report/285/" },
          { text: "特大ペッパソン", link: "https://mashandroom.org/report/288/" }
        ]
      },
      {
        title: "2017",
        details: [
          { text: "Space Apps Challenge（ヤフー賞）", link: "https://mashandroom.org/report/336/" },
          { text: "ペッパソン東の陣（SONY賞）", link: "https://mashandroom.org/report/681/" },
          { text: "ハママチューン（グランプリ）", link: "https://mashandroom.org/report/897/" }
        ]
      },
      {
        title: "2018",
        details: [
          { text: "SPAJAM", link: "https://mashandroom.org/report/1135/" },
          { text: "RIZAPｘベルマーレハッカソン（最優秀賞）", link: "https://mashandroom.org/report/1306/" },
          { text: "LINE BOOT AWARDSハッカソン", link: "https://mashandroom.org/report/1349/" }
        ]
      },
      {
        title: "2019",
        details: [
          { text: "Alexaスキルアワードハッカソン 東京", link: "https://mashandroom.org/report/1832/" }
        ]
      },
      {
        title: "2023",
        details: [
          { text: "SPAJAM", link: "https://mashandroom.org/report/4235/" }
        ]
      },
      {
        title: "2026",
        details: [
          { text: "全日本AIハッカソン 2026 1stラウンド（東京会場）", link: "https://note.com/mashandroom/n/n3d40a56bfb09" },
          { text: "ブラッカソン", link: "https://note.com/mashandroom/n/n2098acd77390" }
        ]
      }
    ]
  }
};

export const qualifications: QualificationGroup[] = [
  {
    category: "IT & Engineering",
    icon: <Cpu size={24} className="text-blue-500" />,
    items: [
      // Information Technology & Management
      { name: "基本情報処理技術者" },
      { name: "ソフトウェア開発技術者" },
      { name: "データベーススペシャリスト" },
      { name: "プロジェクトマネージャー" },
      { name: "JSSC 統計検定3級" },

      // AI & Data Science
      { name: "G検定2020#1", link: "https://www.openbadge-global.com/ns/portal/openbadge/public/assertions/user/eTZHWnpTL21RakloMjRmQnBtS3oxUT09" },
      { name: "Generative AI Test 2025#1", link: "https://www.openbadge-global.com/ns/portal/openbadge/public/assertions/detail/Z3JkaHhPcnJ1QzFEZndHV25XS3NmUT09" },
      { name: "生成AIパスポート", link: "https://www.openbadge-global.com/api/v1.0/openBadge/v2/Wallet/Public/GetAssertionShare/YU91cXhPdVNGeFdCbDFrcU1QL0FSUT09" },

      // Vendor Certifications (Oracle, XML, JSTQB, Android)
      { name: "Oracle認定Javaプログラマ Gold SE8" },
      { name: "Android技術者認定試験アプリケーション(ベーシック)" },
      { name: "XMLマスターベーシック" },
      { name: "XMLマスタープロフェッショナル" },
      { name: "JSTQB認定テスト技術者資格 Foundation Level" },

      // AWS
      { name: "AWS 認定 12冠達成 ('21〜'23)", link: "https://www.line-community.me/ja/evangelist/h2m_kinoko" },
      { name: "AWS Certified SysOps Administrator – Associate", link: "https://www.credly.com/users/h2m_kinoko/badges" },
      { name: "AWS Certified Solutions Architect – Associate", link: "https://www.credly.com/users/h2m_kinoko/badges" },
      { name: "AWS Certified Developer – Associate", link: "https://www.credly.com/users/h2m_kinoko/badges" },
      { name: "AWS Certified Solutions Architect – Professional", link: "https://www.credly.com/users/h2m_kinoko/badges" },
      { name: "AWS Certified Security – Specialty", link: "https://www.credly.com/users/h2m_kinoko/badges" },
      { name: "AWS Certified Machine Learning – Specialty", link: "https://www.credly.com/users/h2m_kinoko/badges" },
      { name: "AWS Certified Advanced Networking – Specialty", link: "https://www.credly.com/users/h2m_kinoko/badges" },
      { name: "AWS Certified Database – Specialty", link: "https://www.credly.com/users/h2m_kinoko/badges" },
      { name: "AWS Certified DevOps Engineer – Professional", link: "https://www.credly.com/users/h2m_kinoko/badges" },
      { name: "AWS Certified Data Analytics - Specialty", link: "https://www.credly.com/users/h2m_kinoko/badges" },
      { name: "AWS Certified Cloud Practitioner", link: "https://www.credly.com/users/h2m_kinoko/badges" },
      { name: "AWS Certified: SAP on AWS – Specialty", link: "https://www.credly.com/users/h2m_kinoko/badges" },
      { name: "AWS Certified Data Engineer – Associate", link: "https://www.credly.com/badges/38b9c790-b3f7-4618-b228-ace86f11dde4" },
      { name: "AWS Certified AI Practitioner", link: "https://www.credly.com/earner/earned/badge/afd48d58-b668-4456-bfd5-aa695d50ef91" },
      { name: "AWS Certified Machine Learning Engineer – Associate", link: "https://www.credly.com/users/h2m_kinoko/badges" },

      // Google & Microsoft
      { name: "Google Cloud Certified Associate Cloud Engineer", link: "https://www.credential.net/e480a467-3f9e-478f-b94c-616c9731f220" },
      { name: "Microsoft Certified: Azure Fundamentals", link: "https://www.credly.com/badges/86cf6883-de06-4cf1-8d74-c69191eb9be3" },
    ]
  },
  {
    category: "Education & Career",
    icon: <BookOpen size={24} className="text-green-500" />,
    items: [
      { name: "国家資格キャリアコンサルタント" },
      { name: "ICT支援員" },
      { name: "情報教育化コーディネータ3級" },
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
  }
];

export const activities: QualificationGroup[] = [
  {
    category: "Social Activities",
    icon: <Sparkles size={24} className="text-purple-500" />,
    items: [
      { name: "任意団体マッシュ＆ルーム代表 ('15〜)", link: "https://mashandroom.org/" },
      { name: "SDGs de 地方創生公認ファシリテーター", link: "https://sdgslocal.jp/facilitator/#murasekinoko" },
      { name: "Softbank Robotics公認Pepperコミュニティリーダー ('19〜'22)", link: "https://www.softbankrobotics.com/jp/news/info/20240524a/" },
      { name: "Softbank Robotics公認Pepperアンバサダー ('22〜)", link: "https://www.softbankrobotics.com/jp/news/info/20240524a/" },
      { name: "LINE API Expert ('22〜)", link: "https://www.line-community.me/ja/apiexpert/detail/61e4313569e9a522434aa056" },
      { name: "ICTリハビリテーション研究会 理事 (〜'23)" },
      { name: "CoderDojo武蔵小杉 運営/共同チャンピオン (〜'23)" },
      { name: "micro:bit champion ('25〜)", link: "https://note.com/microbitchampsjp/n/n8e9a01305023" },
      { name: "香川大学客員研究員 ('25〜)「キノコラリーなどを活用したゲーミフィケーションを用いた情報リテラシー教育支援、アセスメント」", link: "https://researchmap.jp/kinoko" },
    ]
  },
  {
    category: "IT Support & Advisor",
    icon: <Monitor size={24} className="text-cyan-500" />,
    items: [
      { name: "長野県教育委員会特別支援教育ICTインクルーシブ協議会 ICTアドバイザー (〜'23)", link: "https://mashandroom.org/?s=%E3%82%A4%E3%83%B3%E3%82%AF%E3%83%AB" },
      { name: "ICTインクルーシブ教育フェスティバル2023 プロデュース・運営（信州大学 ✕ 長野県教育委員会）", link: "https://sites.google.com/g.nagano-c.ed.jp/ict-inclusive-nagano-fes" },
      { name: "キノコ式！特別支援学校など子どもたちや先生向けのICT /プログラミングサポート", link: "https://mashandroom.org/category/report/kinoko-style/" },
      { name: "日本ペアレントトレーニング研究会 オンライン開催技術サポート", link: "https://parent-training.jp/" },
      { name: "S.E.N.Sの会 福島支部研修会 Zoomオンライン事務局サポート" },
      { name: "特定非営利活動法人ライフキャリア・サポート協会 HP運営・広報＆IT技術サポート", link: "https://lifecareer-sa.org/" }
    ]
  }
];
