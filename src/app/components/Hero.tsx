import Link from "next/link";
import { SITE } from "@/lib/site";
import { imageUrl } from "@/lib/images";

const HERO_VIDEO_SRC = "/videos/hero.mp4";

export default function Hero() {
  const poster = imageUrl(5);

  return (
    <section className="haram-hero">
      <video
        className="haram-hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
        aria-hidden
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="haram-hero-scrim" aria-hidden />

      <div className="haram-hero-content">
        <div className="haram-hero-inner">
          <span className="haram-hero-badge">HARAM SHELTER</span>
          <h1 className="haram-hero-title">
            {SITE.brand}
            <em>버려지는 반려동물 Zero</em>
          </h1>
          <p className="haram-hero-desc">
            <span>좋은 가족을 찾아주는 책임 분양, 아이가 안락하고 행복한 생활을 이어가도록.</span>
            <span>키우기 어려울 때 포기하지 말고 {SITE.brand}에 문의하세요.</span>
          </p>
          <Link href="/#surrender" className="haram-hero-cta">
            파양입소 · 무료분양 상담
          </Link>
        </div>
      </div>
    </section>
  );
}
