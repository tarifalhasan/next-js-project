import Head from 'next/head';

import { Inter } from 'next/font/google';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ConnectUs from '@/components/ConnectUs';
import Team from '@/components/Team';
import Events from '@/components/Events';
import Community from '@/components/Community';

import Services from '@/components/Services';
import MobileMenu from '@/components/MobileHeader';
import TeamMobile from '@/components/TeamMobile';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>עמותת בוגרי מערך ההגנה בסייבר</title>
        <meta
          name="description"
          content="Generated by עמותת בוגרי מערך ההגנה בסייבר"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main>
        <Header />
        <MobileMenu />
        <Hero />

        <Community />
        <Services />
        <Events />
        <Team />
        <TeamMobile />
        <ConnectUs />
        <Footer />
      </main>
    </>
  );
}
