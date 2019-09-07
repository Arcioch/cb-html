import React from 'react';
import newsData from '../newsList/news.json';

const NewsDetail = (props) => {
    let id = props.match.params.id;
    return (
        <div>
            {newsData.map((item) => (item.id == id) && <div>
                <h1>{item.title}</h1>
            </div>)}
        </div>
    );
}

export default NewsDetail;