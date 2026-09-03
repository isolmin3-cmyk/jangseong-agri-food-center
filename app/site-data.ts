export type MenuItem = { label: string; href: string };
export type MenuGroup = { title: string; subtitle: string; items: MenuItem[] };

export const menus: MenuGroup[] = [
  { title: "가공센터 소개", subtitle: "센터를 소개합니다", items: [
    { label: "농산물가공센터란", href: "/about" }, { label: "시설현황", href: "/facilities" },
    { label: "업무소개", href: "/business" }, { label: "제조공정", href: "/process" },
    { label: "가공제품소개", href: "/products" }, { label: "찾아오시는 길", href: "/location" },
  ]},
  { title: "이용안내", subtitle: "시설 이용을 안내합니다", items: [
    { label: "이용방법", href: "/guide" }, { label: "법적사항", href: "/legal" },
  ]},
  { title: "가공예약", subtitle: "온라인으로 예약하세요", items: [
    { label: "예약신청", href: "/reservation" }, { label: "예약확인", href: "/reservation-check" }, { label: "가공사용료", href: "/fees" },
  ]},
  { title: "게시판", subtitle: "센터의 새 소식입니다", items: [
    { label: "공지사항", href: "/notices" }, { label: "교육안내", href: "/education" },
  ]},
];

export const allSlugs = menus.flatMap(g => g.items.map(i => i.href.slice(1)));

export const notices = [
  ["공지", "농산물가공센터 시설 이용 안내", "센터관리자", "2026-08-01", "126"],
  ["공지", "하반기 가공 장비 안전교육 참여자 모집", "센터관리자", "2026-07-18", "98"],
  ["공지", "성수기 가공 예약 운영계획 안내", "센터관리자", "2026-06-24", "211"],
  ["안내", "포장재 규격 및 단가 변경 안내", "센터관리자", "2026-05-09", "175"],
  ["안내", "농산물 가공 원료검사 신청 안내", "센터관리자", "2026-04-12", "143"],
];

export const products = ["블루베리잼", "딸기잼", "사과즙", "토마토즙", "토마토퓨레", "딸기블루베리잼", "사과잼"];

export type ProcessItem = {
  name: string;
  category: "잼류" | "음료" | "퓨레";
  images: string[];
  steps: string[];
};

export const processes: ProcessItem[] = [
  { name: "블루베리잼", category: "잼류", images: ["/process-images/blueberry-jam-01.jpg", "/process-images/blueberry-jam-02.jpg", "/process-images/blueberry-jam-03.jpg"], steps: ["원료입고", "세척·선별", "파쇄", "계량·혼합", "가열·농축", "충진", "후살균", "포장·출고"] },
  { name: "딸기잼", category: "잼류", images: ["/process-images/strawberry-jam-01.jpg", "/process-images/strawberry-jam-02.jpg", "/process-images/strawberry-jam-03.jpg"], steps: ["원료입고", "세척·선별", "파쇄", "계량·혼합", "가열·농축", "충진", "후살균", "포장·출고"] },
  { name: "사과즙", category: "음료", images: ["/process-images/apple-juice-01.jpg", "/process-images/apple-juice-02.jpg"], steps: ["원료입고", "세척·선별", "파쇄", "착즙", "여과", "살균", "충진", "포장·출고"] },
  { name: "토마토즙", category: "음료", images: ["/process-images/tomato-juice-01.jpg", "/process-images/tomato-juice-02.jpg", "/process-images/tomato-juice-03.jpg"], steps: ["원료입고", "세척·선별", "파쇄", "착즙", "여과", "살균", "충진", "포장·출고"] },
  { name: "토마토퓨레", category: "퓨레", images: ["/process-images/tomato-puree-01.jpg", "/process-images/tomato-puree-02.jpg", "/process-images/tomato-puree-03.jpg"], steps: ["원료입고", "세척·선별", "파쇄", "가열", "농축", "충진", "후살균", "포장·출고"] },
  { name: "딸기블루베리잼", category: "잼류", images: ["/process-images/strawberry-blueberry-jam-02.jpg", "/process-images/strawberry-blueberry-jam-03.jpg"], steps: ["원료입고", "세척·선별", "파쇄", "계량·혼합", "가열·농축", "충진", "후살균", "포장·출고"] },
  { name: "사과잼", category: "잼류", images: ["/process-images/apple-jam-02.jpg", "/process-images/apple-jam-03.jpg"], steps: ["원료입고", "세척·선별", "탈피·제심", "파쇄", "계량·혼합", "가열·농축", "충진", "포장·출고"] },
];
