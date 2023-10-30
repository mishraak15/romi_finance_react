import React from 'react';
import './EarnSCard.css';

export default function EarnSCard({title,stacked_tokens,reserved_for_vesting,vesting_status,claimable}) {
  return (
    <div className="earnscard">
      <div className="dash-overview">{title}</div>
      <div className="dash-overview">
        <div className="earn-single-data">
          <div className="dash-card-label">Stacked Tokens</div>
          <div>{stacked_tokens}</div>
        </div>

        <div className="earn-single-data">
          <div className="dash-card-label">Reserved for Vesting</div>
          <div>{reserved_for_vesting}</div>
        </div>

        <div className="earn-single-data">
          <div className="dash-card-label">Vesting Status</div>
          <div>{vesting_status}</div>
        </div>

        <div className="earn-single-data">
          <div className="dash-card-label">Claimable</div>
          <div>{claimable}</div>
        </div>
      </div>
      <div className="earnLCard-btn-container">
        <button className="btn">Connect Wallet</button>
      </div>
    </div>
  )
}
