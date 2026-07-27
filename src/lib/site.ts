/** 하람보호소 — 전국 강아지 파양입소 · 무료분양 보호소 사이트 공통 설정 */

export const SITE = {
  name: "하람보호소",
  nameEn: "Haram Shelter",
  brand: "하람보호소",
  brandEn: "Haram Shelter",
  tagline: "버려지는 반려동물 Zero, 책임 있는 새 가족 매칭",
  taglineEn: "Nationwide Dog Surrender & Free Adoption Shelter",
  description:
    "하람보호소는 전국 강아지 파양입소와 무료분양을 전문으로 안내하는 보호소입니다. 피치 못한 사정의 파양 상담부터 안심 분양·사후 케어까지 책임집니다. 문의 010-9906-4068.",
  keywords: [
    "강아지파양",
    "하람보호소",
    "강아지파양입소",
    "무료분양",
    "강아지무료분양",
    "유기견보호소",
    "강아지보호소",
    "전국파양입소",
    "강아지입양",
    "반려견파양",
    "강아지입소",
    "새가족매칭",
    "강아지분양",
    "유기견입양",
  ],
  phone: "010-9906-4068",
  phoneTel: "tel:01099064068",
  email: "",
  logo: "/logo.png",
  imageBase: "https://image.cattery.co.kr/dogboho",
  imageCount: 79,
  /** 전국파양입소 및 무료분양 — 특정 주소 없음 */
  areaServed: "대한민국 전국",
  /** 배포 도메인 — 실제 도메인 연결 시 수정 */
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://haram.agapet.co.kr",
} as const;

export const CTA_LABEL = "파양입소·무료분양 문의";
export const CTA_LABEL_CALL = "전화상담";
