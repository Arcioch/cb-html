import React, { Component } from 'react';
import './instagramFeed.style.scss'
import dog from './coffiedog.jpg'

class InstagramFeed extends Component {
    state = {

    }
    render() {
        return (
            <section className="instagram-feed">
                Follow Us on Instagram
                <a target='_blank' href="https://www.instagram.com/coffeesesh/">@coffeesesh</a>
                <ul>
                    <li>
                        <img src={dog} alt="pies pijący kawę" />
                    </li>
                    <li>
                        <img src={dog} alt="pies pijący kawę" />
                    </li>
                    <li>
                        <img src={dog} alt="pies pijący kawę" />
                    </li>
                    <li>
                        <img src={dog} alt="pies pijący kawę" />
                    </li>
                    <li>
                        <img src={dog} alt="pies pijący kawę" />
                    </li>
                    <li>
                        <img src={dog} alt="pies pijący kawę" />
                    </li>
                </ul>
            </section>
        );
    }
}

export default InstagramFeed;