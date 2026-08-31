import Image from "next/image";

/**
 * 梵胜通信 品牌 LOGO（横向锁定形：低多边形地球图标 + 梵胜通信 + Fansheng Communication）。
 * 源图 1998×730，四周含约 6%（左右）/ 15%（上下）留白。
 * 盒子按内容比例 3.43:1 设定，配合 object-contain + scale 放大裁掉留白，使锁定形填满且清晰。
 */
export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`relative block h-9 w-[124px] overflow-hidden ${className}`}>
      <Image
        src="/images/logo-fansheng.png"
        alt="梵胜通信 Fansheng Communication"
        fill
        priority
        sizes="124px"
        className="scale-[1.43] object-contain object-center"
      />
    </span>
  );
}
