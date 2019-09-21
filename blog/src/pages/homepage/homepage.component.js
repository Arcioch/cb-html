import React from 'react';
import AuthorBox from '../../components/authorBox/authorBox.component';
import './homepage.style.scss'
import NewsList from '../../components/newsList/newList.component';

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="container">
                <div className="column-left">
                    <NewsList />
                </div>
                <div className="column-right">
                    <AuthorBox />
                </div>
            </div>
        </div>
    );
}

export default Homepage;