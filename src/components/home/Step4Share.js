"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { buildQrApiUrl, getFullCardUrl } from "../../lib/card";

const FORM_ACTION =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd71lvI1f-10KFMDcgSa_BC-VyPKoziNswow-cPgccnAtz9pA/formResponse";

export default function Step4Share({ cardUrl }) {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const iframeRef = useRef(null);

  const handleCopyLink = () => {
    const fullUrl = getFullCardUrl(cardUrl, window.location.origin);

    navigator.clipboard
      .writeText(fullUrl)
      .then(() => {
        alert("リンクをコピーしました！");
      })
      .catch(() => {
        alert("コピーに失敗しました。");
      });
  };

  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const qrApiUrl = buildQrApiUrl(cardUrl, origin);

  const handleDownloadQr = async () => {
    try {
      const response = await fetch(qrApiUrl);
      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "digital-business-card-qr.png";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error(error);
      alert("QRコードの保存に失敗しました");
    }
  };

  const handleSurveySubmit = (e) => {
    if (!rating) {
      e.preventDefault();
      alert("評価を選択してください。");
      return;
    }
    setSubmitted(true);
  };

  const handleIframeLoad = () => {
    if (submitted) {
      alert("ご意見ありがとうございました！");
      setRating(0);
      setFeedback("");
      setSubmitted(false);
    }
  };

  const activeRating = hovered || rating;

  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-4">
      <div className="rounded-sm border border-[#EAEAEA] bg-[#FBFBFB] p-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={qrApiUrl} alt="QR Code" className="h-32 w-32 mix-blend-multiply" />
      </div>

      <p className="text-center text-[11px] leading-relaxed tracking-wider text-[#888]">
        あなたのデジタル名刺が完成しました。
        <br />
        以下のオプションから共有できます。
      </p>

      <div className="mt-4 flex w-full max-w-xs flex-col gap-3">
        <Link
          href={cardUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-sm bg-[#111] px-4 py-3 text-xs tracking-wider text-white transition-colors duration-300 hover:bg-[#333] outline-none"
        >
          <i className="fa-solid fa-arrow-up-right-from-square text-sm" />
          名刺ページを開く
        </Link>

        <button
          type="button"
          onClick={handleCopyLink}
          className="flex items-center justify-center gap-2 rounded-sm border border-[#EAEAEA] bg-white px-4 py-3 text-xs tracking-wider text-[#111] transition-colors duration-300 hover:bg-[#F5F5F5] outline-none"
        >
          <i className="fa-regular fa-copy text-sm" />
          リンクをコピー
        </button>

        <button
          type="button"
          onClick={handleDownloadQr}
          className="flex items-center justify-center gap-2 rounded-sm border border-[#EAEAEA] bg-white px-4 py-3 text-xs tracking-wider text-[#111] transition-colors duration-300 hover:bg-[#F5F5F5] outline-none"
        >
          <i className="fa-solid fa-download text-sm" />
          QRコードを保存
        </button>
      </div>

      <div className="mt-6 w-full max-w-xs border-t border-[#EAEAEA] pt-6">
        <form
          action={FORM_ACTION}
          method="POST"
          target="_survey_iframe"
          onSubmit={handleSurveySubmit}
          className="text-center"
        >
          <p className="mb-3 text-[10px] tracking-[0.15em] text-[#888]">
            このアプリを評価してください
          </p>

          <div className="mb-2 flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onMouseEnter={() => setHovered(star)}
                onMouseLeave={() => setHovered(0)}
                onClick={() => setRating(star)}
                className="focus:outline-none"
              >
                <svg
                  className={`h-6 w-6 fill-current transition-colors duration-150 ${
                    star <= activeRating ? "text-[#dbb058]" : "text-gray-200"
                  }`}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z" />
                </svg>
              </button>
            ))}
          </div>

          <input type="hidden" name="entry.1150686047" value={rating} />

          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: rating ? "300px" : "0", opacity: rating ? 1 : 0 }}
          >
            <div className="pt-4 text-left">
              <div className="mb-1.5 flex items-center justify-between px-0.5 text-[9px] tracking-[0.15em] text-[#888]">
                <span>ご意見・ご要望</span>
                <span className="rounded-[2px] bg-gray-100 px-1 py-0.5 text-gray-500">任意</span>
              </div>

              <textarea
                name="entry.23419975"
                rows={2}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="よろしければアプリの感想などをお聞かせください"
                className="w-full resize-none border border-[#EAEAEA] bg-white p-2.5 text-[10px] leading-relaxed text-[#333] placeholder-gray-300 shadow-sm focus:border-gray-400 focus:outline-none"
              />

              <input type="hidden" name="fvv" value="1" />
              <input type="hidden" name="pageHistory" value="0" />
              <input type="hidden" name="fbzx" value="2645311524770981630" />
              <input
                type="hidden"
                name="partialResponse"
                value='[null,null,"2645311524770981630"]'
              />

              <div className="mt-3 text-center">
                <button
                  type="submit"
                  className="px-8 py-2 bg-[#222] text-white text-[10px] tracking-[0.2em] transition-colors hover:bg-black active:scale-[0.98] focus:outline-none"
                >
                  送信する
                </button>
              </div>
            </div>
          </div>
        </form>

        <iframe
          ref={iframeRef}
          name="_survey_iframe"
          style={{ display: "none" }}
          onLoad={handleIframeLoad}
        />
      </div>
    </div>
  );
}
