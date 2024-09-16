import HomeBanner from "@/components/Banners/HomeBanner";
import CompanyStats from "@/components/CompanyStats/CompanyStats";
import HomeServices from "@/components/Services/HomeServices";
import WhyUs from "@/components/whyUs/WhyUs";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({ params: { locale }, }: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);
  return (
    <main>
      <HomeBanner />
      <HomeServices />
      <WhyUs />
      <CompanyStats />
    </main>
  );
}
