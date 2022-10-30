import NavBar from "../NavBar/navbar";

import digital from "./digital.svg"
import send from "./send_instant.svg"
import grandma from "./grandma.svg"
import "./homepage.scss"
import secondframe from "./secondframe.svg"
import excited_man from "./excited-man.svg"
import section_4 from "./section_4.svg"
import partners from "./partners.svg"
import s6_nav from "./s6_nav.svg"
import s6_footer from "./s6-footer.svg"
import copyright from "./copyright.svg"
import s2_design from "./s2-design.svg"
import {FaTwitter,FaInstagram,FaYoutube } from 'react-icons/fa'
import gift_chest from "./gift_chest.svg"
import s4_babes from "./s4-babes.svg"
import s4_grandma from "./s4-grandma.svg"
import grandmaDaughter from "./Frame 8703.png"
import arch1 from "./arch1.svg"
import arch2 from "./arch2.svg"
import abeg from "./abeg.svg"
import access from "./access_bank.svg"
import bolt from "./bolt.svg"
import first_bank from "./first_bank.svg"
import airtel from "./airtel.svg"
import icecream from "./Confetti-Party.svg"
import {useNavigate} from 'react-router-dom'
import RegisterPage from '../RegisterPage/RegisterPage';



const HomePage = () => {

    const navigate= useNavigate();
    const navigateToRegisterPage = () => {

        navigate("/login");

      };
    return ( 
        
        <body classname='body1'>
            
            <section className="nav-section">
                <NavBar/>
            </section>

            <section className="first-section">
                <div className="first-section-row row ">
                    <div className="col-lg-6 col-md-12 col-sm-12-order-first">
                        <p className="s1-p1">Send instant heartfelt rewards to your teachers</p>
                        <p className="s1-p2"> A digital platform that digitizes the process of sending funds to teachers who have done their work with emphatic kindness.</p>
                        <button onClick={navigateToRegisterPage} className="s1-button">Get Started</button>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12-order-last">
                        <img className="s1-grandma" src={grandma}/>
                    </div>
                    <div>
                        <img src={icecream} style={{width:"80px", marginLeft:"10px", marginTop:"83px"}}></img>
                    </div>
                </div>
            </section>
            <section className="second-section">
                <div className="s2-col-container row mt-1">
                    <div className="col ">
                        <div className="s2-test">
                            <div className="s2-p1 mt-2">How it works</div>
                        </div>
                
                        <div className="s2-p2">The easiest way to show you care</div>
                        {<img className="s2-design" src={s2_design}></img> }
                        <div className="design"></div>

                        {<img className="s2-design2" src={s2_design}></img> }
                        <div className="design2"></div>

                        {<img className="s2-design3" src={s2_design}></img> }
                        <div className="design3"></div>

                        <div className="s2-design-contents">
                            <p className="s2-step1">STEP ONE</p>
                            <div className="s2-signin">Sign in / Sign up</div>
                            <div className="s2-do-this">Do this with your email and password or Google 
                            account to get started.</div>
                        </div>

                        <div className="s2-design2-contents">
                            <p className="s2-step2">STEP TWO</p>
                            <div className="s2-signin2">Fund your Wallet as an Alumni</div>
                            <div className="s2-do-this2">Move money from your bank account into your RewardyourTeacher Wallet and instantly begin to gift your teachers.</div>
                        </div>

                        <div className="s2-design3-contents">
                            <p className="s2-step3">STEP THREE</p>
                            <div className="s2-signin3">Send Monetary Reward to a Teacher</div>
                            <div className="s2-do-this3">Do it once, do it again and again! Let your teachers know that they are valued.</div>
                        </div>      

                    </div>

                    <div className="col">
                        <img className="gift-chest" src={gift_chest}/>
                    </div>
                </div>
            </section> 
            <section className="third-section">
                <div className="row">
                    <div className="col">
                        <div className="s3-left-col">
                        <p className="s3-p1">Send surprise funds to your teacher today</p>
                        <p className="s3-p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="b2-p" onClick={navigateToRegisterPage}>Get Started</button>
                        </div>
                    </div>

                        
                    <div className="col">
                        <img className="excited-man" src={excited_man}/>
                    </div>

                </div>
                
            </section>
            <section className="fourth-section">
                <div className="row4">
                    <div className="col">
                        <div className="s4-p1-container">
                            <img className="arch1"  src={arch1}/>
                        
                            <p className="heaven">The teacher's reward should no longer be in heaven.</p>
                            <img className="arch2" src={arch2}/>
                        </div>
                        <div className="s4-p2-container">
                            <div className="s4-p2">
                                <p>The teacher motivates</p>
                                <p>The teacher inspires</p>
                                <p>The teacher equips</p>
                                <p>The teacher loves</p>
                                
                            </div>
                        </div>
                        
                    </div>
                    <div className="col">
                        
                        {/* <img className="s4-grandma" src={s4_grandma}/>
                        <img className="s4-babes" src={s4_babes}/> */}
                        <img className="" src={grandmaDaughter}/>
                    </div>
                </div>
            </section>
            <section className="fifth-section">
                <div className="s5-ourpartners-div">
                    <p className="our-partners">Our Partners</p>
                </div>
                <div className="partners-container">
                    <div className="brand-logos">
                        <img src={abeg} className="img1 "/>  
                    </div>
                    <div className="brand-logos">
                        <img src={access} className="img2 "/>
                    </div>
                    <div className="brand-logos">
                        <img src={bolt} className="img3 "/>
                    </div>
                    <div className="brand-logos">
                        <img src={first_bank} className="img4"/>
                    </div>
                    <div className="brand-logos">
                        <img src={airtel} className="img5"/>
                    </div>
                </div>
            </section>
            <section className="sixth-section">
                <div className="reward-t-logo">
                     <img src={s6_nav} ></img> 
                </div>

                <div className="s6-mini-nav">
                    <p>Home</p>
                    <p>About</p>
                    <p>Reward Teacher</p>
                    <p>Contact</p>
                </div>

                <div>
                    <div className="s6-footer" >
                        <p>© 2022 Reward Teacher. All rights reserved</p>
                       
                    </div>
                     {/* <div className="social-media"> */}
                        <FaInstagram color="white" className="Instagram"/>
                        <FaTwitter mr-1 ml-2 color="white" className="Twitter"/>
                        <FaYoutube color="white" className="Youtube"/>
                    {/* </div> */}
                </div>
                
            </section>
            
        </body>
     );
}
 
export default HomePage;