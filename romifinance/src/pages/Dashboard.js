import React, { useState } from "react";
import "./Dashboard.css";
import etherDashboard from "../assets/ether_dashboard.svg";
import { AiOutlineDown } from "react-icons/ai";
import dashMidFirst from "../assets/LCard1.png";
import dashMidSecond from "../assets/LCard2.png";
import dashmideather from "../assets/dashmideather.svg";
import dashmidcoingecko from "../assets/dashmidcoingecko.svg";
import dashlastether from "../assets/dash-last-etherium.svg";
import dashlastape from "../assets/dash-last-skull.svg";
import dashlastbitcoin from "../assets/dash-last-bitcoin.svg";
import dashlastusd from "../assets/dash-last-usd.svg";
import { NavLink } from "react-router-dom";
import DashCircleProgrssBar from "../components/DashCircleProgressBar";

export default function Dashboard() {
  document.title = "Dashboard | Decentralize Perpetual Exchange";

  const [hidden1, setHidden1] = useState(true);

  function hiddenChangeHandler1() {
    setHidden1(!hidden1);
  }

  const [hidden2, setHidden2] = useState(true);

  function hiddenChangeHandler2() {
    setHidden2(!hidden2);
  }

  const [hidden3, setHidden3] = useState(true);

  function hiddenChangeHandler3() {
    setHidden3(!hidden3);
  }

  const [hidden4, setHidden4] = useState(true);

  function hiddenChangeHandler4() {
    setHidden4(!hidden4);
  }

  const [hidden5, setHidden5] = useState(true);

  function hiddenChangeHandler5() {
    setHidden5(!hidden5);
  }

  const [hidden6, setHidden6] = useState(true);

  function hiddenChangeHandler6() {
    setHidden6(!hidden6);
  }

  return (
    <>
      <div className="dashboard">
        <div className="dash-top-wrapper">
          <div className="dash-top-head">
            <h2>Stats</h2>
            <img src={etherDashboard} alt="" />
          </div>
          <div className="dash-top-desc">
            Ethereum Total Stats start from 06 Jan 2022. <br /> For detailed
            stats:
          </div>
          <div className="dash-top-container">
            <div className="dash-top-first-card">
              <div className="dash-overview">Overview</div>
              <div className="flex-j-sb">
                <div className="dash-card-label">AUM</div>
                <div>$34</div>
              </div>

              <div className="flex-j-sb">
                <div className="dash-card-label">$ZLP Pool</div>
                <div>$34</div>
              </div>

              <div className="flex-j-sb">
                <div className="dash-card-label">24h Volume</div>
                <div>$0</div>
              </div>

              <div className="flex-j-sb">
                <div className="dash-card-label">Long Positions</div>
                <div>$0</div>
              </div>

              <div className="flex-j-sb">
                <div className="dash-card-label">Short Positions</div>
                <div>$0</div>
              </div>
            </div>
            <div className="dash-top-second-card">
              <div className="dash-overview">Total Stats</div>
              <div className="flex-j-sb">
                <div className="dash-card-label">Total Fees</div>
                <div>$0</div>
              </div>

              <div className="flex-j-sb">
                <div className="dash-card-label">Total Volume</div>
                <div>$0</div>
              </div>

              <div className="flex-j-sb">
                <div className="dash-card-label">Floor Price Fund</div>
                <div>$627,428</div>
              </div>
            </div>
          </div>
        </div>
        <div className="dash-mid-wrapper">
          <div className="dash-top-head">
            <h2>Tokens </h2>
            <img src={etherDashboard} alt="" />
          </div>
          <div className="dash-top-desc">Platform and $ZLP index tokens.</div>

          <div className="dash-mid-container">
            <div className="dash-mid-first-card flex">
              <div className="dash-mid-left">
                <div className="dash-overview dash-mid-top">
                  <img src={dashMidFirst} alt="" />
                  <div>
                    <div>$ROMI</div>
                    <div className="dash-mid-top-subhead">$ROMI</div>
                  </div>
                  <AiOutlineDown
                    style={{ cursor: "pointer" }}
                    onClick={hiddenChangeHandler1}
                  />
                  <div
                    className="dash-mid-first-hidden"
                    style={hidden1 ? { display: "none" } : { display: "flex" }}
                  >
                    <div className="dash-mid-hidden-single">
                      <img src={dashmidcoingecko} alt="" />
                      <NavLink to="">Open in Coingecko</NavLink>
                    </div>

                    <div className="dash-mid-hidden-single">
                      <img src={dashmideather} alt="" />
                      <NavLink to="">Open in Explorer</NavLink>
                    </div>
                  </div>
                </div>
                <div className="flex-j-sb">
                  <div className="dash-card-label">Price</div>
                  <div>$0.00</div>
                </div>

                <div className="flex-j-sb">
                  <div className="dash-card-label">Supply</div>
                  <div>10,000 $ZOMI</div>
                </div>

                <div className="flex-j-sb">
                  <div className="dash-card-label">Total Stacked</div>
                  <div>$0</div>
                </div>

                <div className="flex-j-sb">
                  <div className="dash-card-label">Market Cap</div>
                  <div>$10</div>
                </div>
              </div>
              <div className="dash-mid-right">
                 <DashCircleProgrssBar value="94" title="Distribution" hiddendata="in Liquidity"/>
              </div>
            </div>

            <div className="dash-mid-second-card flex">
              <div className="dash-mid-left">
                <div className="dash-overview dash-mid-top">
                  <img src={dashMidSecond} alt="" />
                  <img className="eather-relative" src={dashmideather} alt="" />
                  <div>
                    <div>$ZLP</div>
                    <div className="dash-mid-top-subhead">$ZLP</div>
                  </div>
                  <AiOutlineDown
                    style={{ cursor: "pointer" }}
                    onClick={hiddenChangeHandler2}
                  />
                  <div
                    className="dash-mid-first-hidden"
                    style={hidden2 ? { display: "none" } : { display: "flex" }}
                  >
                    <div className="dash-mid-hidden-single">
                      <img src={dashmideather} alt="" />
                      <NavLink to="">Open in Explorer</NavLink>
                    </div>
                  </div>
                </div>
                <div className="flex-j-sb">
                  <div className="dash-card-label">Price</div>
                  <div>$1.136</div>
                </div>

                <div className="flex-j-sb">
                  <div className="dash-card-label">Supply</div>
                  <div>29 $ZLP</div>
                </div>

                <div className="flex-j-sb">
                  <div className="dash-card-label">Total Stacked</div>
                  <div>$34</div>
                </div>

                <div className="flex-j-sb">
                  <div className="dash-card-label">Market Cap</div>
                  <div>$34</div>
                </div>

                <div className="flex-j-sb">
                  <div className="dash-card-label">Stable Coin Percentage</div>
                  <div>49.50%</div>
                </div>
              </div>
              <div className="dash-mid-right">

              <DashCircleProgrssBar value="49.5" title="$ZLP Pool" hiddendata="USDC"/>

              </div>
            </div>
          </div>
        </div>
        <div className="dash-last">
          <div className="dash-overview dash-last-top">
            <span>$ZLP Index Composition</span>
            <img src={dashmideather} alt="" />
          </div>
          <div className="dash-last-top-head">
            <div className="dash-card-label">TOKEN</div>
            <div className="dash-card-label">PRICE</div>
            <div className="dash-card-label">POOL</div>
            <div className="dash-card-label">WEIGHT</div>
            <div className="dash-card-label">UTILIZATION</div>
          </div>
          <div className="dash-last-top-head">
            <div className="dash-last-single-row-left">
              <img src={dashlastether} alt="" />
              <div>
                <div>Ethereum</div>
                <div className="dash-mid-top-subhead">ETH</div>
              </div>
              <AiOutlineDown
                style={{ cursor: "pointer" }}
                onClick={hiddenChangeHandler3}
              />
              <div
                className="dash-mid-first-hidden"
                style={hidden3 ? { display: "none" } : { display: "flex" }}
              >
                <div className="dash-mid-hidden-single">
                  <img src={dashmideather} alt="" />
                  <NavLink to="">Open in Explorer</NavLink>
                </div>
                <div className="dash-mid-hidden-single">
                  <img src={dashmidcoingecko} alt="" />
                  <NavLink to="">Open in Coingecko</NavLink>
                </div>
              </div>
            </div>

            <div>$1,789.48</div>
            <div>$19</div>
            <div>50.49% / 25.00%</div>
            <div>0.00%</div>
          </div>


          <div className="dash-last-top-head">
            <div className="dash-last-single-row-left">
              <img src={dashlastbitcoin} alt="" />
              <div>
                <div>Wrapped Bitcoin</div>
                <div className="dash-mid-top-subhead">WBTC</div>
              </div>
              <AiOutlineDown
                style={{ cursor: "pointer" }}
                onClick={hiddenChangeHandler4}
              />
              <div
                className="dash-mid-first-hidden"
                style={hidden4 ? { display: "none" } : { display: "flex" }}
              >
                <div className="dash-mid-hidden-single">
                  <img src={dashmideather} alt="" />
                  <NavLink to="">Open in Explorer</NavLink>
                </div>
                <div className="dash-mid-hidden-single">
                  <img src={dashmidcoingecko} alt="" />
                  <NavLink to="">Open in Coingecko</NavLink>
                </div>
              </div>
            </div>
            <div>$34,397.82</div>
            <div>$0</div>
            <div>0.00% / 25.00%</div>
            <div>0.00%</div>
          </div>


          <div className="dash-last-top-head">
            <div className="dash-last-single-row-left">
              <img src={dashlastape} alt="" />
              <div>
                <div>ApeCoin</div>
                <div className="dash-mid-top-subhead">APE</div>
              </div>
              <AiOutlineDown
                style={{ cursor: "pointer" }}
                onClick={hiddenChangeHandler5}
              />
              <div
                className="dash-mid-first-hidden"
                style={hidden5 ? { display: "none" } : { display: "flex" }}
              >
                <div className="dash-mid-hidden-single">
                  <img src={dashmideather} alt="" />
                  <NavLink to="">Open in Explorer</NavLink>
                </div>
                <div className="dash-mid-hidden-single">
                  <img src={dashmidcoingecko} alt="" />
                  <NavLink to="">Open in Coingecko</NavLink>
                </div>
              </div>
            </div>
            <div>$1.37</div>
            <div>$0</div>
            <div>0.00% / 25.00%</div>
            <div>0.00%</div>
          </div>


          <div className="dash-last-top-head">
            <div className="dash-last-single-row-left">
              <img src={dashlastusd} alt="" />
              <div>
                <div>USD Coin</div>
                <div className="dash-mid-top-subhead">USDC</div>
              </div>
              <AiOutlineDown
                style={{ cursor: "pointer" }}
                onClick={hiddenChangeHandler6}
              />
              <div
                className="dash-mid-first-hidden"
                style={hidden6 ? { display: "none" } : { display: "flex" }}
              >
                <div className="dash-mid-hidden-single">
                  <img src={dashmideather} alt="" />
                  <NavLink to="">Open in Explorer</NavLink>
                </div>
                <div className="dash-mid-hidden-single">
                  <img src={dashmidcoingecko} alt="" />
                  <NavLink to="">Open in Coingecko</NavLink>
                </div>
              </div>
            </div>
            <div>$1.00</div>
            <div>$14</div>
            <div>49.50% / 25.00%</div>
            <div>0.00%</div>
          </div>

        </div>
      </div>
      <div className="hrline"></div>
    </>
  );
}
