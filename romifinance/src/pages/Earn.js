import React from "react";
import "./Earn.css";
import EarnLCard from "../components/EarnLCard";
import { NavLink } from "react-router-dom";
import EarnSCard from "../components/EarnSCard";

export default function Earn() {
  document.title = "Earn | Decentralize Perpetual Exchange";

  return (
    <>
      <div className="earn">
        <div className="earn-first-wrapper">
          <h2>Earn</h2>
          <div className="dash-top-desc">
            Stake $ROMI and $ZLP to earn rewards.
          </div>
          <div className="earn-wrapper">
            <EarnLCard
              title="$ROMI"
              price="$0.00"
              wallet="$ROMI ($...)"
              stacked="$ROMI ($...)"
              apr="2%"
              rewards="$0.00"
              multiplier_points_APR="100.00%"
              boost_percentage="2.45%"
              total_staked="0 $ROMI ($...)"
              total_supply="10,000 $ROMI ($10)"
              btn1title="Buy $ROMI"
              btn2title="null"
            />

            <div className="earnlcard earnSecondCard">
              <div className="dash-overview">Total Rewards</div>
              <div className="dash-overview" style={{ height: "360px" }}>
                <div className="earn-single-data">
                  <div className="dash-card-label">ETH (WETH)</div>
                  <div>... ($...)</div>
                </div>

                <div className="earn-single-data">
                  <div className="dash-card-label">$ROMI</div>
                  <div>... ($...)</div>
                </div>

                <div className="earn-single-data">
                  <div className="dash-card-label">Escrowed $ZOMI</div>
                  <div>... ($...)</div>
                </div>

                <div className="earn-single-data">
                  <div className="dash-card-label">Multiplier Points</div>
                  <div>...</div>
                </div>

                <div className="earn-single-data">
                  <div className="dash-card-label">
                    Staked Multiplier Points
                  </div>
                  <div>...</div>
                </div>

                <div className="earn-single-data">
                  <div className="dash-card-label">Total</div>
                  <div>$...</div>
                </div>
              </div>
              <div className="earnLCard-btn-container">
                <button className="btn">Connect Wallet</button>
              </div>
            </div>

            <EarnLCard
              title="$ZLP (Ethereum)"
              price="$0.00"
              wallet="... $ZLP ($...)"
              stacked="... $ZLP ($...)"
              apr="4%"
              rewards="$1.40"
              multiplier_points_APR="null"
              boost_percentage="null"
              total_staked="... $ZLP ($...)"
              total_supply="... $ZLP ($...)"
              btn1title="Buy $ZLP"
              btn2title="Sell $ZLP"
            />

            <EarnLCard
              title="Escrowed $ZOMI"
              price="$0.00"
              wallet="... esZOMI ($...)"
              stacked="... esZOMI ($...)"
              apr="1.3%"
              rewards="null"
              multiplier_points_APR="100.00%"
              boost_percentage="null"
              total_staked="... esZOMI ($...)"
              total_supply="1,023,379 esZOMI ($1,055)"
              btn1title="Connect Wallet"
              btn2title="null"
            />
          </div>
        </div>
        <div className="earn-second-wrapper">
          <h2>Vest</h2>
          <div className="dash-top-desc">
            Convert esZOMI tokens to $ZOMI tokens. <br />
            Please read the <NavLink target={"_blank"} to="">vesting details </NavLink> before using the vaults.
          </div>
          <div className="earn-wrapper">
            <EarnSCard title="$ROMI Vault" stacked_tokens="..." reserved_for_vesting="0.00 / ..." vesting_status="0.0000 / 0.0000" claimable="0.0000 $ROMI"/>

            <EarnSCard title="$ZLP Vault" stacked_tokens="... $ZLP" reserved_for_vesting="0.00 / ..." vesting_status="0.0000 / 0.0000" claimable="0.0000 $ROMI"/>

          </div>
        </div>
      </div>
      <div className="hrline"></div>
    </>
  );
}
