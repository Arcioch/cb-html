import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './authorBox.style.scss'

const AuthorBox = () => {
    return (
        <div className="author-box">
            <img src="https://demo.tagdiv.com/newspaper_blog_coffee/wp-content/uploads/2018/01/author-300x300.jpg" />
            <p className="name">Pani co się zna na kawie</p>
            <p className="description">Sophia is a long time coffee enthusiast and blogger, so the project started naturally five years ago. You can find useful information about coffee types, plantations, equipment and even tips and tricks or fun facts.</p>
            <div className="socialmedia">
                <div className="social">
                    <div className="icon"><FontAwesomeIcon icon={faFacebook} /></div>
                    <div className="count">16,845</div>
                    <div className="name">Likes</div>
                </div>
                <div className="social">
                    <div className="icon"><FontAwesomeIcon icon={faInstagram} /></div>
                    <div className="count">8,978</div>
                    <div className="name">Followers</div>
                </div>
                <div className="social">
                    <div className="icon"><FontAwesomeIcon icon={faYoutube} /></div>
                    <div className="count">2,987</div>
                    <div className="name">Subs</div>
                </div>
            </div>


        </div>
    );
}

export default AuthorBox;