"use client";

import Link from "next/link";
import { buildQrApiUrl, getFullCardUrl } from "../../lib/card";

export default function Step4Share({ cardUrl }) {
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
    </div>
  );
}
