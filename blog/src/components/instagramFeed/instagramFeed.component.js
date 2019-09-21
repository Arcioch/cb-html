import React, { Component } from 'react';
import './instagramFeed.style.scss'
import { INSTAGRAM_API_URL } from '../../constans/config'
import axios from 'axios'
import Loader from '../loader/loader.compoent';

class InstagramFeed extends Component {
    state = {
        isLoading: false, instagramData: false

    }
    componentDidMount = () => {
        this.setState({
            isLoading: true
        })
        axios({
            method: 'GET', url: INSTAGRAM_API_URL
        }).then((response) => {
            this.setState({
                isLoading: false, instagramData: response.data
            })
        })
    }
    render() {
        return (
            <section className="instagram-feed">
                <p>
                    Follow Us on Instagram
                    <a target='_blank' href="https://www.instagram.com/coffeesesh/">@coffeesesh</a>
                </p>
                <Loader isLoading={this.state.isLoading} />
                {(this.state.isLoading === false && this.state.instagramData) &&
                    <ul>
                        {this.state.instagramData.graphql.user.edge_owner_to_timeline_media.edges.map((item, key) => {
                            return (
                                <li key={key}>
                                    <a target="_blank" href={`https://www.instagram.com/p/${item.node.shortcode}/`}>
                                        <img src={item.node.thumbnail_src} alt="" />
                                    </a>

                                </li>
                            )
                        })}


                    </ul>
                }


            </section>
        );
    }
}

export default InstagramFeed;