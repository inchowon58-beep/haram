"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";

const NAV = [
  { href: "/#about", label: "이래서 하람" },
  { href: "/#why", label: "반드시 하람" },
  { href: "/#surrender", label: "파양입소" },
  { href: "/#gallery", label: "무료분양" },
  { href: "/#guide", label: "이용안내" },
  { href: "/#articles", label: "안내글" },
] as const;

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className="haram-phone-icon"
    >
      <path d="M6.62 10.79a15.15 15.15 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
    </svg>
  );
}

function BurgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="haram-header">
      <div className="haram-header-inner">
        <Link href="/" className="haram-logo" onClick={() => setOpen(false)}>
          <Image
            src={SITE.logo}
            alt={`${SITE.brand} 로고`}
            width={80}
            height={80}
            priority
            className="haram-logo-img"
          />
          <span className="haram-logo-text">{SITE.brand}</span>
        </Link>

        <nav className="haram-nav">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="haram-header-btns">
          <Link href="/#surrender" className="haram-btn-outline">
            입소상담
          </Link>
          <a href={SITE.phoneTel} className="haram-btn-filled">
            <PhoneIcon />
            {SITE.phone}
          </a>
        </div>

        <button
          type="button"
          className="haram-menu-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
        >
          <BurgerIcon />
        </button>
      </div>

      <div className={`haram-mobile-menu ${open ? "open" : ""}`}>
        <button
          type="button"
          className="haram-mobile-close"
          onClick={() => setOpen(false)}
          aria-label="메뉴 닫기"
        >
          <CloseIcon />
        </button>
        <nav className="haram-mobile-nav">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="haram-mobile-btns">
          <Link href="/#surrender" className="haram-btn-outline" onClick={() => setOpen(false)}>
            입소상담
          </Link>
          <a href={SITE.phoneTel} className="haram-btn-filled" onClick={() => setOpen(false)}>
            <PhoneIcon />
            {SITE.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
