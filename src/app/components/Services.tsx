import Image from "next/image";
import { SITE } from "@/lib/site";
import { imageUrl } from "@/lib/images";

const SURRENDER_CARDS = [
  {
    title: "파양 입소 상담",
    tag: "입소 안내",
    image: 2,
    description:
      "이민·이사·건강·주거 문제 등 피치 못한 사정의 파양 입소를 전국 어디서나 전화로 상담합니다. 절차와 비용을 투명하게 안내합니다.",
  },
  {
    title: "안락한 보호 케어",
    tag: "생활·건강",
    image: 8,
    description:
      "입소 후 산책·목욕·식사·건강 확인 등 아이 중심의 일상을 이어갑니다. 필요한 경우 생활 사진도 공유합니다.",
  },
  {
    title: "책임 무료분양",
    tag: "새 가족 매칭",
    image: 12,
    description:
      "성향과 생활 환경을 고려한 책임 분양으로 좋은 가족을 연결합니다. 재파양 시에도 끝까지 다시 보호합니다.",
  },
] as const;

const STEPS = [
  {
    step: "01",
    title: "전화 상담",
    desc: "파양 입소 또는 무료분양 문의는 전화 한 통이면 충분합니다. 상황과 일정에 맞춰 안내합니다.",
  },
  {
    step: "02",
    title: "일정·이동 조율",
    desc: "전국 어디서나 방문 또는 담당자 방문 픽업 일정을 조율합니다.",
  },
  {
    step: "03",
    title: "입소·케어",
    desc: "입소 절차와 비용을 확인한 뒤, 안락한 보호 환경에서 케어를 시작합니다.",
  },
  {
    step: "04",
    title: "책임 분양 매칭",
    desc: "새 가족을 만날 때까지 무료분양 매칭과 사후 상담을 책임지고 지원합니다.",
  },
] as const;

export default function Services() {
  return (
    <section id="surrender" className="haram-section">
      <div className="haram-container">
        <div className="haram-sec-header">
          <span className="haram-badge">파양입소 · 무료분양</span>
          <h2 className="haram-sec-title">
            포기하지 마세요.
            <br />
            <em>안전한 다음 걸음</em>을 함께합니다
          </h2>
          <p className="haram-sec-desc">
            더 이상 함께하기 어려울 때, 전국 파양 입소부터 책임 분양까지 {SITE.brand}가
            안내합니다.
          </p>
        </div>

        <div className="haram-card-list">
          {SURRENDER_CARDS.map((card) => (
            <article key={card.title} className="haram-card">
              <div className="haram-card-thumb">
                <Image src={imageUrl(card.image)} alt={card.title} fill className="object-cover" />
                <span className="haram-card-badge">{card.tag}</span>
              </div>
              <div className="haram-card-info">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="haram-cta-row">
          <div>
            <p className="haram-cta-row-title">파양입소 · 무료분양 문의</p>
            <p className="haram-cta-row-desc">
              상담 신청서 없이 {SITE.phone} 전화만으로 안내드립니다.
            </p>
          </div>
          <a href={SITE.phoneTel} className="haram-btn-main">
            CALL {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export function GuideSection() {
  return (
    <section id="guide" className="haram-section haram-section-alt">
      <div className="haram-container">
        <div className="haram-sec-header">
          <span className="haram-badge">이용 안내</span>
          <h2 className="haram-sec-title">
            입소·분양 <em>4단계</em>
          </h2>
          <p className="haram-sec-desc">
            전국 파양 입소부터 새 가족 매칭까지, 간단한 4단계로 진행됩니다.
          </p>
        </div>

        <ol className="haram-step-list">
          {STEPS.map((step) => (
            <li key={step.step} className="haram-step-item">
              <span className="haram-step-num">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
