import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "./components/SiteShell";
import { notices, products } from "./site-data";
import blueberryJamImage from "../public/product-images/blueberry-jam.jpg";
import strawberryJamImage from "../public/product-images/strawberry-jam.jpg";
import appleJuiceImage from "../public/product-images/apple-juice.jpg";
import tomatoJuiceImage from "../public/product-images/tomato-juice.jpg";

const homeProductImages = [blueberryJamImage, strawberryJamImage, appleJuiceImage, tomatoJuiceImage];

export default function Home(){return <><Header/><main>
  <section className="home-hero"><div className="container hero-inner"><p>농촌은 생명, 농업은 미래</p><h1>장성의 건강한 농산물을<br/><strong>가치 있는 제품</strong>으로 만듭니다</h1><span>농업인의 아이디어가 안전한 먹거리와 새로운 소득이 되도록 함께합니다.</span><Link href="/about">센터 소개 보기 <b>→</b></Link></div></section>
  <section className="home-service container">
    <Link href="/about"><i>01</i><div><small>ABOUT CENTER</small><h2>농산물가공센터란?</h2><p>제품 개발부터 생산까지 농업인의 가공 창업을 지원합니다.</p></div><b>↗</b></Link>
    <Link href="/guide"><i>02</i><div><small>USER GUIDE</small><h2>센터 이용안내</h2><p>평일 09:00~18:00 · 공휴일 제외</p></div><b>↗</b></Link>
    <Link href="/reservation"><i>03</i><div><small>RESERVATION</small><h2>가공시설 온라인 예약</h2><p>시설별 일정을 확인하고 예약을 신청하세요.</p></div><b>↗</b></Link>
  </section>
  <section className="home-notice container"><div className="section-heading"><div><small>NEWS & NOTICE</small><h2>센터 소식</h2></div><Link href="/notices">전체보기 +</Link></div><div className="notice-cards">{notices.slice(0,3).map((n,i)=><Link href="/notices" key={i}><small>{n[0]}</small><h3>{n[1]}</h3><p>장성농산물가공센터의 새로운 소식과 이용 정보를 안내합니다.</p><time>{n[3]}</time></Link>)}</div></section>
  <section className="home-products"><div className="container"><div className="section-heading light"><div><small>OUR PRODUCTS</small><h2>가공제품 소개</h2></div><Link href="/products">전체보기 +</Link></div><div className="product-strip">{products.slice(0,4).map((p,i)=><Link href="/products" key={p}><span className="product-art product-art-image"><Image src={homeProductImages[i]} alt={`${p} 제품 이미지`} fill sizes="(max-width: 900px) 50vw, 25vw"/></span><h3>{p}</h3><p>장성의 농산물로 만든 가공제품</p></Link>)}</div></div></section>
  <section className="home-links container"><Link href="/business"><b>센터소개</b><span>주요업무와 지원사업 안내</span></Link><Link href="/education"><b>교육 프로그램</b><span>가공창업 교육 일정 안내</span></Link><Link href="/location"><b>오시는 길</b><span>장성농산물가공센터 위치 안내</span></Link></section>
</main><Footer/></>}
