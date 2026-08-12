"use client";

import { useState } from "react";

const nav = [
  ["센터소개", "센터 안내", "시설 현황", "주요 업무", "오시는 길"],
  ["이용안내", "이용 방법", "제조 공정", "준수 사항"],
  ["가공예약", "예약 신청", "예약 확인", "시설 사용료"],
  ["소식마당", "공지사항", "교육 안내", "자주 묻는 질문"],
];

const facilityRows = [
  ["이용시간", "평일 09:00 — 18:00  ·  주말 및 공휴일 휴관"],
  ["이용대상", "관내 농업인 및 농업법인 / 식품 제조·유통 관련 허가 사업자"],
  ["예약안내", "이용 희망일 전월 지정 기간에 온라인 예약 (전화 예약 불가)"],
];

const guideRows = [
  ["필수 서류", "건강진단결과서(보건증), 시설·장비 사용 신청서, 가공 동의서"],
  ["가공 원료", "지역에서 직접 재배한 농산물을 원칙으로 하며 입고 전 품질을 확인합니다."],
  ["원료 검사", "중금속·잔류농약 검사를 가공 전에 완료해 주세요. 검사에는 2주 이상 소요될 수 있습니다."],
  ["제품 검사", "품목별 검사 주기와 기준에 따라 시험성적서 발급 후 유통할 수 있습니다."],
  ["품목 등록", "사전 상담 → 시제품 생산 → 성분·유통기한 검사 → 품목제조보고 → 바코드 발행 순으로 진행됩니다."],
];

function LeafMark() {
  return <span className="leaf-mark" aria-hidden="true"><i /><i /><b /></span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <div className="utility"><div className="wrap"><a href="#footer">양구군 농업기술센터</a><span>로그인</span><span>예약확인</span></div></div>
        <div className="header-main wrap">
          <a className="brand" href="#top" aria-label="홈으로"><LeafMark /><span><small>YANGGU AGRI-FOOD</small>양구 농산물 가공지원센터</span></a>
          <nav className="desktop-nav" aria-label="주 메뉴">
            {nav.map(([title, ...items]) => <div className="nav-group" key={title}><button>{title}</button><div className="dropdown">{items.map(item => <a key={item} href={`#${item.replaceAll(" ", "-")}`}>{item}</a>)}</div></div>)}
          </nav>
          <button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-expanded={menuOpen} aria-label="전체 메뉴"><span /><span /><span /></button>
        </div>
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {nav.map(([title, ...items]) => <section key={title}><h3>{title}</h3>{items.map(item => <a onClick={() => setMenuOpen(false)} key={item} href={`#${item.replaceAll(" ", "-")}`}>{item}</a>)}</section>)}
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
        <div className="wrap hero-copy"><p>농업의 가능성을 제품으로</p><h1>더 좋은 가공,<br />더 큰 <em>농가의 내일</em></h1><span>안전하고 믿을 수 있는 농산물 가공을 함께 시작합니다.</span></div>
      </section>

      <section className="quick wrap" aria-label="주요 서비스">
        <a className="quick-card" href="#이용-방법"><span className="line-icon sprout">♧</span><div><small>GUIDE 01</small><h2>이용 방법</h2><p>처음 방문하셨나요?<br />시설 이용 절차를 확인하세요.</p></div><b>→</b></a>
        <a className="quick-card featured" href="#예약"><span className="line-icon">⌑</span><div><small>RESERVATION</small><h2>가공 예약</h2><p>원하는 시설과 날짜를<br />간편하게 예약하세요.</p></div><b>→</b></a>
        <a className="quick-card" href="#공지"><span className="line-icon">◌</span><div><small>NOTICE</small><h2>교육·소식</h2><p>새로운 교육 일정과<br />센터 소식을 만나보세요.</p></div><b>→</b></a>
      </section>

      <section className="content wrap" id="이용-방법">
        <div className="breadcrumb"><a href="#top">HOME</a><span>›</span><span>이용안내</span><span>›</span><strong>이용 방법</strong></div>
        <div className="title-row"><div><p>FACILITY GUIDE</p><h2>시설 이용 안내</h2></div><span>이용 전 운영시간과 예약 일정을 꼭 확인해 주세요.</span></div>
        <div className="info-table" role="table" aria-label="시설 이용 안내">{facilityRows.map(([label, value]) => <div className="table-row" role="row" key={label}><strong role="rowheader">{label}</strong><p role="cell">{value}</p></div>)}</div>

        <div className="guide-layout">
          <aside><p>PROCESS</p><h2>이용 방법</h2><span>준비부터 제품화까지<br />센터가 함께합니다.</span><a href="#예약">온라인 예약하기 <b>↗</b></a></aside>
          <div className="guide-list">{guideRows.map(([label, value], i) => <article key={label}><span>{String(i + 1).padStart(2, "0")}</span><h3>{label}</h3><p>{value}</p></article>)}</div>
        </div>

        <section className="cta" id="예약"><div><small>ONLINE RESERVATION</small><h2>가공 시설을 이용할 준비가 되셨나요?</h2><p>예약 가능 일정을 확인하고 온라인으로 신청해 주세요.</p></div><button onClick={() => alert("예약 신청 화면은 실제 예약 시스템과 연결해 사용할 수 있습니다.")}>예약 신청하기 <span>→</span></button></section>
      </section>

      <footer id="footer"><div className="wrap footer-grid"><div className="footer-brand"><LeafMark /><b>양구 농산물<br />가공지원센터</b></div><div><nav><a href="#top">센터소개</a><a href="#top">개인정보 처리방침</a><a href="#top">이메일 무단수집거부</a><a href="#top">저작권 정책</a></nav><p>본점  강원특별자치도 양구군 국토정중앙면 양남로 319-45  ·  T. 033-480-7765<br />해안점  강원특별자치도 양구군 해안면 만대로 214  ·  T. 033-481-7762</p><small>© YANGGU AGRI-FOOD SUPPORT CENTER. ALL RIGHTS RESERVED.</small></div></div></footer>
    </main>
  );
}
