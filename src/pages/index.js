import Head from "next/head";
import Hero from "../../components/Hero";
import Platform from "../../components/Platform";
import Categories from "../../components/Categories";
import Introduction from "../../components/Introduction";
import UserID from "../../components/UserID";
import GlobalVision from "../../components/GlobalVision";
import Partners from "../../components/Partners";
import Footer from "../../components/Footer";
// import { Lato } from "next/font/google";

// const lato = Lato({ subsets: ["latin"] });

const Home = () => {
  return (
    <div>
      <Head>
        <title>Zimo</title>
        <meta name="description" content="Zimo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section id="hero" className="snap-start w-screen h-screen">
        <Hero />
      </section>
      <section id="introduction" className="snap-center">
        <Introduction />
      </section>
      <section id="categories" className="snap-center">
        <Categories />
      </section>
      <section id="platform" className="snap-center">
        <Platform />
      </section>
      <section id="userId" className="snap-center">
        <UserID />
      </section>
      <section id="globalVision" className="snap-center">
        <GlobalVision />
      </section>
      <section id="partners" className="snap-center">
        <Partners />
      </section>
      <section id="footer" className="snap-start">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
