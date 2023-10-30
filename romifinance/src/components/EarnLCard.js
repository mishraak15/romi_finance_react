import React from "react";
import "./EarnLCard.css";

export default function EarnLCard({
  title,
  price,
  wallet,
  stacked,
  apr,
  rewards,
  multiplier_points_APR,
  boost_percentage,
  total_staked,
  total_supply,
  btn1title,
  btn2title,
}) {
  return (
    <div className="earnlcard">
      <div className="dash-overview">{title}</div>
      <div className="dash-overview">
        <div className="earn-single-data">
          <div className="dash-card-label">Price</div>
          <div>{price}</div>
        </div>

        <div className="earn-single-data">
          <div className="dash-card-label">Wallet</div>
          <div>{wallet}</div>
        </div>

        <div className="earn-single-data">
          <div className="dash-card-label">Stacked</div>
          <div>{stacked}</div>
        </div>
      </div>

      <div className="dash-overview">
        <div className="earn-single-data">
          <div className="dash-card-label">APR</div>
          <div>{apr}</div>
        </div>

        {rewards === "null" ? (
          ""
        ) : (
          <div className="earn-single-data">
            <div className="dash-card-label">Rewards</div>
            <div>{rewards}</div>
          </div>
        )}
        {multiplier_points_APR === "null" ? (
          ""
        ) : (
          <div className="earn-single-data">
            <div className="dash-card-label">Multiplier Points APR</div>
            <div>{multiplier_points_APR}</div>
          </div>
        )}
        {boost_percentage === "null" ? (
          ""
        ) : (
          <div className="earn-single-data">
            <div className="dash-card-label">Boost Percentage</div>
            <div>{boost_percentage}</div>
          </div>
        )}
      </div>
      <div className="dash-overview">
        <div className="earn-single-data">
          <div className="dash-card-label">Total Staked</div>
          <div>{total_staked}</div>
        </div>

        <div className="earn-single-data">
          <div className="dash-card-label">Total Supply</div>
          <div>{total_supply}</div>
        </div>
      </div>
      <div className="earnLCard-btn-container">
        <button className="btn">{btn1title}</button>
        {btn2title === "null" ? (
          ""
        ) : (
          <button className="btn">{btn2title}</button>
        )}
      </div>
    </div>
  );
}
