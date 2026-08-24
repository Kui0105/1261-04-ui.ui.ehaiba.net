import Image from "next/image";

/**
 * 梵胜通信 品牌 LOGO。
 * 源图为方形且含较多留白，使用固定尺寸盒 + object-cover 居中裁掉上下留白，
 * 使横向锁定形（图标 + 梵胜通信 + Fansheng Communication）清晰呈现。
 */
export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`relative block h-9 w-[188px] overflow-hidden ${className}`}>
      <Image
        src="/images/logo-fansheng.png"
        alt="梵胜通信 Fansheng Communication"
        fill
        priority
        sizes="188px"
        className="scale-[1.9] object-contain object-center"
      />
    </span>
  );
}
