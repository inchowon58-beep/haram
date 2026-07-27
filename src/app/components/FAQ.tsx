"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";
import { HOME_FAQS } from "@/lib/faq-data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="haram-section">
      <div className="haram-container" style={{ maxWidth: "820px" }}>
        <div className="haram-sec-header">
          <span className="haram-badge">FAQ</span>
          <h2 className="haram-sec-title">
            자주 묻는 <em>질문</em>
          </h2>
          <p className="haram-sec-desc">
            강아지파양·무료분양에 대해 자주 묻는 질문입니다.{" "}
            <a href={SITE.phoneTel} style={{ color: "var(--color)", fontWeight: 700 }}>
              {SITE.phone}
            </a>
          </p>
        </div>

        <div className="haram-faq-list">
          {HOME_FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className="haram-faq-item">
                <button
                  type="button"
                  className="haram-faq-q"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                >
                  <span>{item.q}</span>
                  <span className="haram-faq-icon">{open ? "−" : "+"}</span>
                </button>
                {open && <div className="haram-faq-a">{item.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
