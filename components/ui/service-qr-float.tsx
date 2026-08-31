"use client";

import { useState } from "react";
import { Headphones, X } from "lucide-react";
import { FakeQr } from "@/components/ui/fake-qr";

/* 企业微信客服悬浮二维码：右下角常驻，悬停/点击展开扫码面板 */
export function ServiceQrFloat() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
      onMouseLeave={() => setOpen(false)}
    >
      {/* 扫码面板 */}
      <div
        className={`origin-bottom-right overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-pop)] transition-all duration-300 ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-2 scale-95 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between gap-6 bg-[linear-gradient(135deg,#f7842e,#d2560e)] px-4 py-3 text-white">
          <div className="flex items-center gap-2">
            <Headphones size={16} />
            <span className="text-[13.5px] font-bold">企业微信客服</span>
          </div>
          <button
            type="button"
            aria-label="关闭客服二维码"
            onClick={() => setOpen(false)}
            className="grid h-6 w-6 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/20 hover:text-white"
          >
            <X size={15} />
          </button>
        </div>
        <div className="flex flex-col items-center px-5 pb-5 pt-4">
          <FakeQr seed="fansheng-wecom-service" size={168} />
          <p className="mt-3 text-[13px] font-semibold text-fg">微信扫码，添加专属客服</p>
          <p className="mt-1 text-[12px] text-muted">7×24 小时在线 · 充值 / 开票 / 售后</p>
        </div>
      </div>

      {/* 悬浮按钮 */}
      <button
        type="button"
        aria-label="联系企业微信客服"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="group flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#f7842e,#d2560e)] px-4 py-3.5 text-white shadow-[var(--shadow-glow)] transition-transform duration-200 hover:-translate-y-0.5"
      >
        <Headphones size={22} />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-[14px] font-bold opacity-0 transition-all duration-300 group-hover:max-w-[96px] group-hover:opacity-100">
          在线客服
        </span>
      </button>
    </div>
  );
}
