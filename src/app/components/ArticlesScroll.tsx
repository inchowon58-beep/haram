import Link from "next/link";
import type { SeoPage } from "@/lib/seo-pages";
import { pagePath } from "@/lib/seo-pages";

const MAIN_PREVIEW = 5;

export default function ArticlesScroll({ pages }: { pages: SeoPage[] }) {
  const preview = pages.slice(0, MAIN_PREVIEW);

  if (!preview.length) {
    return (
      <section id="articles" className="haram-section haram-section-alt scroll-mt-28">
        <div className="haram-container">
          <div className="haram-sec-header align-left">
            <span className="haram-badge">Notice</span>
            <h2 className="haram-sec-title">
              <Link href="/guide">
                강아지 파양·분양 <em>안내글</em>
              </Link>
            </h2>
            <p className="haram-sec-desc">발행된 안내 글이 여기에 노출됩니다.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="articles" className="haram-section haram-section-alt scroll-mt-28">
      <div className="haram-container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="haram-sec-header align-left">
            <span className="haram-badge">Notice</span>
            <h2 className="haram-sec-title">
              <Link href="/guide">
                강아지 파양·분양 <em>안내글</em>
              </Link>
            </h2>
          </div>
          <Link href="/guide" className="haram-btn-outline shrink-0">
            전체 목록 보기 →
          </Link>
        </div>

        <div className="haram-news-list">
          {preview.map((p, i) => (
            <Link key={p.slug} href={pagePath(p.slug)} className="haram-news-item">
              <span className="haram-news-num">{String(i + 1).padStart(2, "0")}</span>
              <div className="min-w-0">
                <span className="haram-news-tag">{p.keyword}</span>
                <h3 className="haram-news-title">{p.h1}</h3>
                <p className="haram-news-desc line-clamp-2">{p.metaDescription}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
