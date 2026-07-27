import type { ReactNode } from "react";
import { SITE } from "@/lib/site";

function IconHome() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4.5 10.8 12 4.5l7.5 6.3V19a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19v-8.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMeet() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="9" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="10.5" r="2.6" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3.8 18.5c.7-2.6 2.8-4 5.2-4s4.5 1.4 5.2 4M13.2 15.2c1.1-.5 2.4-.6 3.7.1 1.5.8 2.5 2.3 2.9 4.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconPhoto() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="9" cy="11" r="2.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12.5 15.5 15 13l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3.5 19 6.2v5.3c0 4.4-2.9 7.6-7 9-4.1-1.4-7-4.6-7-9V6.2L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="m9.2 12 1.9 1.9 3.7-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPark() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 20V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M12 12c-2.8-3.2-6.5-3.5-8-1.6-1.3 1.7.1 4.4 3.2 5.6C9.5 16.8 11.2 16 12 15.2c.8.8 2.5 1.6 4.8.8 3.1-1.2 4.5-3.9 3.2-5.6-1.5-1.9-5.2-1.6-8 1.6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const PROMISES: { title: string; desc: string; icon: ReactNode }[] = [
  {
    title: "안락한 생활",
    desc: "입소 후 산책·목욕·치료·놀이 등 편안하고 안정된 일상을 이어갑니다.",
    icon: <IconHome />,
  },
  {
    title: "상시 미팅 가능",
    desc: "보호 기간 중에도 아이와의 방문·미팅을 일정에 맞춰 조율합니다.",
    icon: <IconMeet />,
  },
  {
    title: "생활 사진 제공",
    desc: "입양·보호 이후에도 일정 기간 아이의 생활 근황을 공유합니다.",
    icon: <IconPhoto />,
  },
  {
    title: "끝까지 책임",
    desc: "혹여 재파양이 발생해도 다시 맡아 새 가족을 찾을 때까지 관리합니다.",
    icon: <IconShield />,
  },
  {
    title: "넓은 활동 공간",
    desc: "충분한 운동·교육·놀이 환경으로 활력과 심리적 안정을 돕습니다.",
    icon: <IconPark />,
  },
];

export default function About() {
  return (
    <section id="about" className="haram-section haram-section-alt">
      <div className="haram-container">
        <div className="haram-sec-header">
          <span className="haram-badge">이래서 하람보호소</span>
          <h2 className="haram-sec-title">
            아이의 안전과 행복에 초점을 맞춘
            <br />
            <em>책임 분양</em>을 약속합니다
          </h2>
          <p className="haram-sec-desc">
            {SITE.brand}는 전국 강아지 파양입소와 무료분양을 안내합니다. 깐깐한 상담과
            케어로, 아이가 정말로 좋아할 수 있는 안락한 생활과 좋은 가족을 연결합니다.
          </p>
        </div>

        <div className="haram-promise-list haram-promise-list-5">
          {PROMISES.map((item) => (
            <div key={item.title} className="haram-promise-item">
              <div className="haram-promise-icon">{item.icon}</div>
              <p className="haram-promise-title">{item.title}</p>
              <p className="haram-promise-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
