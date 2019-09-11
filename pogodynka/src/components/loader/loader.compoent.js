import React from 'react';
import './loader.style.scss';

const Loader = (props) => {
    if (props.isLoading) {
        return (<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>)
    } else {
        return null;
    }
}

export default Loader;