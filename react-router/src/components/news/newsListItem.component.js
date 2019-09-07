import React from 'react';
import { Link } from "react-router-dom";

const NewsListItem = (props) => {
    return (<div>
        <Link to={`news/${props.id}`}><h1>{props.title}</h1></Link>
        <Link to={`news/${props.id}`}><img src={`${props.photo}?random=${Math.random()}`} /></Link>
        <p>{props.shortDescription}</p>
    </div>);
}

export default NewsListItem;