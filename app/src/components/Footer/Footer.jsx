import React from "react";
import linkedIn from '../../img/icons/linkedIn.svg';
import gitHub from '../../img/icons/gitHub.svg';



const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        {/* <li className="social__item"><a href="#!"><img src={vk} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={inst} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={twitter} alt="Link" /></a></li> */}
                        <li className="social__item"><a href="https://github.com/AntonKrivelo"><img src={gitHub} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"><img src={linkedIn} alt="Link" /></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2025 frontend-developer by Anton</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;