import React from "react";
import "./Footer.css";
import Twitter from "../../img/twitter.svg"
import  Patreon from "../../img/patreon.svg"
import Linkedin from "../../img/linkedin_logo.svg"
import Discord from "../../img/discord.svg"


const FooterBlock = () => {
return (
    <div className='footer'>
            <div className='footer_wrapper'>
                <div className='container'>
                    <div className='footer_content'>
                        <div className="icons_footer">
                            <img src={Twitter} alt="" />
                            <img src={Patreon} alt="" />
                            <img src={Linkedin} alt="" />
                            <img src={Discord} alt="" />
                        </div>
                        <div className="links_footer">
                            <a href="#">COMMUNITY</a>
                            <a href="#">DOCS</a>
                            <a href="#">CONTACT</a>
                            <a href="#">COOKIE DECLARATION</a>
                            <a href="#">PRIVACY POLICY</a>
                        </div>
                        <div className="back_footer">
                            <h6>Design by Freepic</h6>
                        </div>
                    </div>
                </div>
            </div>
</div>
)
}

export default FooterBlock;