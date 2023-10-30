import React from 'react';
import './Footer.css';
import logo from '../assets/New Logo.png';
import {BsTwitter,BsGithub,BsTelegram} from 'react-icons/bs';
import {BiLogoDiscord} from 'react-icons/bi';
import {TbLetterM} from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-comp-name'>
        <img src={logo} alt="" />
        <span >Romi Finance</span>
      </div>
      <div className='footer-link-container'>
        <NavLink target={"_blank"} to="https://twitter.com/zomi.finance" >
        <BsTwitter/>
        </NavLink>
        <NavLink target={"_blank"} to="https://zomifinance.medium.com/" >
        <TbLetterM/>
        </NavLink>
        <NavLink target={"_blank"} to="https://github.com/zomi" >
        <BsGithub/>
        </NavLink>
        <NavLink target={"_blank"} to="https://t.me/zomichat" >
        <BsTelegram/>
        </NavLink>
        <NavLink target={"_blank"} to="https://discord.gg/senshilabs" >
        <BiLogoDiscord/>
        </NavLink>
      </div>

      <div className='footer-outerlink-container'>
        <NavLink target={"_blank"} to="https://zomi.finance/#/terms-and-conditions">Terms and Conditions</NavLink>
        <NavLink target={"_blank"} to="https://zomi.finance/#/referral-terms">Referral Terms</NavLink>
        <NavLink target={"_blank"} to="https://docs.zomi.finance/">Media Kit</NavLink>
      </div>
      
    </div>
  )
}
