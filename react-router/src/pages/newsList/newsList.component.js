import React from 'react';
import newsData from './news.json'
import NewsListItem from '../../components/news/newsListItem.component.js';

const NewsList = () => {
    return (
        <div>Lista newsow
            {newsData.map((item) => <NewsListItem
            id={item.id}
            title={item.title}
            shortDescription={item.shortDescription}
            photo={item.photo}
        />)}
        </div>
    );
}

export default NewsList;