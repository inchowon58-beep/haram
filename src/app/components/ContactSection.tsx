import { SITE } from "@/lib/site";

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.6 3.6l3 1.4-1 3.4a12 12 0 0 0 6.9 6.9l3.4-1 1.4 3a2 2 0 0 1-1.4 2.6 15.5 15.5 0 0 1-16.9-16.9 2 2 0 0 1 2.6-1.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="haram-section haram-contact-cta">
      <div className="haram-container haram-contact-inner">
        <div>
          <p className="haram-contact-eyebrow">365일 상담 가능</p>
          <h2 className="haram-contact-title">
            파양입소 · 무료분양 문의
          </h2>
          <p className="haram-contact-desc">
            신청서 없이 전화 한 통이면 충분합니다. 전국 어디서나 {SITE.brand}가 안내합니다.
          </p>
        </div>
        <a href={SITE.phoneTel} className="haram-contact-btn">
          <PhoneIcon />
          {SITE.phone}
        </a>
      </div>
    </section>
  );
}
