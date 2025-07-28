// src/app/page.tsx

import Footer from "@/components/footer";
import Logo from "@/components/logo";
import SocialHeader from "@/components/social-header";
import { SocialLinks } from "@/components/social-links";

export default function HomePage() {
  return (
    <main className="grid grid-rows-[auto_auto_1fr_auto] h-full min-h-screen bg-[url('/animated-wave.svg')] bg-cover bg-no-repeat bg-sky-100 bg-[center_bottom] ">
      <Logo />
      <SocialHeader lang="ar" />
      <SocialLinks />
      <Footer lang="ar" />
    </main>
  );
}
