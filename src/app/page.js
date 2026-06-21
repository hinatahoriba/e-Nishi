import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function LandingPage() {
  return (
    <div className="bg-appBg text-appText font-sans antialiased tracking-wider">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 sm:gap-3"
            aria-label="E-NISHI home"
          >
            <Image
              src="/icon.png"
              alt="E-NISHI icon"
              width={44}
              height={44}
              className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
              priority
            />
            <span className="h-8 sm:h-10 w-px bg-[#C7A86B]/70" aria-hidden="true" />
            <div className="flex items-baseline gap-2 sm:gap-3 text-[#222]">
              <span
                className="text-[1.6rem] leading-none tracking-[-0.06em] sm:text-[2.35rem]"
                style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
              >
                縁
              </span>
              <span className="text-[0.65rem] font-light tracking-[0.15em] sm:tracking-[0.34em] text-[#2A2A2A] sm:text-[0.74rem] md:text-[0.88rem]">
                E-NISHI
              </span>
            </div>
          </Link>
          <div>
            <Link
              href="/new"
              className="inline-block text-[10px] md:text-xs font-medium tracking-widest border border-appText px-4 py-2 md:px-6 md:py-2.5 rounded-sm hover:bg-appText hover:text-appCard transition-all duration-300 whitespace-nowrap"
            >
              試してみる
            </Link>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-8 md:space-y-10 order-2 lg:order-1">
            <ScrollReveal>
              <div className="space-y-6">
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-loose text-appText">
                  人と人との縁を、<br />もっと身近に。
                </h1>
                <div className="w-12 h-[1px] bg-appText/30 pt-2"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-3 text-appSub leading-relaxed text-sm md:text-base font-light">
                <p>プロフィールを一度登録するだけ。</p>
                <p>あとはQRコードを見せるだけで、その場でつながれます。</p>
                <p className="pt-4 font-normal text-appText">
                  「はじめまして」がもっと楽しくなる、新しいつながり方。
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="pt-6" id="create">
                <Link
                  href="/new"
                  className="inline-block bg-appText text-appCard px-8 py-3 md:px-10 md:py-4 text-xs md:text-sm tracking-widest font-medium rounded-sm hover:bg-appSub transition-all duration-300"
                >
                  今すぐ名刺を作成する ➔
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
            <ScrollReveal delay={300}>
              <Image
                src="/main.png"
                alt="メインビジュアル"
                width={600}
                height={600}
                className="w-full max-w-md lg:max-w-full rounded-sm shadow-sm"
                priority
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-appBorder/60 bg-appCard">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-8 md:space-y-12">
          <ScrollReveal>
            <div className="space-y-2">
              <p className="text-[10px] tracking-[0.3em] uppercase text-appSub font-medium">
                FEATURE
              </p>
              <h2 className="text-2xl md:text-3xl font-light tracking-wider">
                1秒でつながる「QR交換」
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="max-w-2xl mx-auto overflow-hidden rounded-sm aspect-video">
              <Image
                src="/scan.png"
                alt="QRコード読み取りイメージ"
                width={800}
                height={450}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="text-sm md:text-base text-appSub leading-relaxed font-light max-w-2xl mx-auto pt-4">
              相手に専用アプリのダウンロードや、面倒な会員登録を求める必要はありません。<br className="hidden md:inline" />
              スマートフォンの標準カメラであなたのQRコードを読み込むだけで、<br className="hidden md:inline" />
              いつでも、その場であなたのデジタル名刺が表示されます。
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-appBorder/60">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="text-center space-y-2 mb-12 md:mb-20">
              <p className="text-[10px] tracking-[0.3em] uppercase text-appSub font-medium">
                HOW IT WORKS
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-light tracking-wider">
                ご利用の流れ
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            <ScrollReveal delay={100} className="space-y-4 relative">
              <div className="flex items-center space-x-3 text-appSub">
                <span className="font-serif text-2xl font-light border-b border-appBorder pb-1 w-10">01</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-medium">基本情報の入力</h3>
                <p className="text-xs text-appSub font-light leading-relaxed">
                  氏名、所属、趣味、一言メッセージという名刺の基本情報を入力します。
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300} className="space-y-4 relative">
              <div className="flex items-center space-x-3 text-appSub">
                <span className="font-serif text-2xl font-light border-b border-appBorder pb-1 w-10">02</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-medium">名刺テンプレート選択</h3>
                <p className="text-xs text-appSub font-light leading-relaxed">
                  名刺テンプレートから好きなデザインを選択します。
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500} className="space-y-4 relative">
              <div className="flex items-center space-x-3 text-appSub">
                <span className="font-serif text-2xl font-light border-b border-appBorder pb-1 w-10">03</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-medium">SNSリンクの登録</h3>
                <p className="text-xs text-appSub font-light leading-relaxed">
                  LINEやInstagram、XなどのSNSリンクやポートフォリオサイトなど、リンクを1つにまとめることができます
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={600}>
            <div className="text-center pt-12 md:pt-20">
              <Link
                href="/new"
                className="inline-block bg-appText text-appCard px-8 py-3 md:px-12 md:py-4 text-xs tracking-widest font-medium rounded-sm hover:bg-appSub transition-all duration-300"
              >
                新しくデジタル名刺を作る
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
