import React from "react";
import "./Navbar.css";
import logo from "../assets/New Logo.png";
import { NavLink } from "react-router-dom";
import {BiWallet} from  "react-icons/bi";
import {BsThreeDotsVertical} from  "react-icons/bs";
import eth from '../assets/ether_nav_img.svg';

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="#" className="nav-left">
        <img src={logo} alt="logo.." />
        <span>Romi Finance</span>
      </NavLink>

      <NavLink to="/" className="nav-item">Home</NavLink>
      <NavLink to="/dashboard" className="nav-item">Dashboard</NavLink>
      <div style={{position:"relative"}}>
      <NavLink to="/nft" className="nav-item nav-nft">NFT</NavLink>
       <div className="nav-nft-dropdown">
        <NavLink to="" className="nav-item">Mint</NavLink>
        <NavLink to="" className="nav-item">Stake NFT</NavLink>
       </div>
      </div>
      <NavLink to="/earn" className="nav-item">Earn</NavLink>
      <NavLink to="/buy" className="nav-item">Buy</NavLink>
      <NavLink to="/refferals" className="nav-item">Referrals</NavLink>
      <NavLink to="/ecosystem" className="nav-item">Ecosystem</NavLink>
      <NavLink to="https://docs.zomi.finance/"  target={"_blank"} className="nav-item">About</NavLink>
      <NavLink to="/trade">
        <button className="btn">Trade</button>
      </NavLink>

      <button className="nav-btn">{<BiWallet fontSize="1.6em"/>} <span>Connect Wallet</span></button>
      <button className="nav-btn nav-right">
        <img src={eth} alt="ether_logo..."/>
        <div className="seperator"></div>
        <BsThreeDotsVertical fontSize="1.6em"/>
      </button>

    </div>
  );
}
