import React, { Component } from 'react';
import { NEWS_API_LIST } from '../../constans/config'
import axios from 'axios'
import Loader from '../loader/loader.compoent';
import './newsList.style.scss'
import { Link } from 'react-router-dom'

class NewsList extends Component {
    state = {
        isLoading: false,
        articlesData: false
    }

    componentDidMount = () => {
        this.setState({
            isLoading: true
        })
        axios({
            method: "GET",
            url: NEWS_API_LIST
        }).then((response) => {
            this.setState({
                isLoading: false, articlesData: response.data
            })
        })
    }
    render() {
        return (
            <div className="news-list">
                <Loader isLoading={this.state.isLoading} />
                {(!this.state.isLoading && this.state.articlesData) &&
                    this.state.articlesData.articles.map((item, key) => {
                        return (
                            <div className="news">
                                <h2>
                                    <Link to={`/artykul/${item.slug}`}>
                                        {item.name}
                                    </Link>
                                </h2>

                                <div className="info">
                                    <p>
                                        <Link to={`/autor/${item.redactor.slug}`}>
                                            {item.redactor.name}
                                        </Link>
                                    </p>
                                    <p>{item.created_at}</p>
                                </div>
                                <div className="photo">
                                    <Link to={`/artykul/${item.slug}`}>
                                        <img src={item.photoUrlBig} />
                                    </Link>
                                </div>
                                <p className="short-description">{item.short_description}</p>

                            </div>
                        )
                    })}
            </div>
        );
    }
}

export default NewsList;