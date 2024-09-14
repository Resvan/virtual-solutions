import HomeBanner from "@/components/Banners/HomeBanner";
import HomeServices from "@/components/Services/HomeServices";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";

export default function Home({ params: { locale }, }: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);
  return (
    <main>
      <HomeBanner />
      <HomeServices />
    </main>
  );
}
