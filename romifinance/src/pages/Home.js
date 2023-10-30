import React from "react";
import "./Home.css";
import HomeSCard from "../components/HomeSCard";
import SCard1 from "../assets/SCard1.svg";
import SCard2 from "../assets/SCard2.svg";
import SCard3 from "../assets/SCard3.svg";
import MCard1 from "../assets/MCard1.svg";
import MCard2 from "../assets/MCard2.svg";
import MCard3 from "../assets/MCard3.svg";
import LCard1 from "../assets/LCard1.png";
import LCard2 from "../assets/LCard2.png";
import HomeMCard from "../components/HomeMCard";
import HomeLCard from "../components/HomeLCard";

export default function Home() {

  const MCardDes1="An aggregate of high-quality price feeds determine when liquidations occur. This keeps positions safe from temporary wicks.";
 const MCardDes2="Enter and exit positions with minimal spread and zero price impact. Get the optimal price without incurring additional costs.";
 const MCardDes3="Open positions through a simple swap interface. Conveniently swap from any supported asset into the position of your choice.";

 const LCardDes1="$ZOMI is the utility and governance token. Accrues 30% of the platform's generated fees.";
 const LCardDes2="$ZLP is the liquidity provider token. Accrues 70% of the platform's generated fees.";

  return (
    <div className="home-wrapper">
      <div className="home-top">
        <div className="home-head">
          Decentralized <br />
          Perpetual Exchange
        </div>
        <p className="home-desc">
          Trade BTC, ETH, AVAX and other top cryptocurrencies with up to 30x
          leverage directly from your wallet
        </p>
        <button className="btn">Launch Exchage</button>
        <div className="home-scard-container">
          <HomeSCard img={SCard1} title="Total Trading Volume" val="$0" />
          <HomeSCard img={SCard2} title="Open Interest" val="$0" />
          <HomeSCard img={SCard3} title="Total Users" val="0" />
        </div>
      </div>
      <div className="hrline"></div>
      <div className="home-mid">
      <div className="home-mcard-container">
        <HomeMCard img={MCard1} title="Reduce Liquidation Risks" desc={MCardDes1}/>
        <HomeMCard img={MCard2} title="Save on Costs" desc={MCardDes2}/>
        <HomeMCard img={MCard3} title="Simple Swaps" desc={MCardDes3}/>
      </div>
      </div>
      <div className="home-last">
         <h2>Two tokens create our ecosystem</h2>
         <div className="home-lcard-container">
            <HomeLCard img={LCard1} title="$ROMI" desc={LCardDes1} value="0.00%"/>
            <HomeLCard img={LCard2} title="$ZLP" desc={LCardDes2} value="1,650,508,323.97%"/>
         </div>
      </div>
      <div className="hrline"></div>
    </div>
  );
}
