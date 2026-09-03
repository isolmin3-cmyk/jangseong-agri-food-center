"use client";

import { useState } from "react";

export function ReservationCheckForm() {
  const [message, setMessage] = useState("");

  return (
    <form className="check-form" onSubmit={(e) => e.preventDefault()}>
      <label>예약자명<input placeholder="예약자 이름" /></label>
      <label>연락처<input placeholder="010-0000-0000" /></label>
      <button
        type="button"
        onClick={() => setMessage("입력하신 정보로 등록된 예약 내역을 찾을 수 없습니다. 예약자명과 연락처를 다시 확인해 주세요.")}
      >
        예약 조회
      </button>
      {message && <p className="reservation-message">{message}</p>}
    </form>
  );
}

export function ReservationBranchCards() {
  const [submitted, setSubmitted] = useState<"processing" | "education" | null>(null);

  return (
    <div className="branch-cards">
      <article>
        <small>PROCESSING CENTER</small>
        <h3>가공센터</h3>
        <p>과채주스 · 액상차 · 잼류 · 분말류</p>
        <span>전월 지정 예약기간 접수</span>
        <button type="button" onClick={() => setSubmitted("processing")}>예약하기 →</button>
        {submitted === "processing" && (
          <p className="reservation-message">예약 신청이 접수되었습니다. 담당자 확인 후 연락드리겠습니다.</p>
        )}
      </article>
      <article>
        <small>EDUCATION FACILITY</small>
        <h3>교육·실습실</h3>
        <p>가공창업 교육 · 시제품 실습</p>
        <span>교육 일정에 따라 접수</span>
        <button type="button" onClick={() => setSubmitted("education")}>예약하기 →</button>
        {submitted === "education" && (
          <p className="reservation-message">예약 신청이 접수되었습니다. 담당자 확인 후 연락드리겠습니다.</p>
        )}
      </article>
    </div>
  );
}
