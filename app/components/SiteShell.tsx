"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import brandLogo from "../../public/brand-logo.png";
import { menus } from "../site-data";

export function Logo({ header = false }: { header?: boolean }) { return <span className="site-logo">{header ? <span className="header-mark"><Image src={brandLogo} alt="" fill sizes="58px" priority/></span> : <span className="mark"><i/><i/><b/></span>}<span><small>JANGSEONG AGRI-FOOD</small>장성농산물가공센터</span></span>; }

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="header">
    <div className="topbar"><div className="container"><span>장성군 농업기술센터</span><div><Link href="/reservation-check">예약확인</Link><span>│</span><a href="#footer">사이트 안내</a></div></div></div>
    <div className="navrow container"><Link href="/" aria-label="홈"><Logo header/></Link>
      <nav className="gnb" aria-label="주 메뉴">{menus.map(g=><div className="gnb-group" key={g.title}><Link href={g.items[0].href}>{g.title}</Link><div>{g.items.map(i=><Link key={i.href} href={i.href}>{i.label}</Link>)}</div></div>)}</nav>
      <button className="hamburger" aria-label="전체 메뉴" aria-expanded={open} onClick={()=>setOpen(!open)}><i/><i/><i/></button>
    </div>
    <div className={`mobile-nav ${open?"show":""}`}>{menus.map(g=><section key={g.title}><h3>{g.title}</h3>{g.items.map(i=><Link onClick={()=>setOpen(false)} key={i.href} href={i.href}>{i.label}</Link>)}</section>)}</div>
  </header>;
}

export function Footer() { return <footer id="footer"><div className="container footer-inner"><Logo/><div><div className="footer-links"><Link href="/about">센터소개</Link><a href="#footer">개인정보 처리방침</a><a href="#footer">이메일 무단수집거부</a><a href="#footer">저작권 정책</a></div><p>전라남도 장성군 장성읍 일원 <span>│</span> 대표전화 061-000-0000 <span>│</span> 팩스 061-000-0001</p><small>※ 주소와 연락처는 실제 센터 정보로 교체해 주세요.</small><small>Copyright © Jangseong Agricultural Processing Center. All rights reserved.</small></div></div></footer>; }

export function Shell({children}:{children:React.ReactNode}) { return <><Header/>{children}<Footer/></>; }

export function SubHero({group}:{group:string}) { const item=menus.find(m=>m.title===group)??menus[0]; return <><section className="sub-hero"><div><h1>{item.title}</h1><p>자연과 사람, 농업의 가치를 함께 키우는 곳</p></div></section><nav className="sub-tabs">{item.items.map(i=><Link href={i.href} key={i.href}>{i.label}</Link>)}</nav></>; }

export function PageHead({group,title}:{group:string,title:string}) { return <><div className="breadcrumb"><Link href="/">HOME</Link><span>›</span><span>{group}</span><span>›</span><b>{title}</b></div><div className="page-title"><span>JANGSEONG AGRI-FOOD CENTER</span><h2>{title}</h2></div></>; }
