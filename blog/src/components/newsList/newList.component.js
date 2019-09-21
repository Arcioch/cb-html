import React, { Component } from 'react';
import { NEWS_API_LIST } from '../../constans/config'
import axios from 'axios'
import Loader from '../loader/loader.compoent';

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
                News List
            </div>
        );
    }
}

export default NewsList;