import React, { Component } from 'react';
import newsData from './news.json'
import NewsListItem from '../../components/news/newsListItem.component.js';

class NewsList extends Component {
    state = {
        search: ''
    }
    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }
    render() {
        return (
            <div>Lista newsow
                <input type="text" onChange={this.handleChange} value={this.state.search} />
                {newsData.filter((item) => item.title.includes(this.state.search)).map((item) => <NewsListItem
                    id={item.id}
                    title={item.title}
                    shortDescription={item.shortDescription}
                    photo={item.photo}
                />)}
            </div>
        );
    }
}

export default NewsList;