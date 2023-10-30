import React from "react";
import "./Buy.css";
import LCard1 from "../assets/LCard1.png";
import LCard2 from "../assets/LCard2.png";
import HomeLCard from "../components/HomeLCard";

export default function Buy() {
  const LCardDes1 =
    "$ZOMI is the utility and governance token. Accrues 30% of the platform's generated fees.";
  const LCardDes2 =
    "$ZLP is the liquidity provider token. Accrues 70% of the platform's generated fees.";

  return (
    <>
    <div className="buy">
      <h2>Buy $ZOMI or $ZLP</h2>
      <div className="home-lcard-container">
        <HomeLCard img={LCard1} title="$ROMI" desc={LCardDes1} value="0.00%" />
        <HomeLCard
          img={LCard2}
          title="$ZLP"
          desc={LCardDes2}
          value="1,650,508,323.97%"
        />
      </div>
    </div>
    <div className="hrline"></div>
    </>
  );
}
