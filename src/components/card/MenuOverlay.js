"use client";

import { buildQrApiUrl } from "../../lib/card";
import MenuItem from "./MenuItem";

export default function MenuOverlay({ isOpen, onClose, cardUrl }) {
  const handleDownloadQr = async () => {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const qrApiUrl = buildQrApiUrl(cardUrl, origin);

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
      onClose();
    } catch (error) {
      console.error(error);
      alert("QRコードのダウンロードに失敗しました");
    }
  };

  const editUrl = cardUrl.replace(/^\/card/, "/new");

  const menuItems = [
    {
      href: "/new",
      title: "New Card",
      description: "新しく名刺を作成する",
      target: "_self",
    },
    {
      action: handleDownloadQr,
      title: "Create QR",
      description: "この名刺のQRコードを保存する",
    },
    {
      href: editUrl,
      title: "Edit Data",
      description: "名刺を編集する",
      target: "_self",
    },
  ];

  return (
    <div
      className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#F4F0EA] px-8 transition-all duration-500 ease-in-out ${
        isOpen
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "-translate-y-[10px] pointer-events-none opacity-0"
      }`}
    >
      <div className="w-full max-w-sm space-y-12">
        <div className="text-center">
          <h2
            className="mb-2 text-2xl font-light tracking-[0.2em] text-stone-700"
            style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
          >
            MENU
          </h2>
          <div className="mx-auto h-px w-8 bg-stone-300/60" />
        </div>

        <nav className="flex flex-col space-y-6">
          {menuItems.map((item) => (
            <MenuItem key={item.title} item={item} onClose={onClose} />
          ))}
        </nav>
      </div>
    </div>
  );
}
