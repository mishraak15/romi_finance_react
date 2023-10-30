import React, { useState } from "react";
import "./Reffarals.css";
import { NavLink } from "react-router-dom";
import RefferalsCard from "../components/RefferalsCard";

export default function Refferals() {
  const [refferalType, setRefferalType] = useState("traders");

  function clickHandler1() {
    setRefferalType("traders");
  }

  function clickHandler2() {
    setRefferalType("affiliates");
  }

  return (
    <>
      <div className="refferals">
        <h2>Refferals</h2>
        <div className="dash-top-desc">
          Get fee discounts and earn rebates through the $ZOMI referral program.{" "}
          <br />
          For more information, please read the{" "}
          <NavLink target={"_blank"} to="https://zomi.gitbook.referrals/">
            {" "}
            referral program details
          </NavLink>{" "}
          .
        </div>
        <div className="refferals-btn-cointainer">
          <div className="flex">
            <span
              className={`${
                refferalType === "traders"
                  ? "refferal-clicked"
                  : "refferal-notclicked"
              } refferal-type-item`}
              style={{
                borderTopLeftRadius: "4px",
                borderBottomLeftRadius: "4px",
              }}
              onClick={clickHandler1}
            >
              Traders
            </span>
            <span
              className={`${
                refferalType === "affiliates"
                  ? "refferal-clicked"
                  : "refferal-notclicked"
              } refferal-type-item`}
              style={{
                borderTopRightRadius: "4px",
                borderBottomRightRadius: "4px",
              }}
              onClick={clickHandler2}
            >
              Affiliates
            </span>
          </div>
        </div>
        {refferalType === "traders" ? (
          <RefferalsCard
            title="Enter Referral Code"
            desc="Please input a referral code to benefit from fee discounts."
          />
        ) : (
          <RefferalsCard
            title="Generate Referral Code"
            desc="Looks like you don't have a referral code to share.
                     Create one now and start earning rebates!"
          />
        )}
      </div>
      <div className="hrline"></div>
    </>
  );
}
