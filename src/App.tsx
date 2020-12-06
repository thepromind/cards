import React from "react";
import { Header, Cards, MobileBanking, AdditionalInfo, HelpYou, Footer } from "./components";
import { animateScroll } from "react-scroll";
import { YMInitializer } from "react-yandex-metrika";

function App() {
  return (
    <div>
      <YMInitializer
        accounts={[57210262]}
        options={{
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
          trackHash: true
        }}
      />
      <Header/>
      <Cards/>
      <MobileBanking/>
      <AdditionalInfo/>
      <HelpYou/>
      <Footer/>
    </div>
  );
}

export default App;
