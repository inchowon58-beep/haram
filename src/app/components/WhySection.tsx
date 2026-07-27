import { SITE } from "@/lib/site";

const RISKS = [
  {
    title: "그냥 버리실 경우",
    desc: "길에서 위험에 처하거나, 공공 보호소에서 보호 기간이 지나면 안락사 위기에 놓일 수 있습니다.",
  },
  {
    title: "개인 직거래로 넘기실 경우",
    desc: "출산·재분양·재유기 목적의 악용, 준비되지 않은 가정으로 갈 위험이 큽니다.",
  },
  {
    title: "검증되지 않은 소규모 시설에 맡기실 경우",
    desc: "과밀·합사·전염병·행방 불명 등 학대에 가까운 환경에 노출될 수 있습니다.",
  },
] as const;

/** 아이조아 '반드시' 섹션 참고 — 하람보호소 톤으로 재작성 */
export default function WhySection() {
  return (
    <section id="why" className="haram-section haram-why">
      <div className="haram-container">
        <div className="haram-sec-header">
          <span className="haram-badge">반드시 하람보호소</span>
          <h2 className="haram-sec-title">
            왜 <em>{SITE.brand}</em>여야 할까요?
          </h2>
          <p className="haram-sec-desc">
            아이를 그냥 버리거나, 개인 직거래·영세 시설에만 맡기면 아이에게
            이런 위험이 따를 수 있습니다.
          </p>
        </div>

        <div className="haram-why-grid">
          {RISKS.map((item, i) => (
            <article key={item.title} className="haram-why-card">
              <span className="haram-why-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>

        <div className="haram-why-note">
          <p>
            {SITE.brand}는 입소 상담부터 케어·무료분양 매칭·사후 관리까지
            <strong> 끝까지 책임</strong>집니다. 힘없는 아이의 남은 생은 보호자님의
            선택에 달려 있습니다.
          </p>
          <a href={SITE.phoneTel} className="haram-btn-main">
            지금 상담 {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
