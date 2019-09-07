import React from 'react';

const NewsDetail = (props) => {
    let pageNumber = props.match.params.pageNumber;
    return (
        <div>
            To jest detal newsa o indetyfikatorze {props.match.params.slug}
            {pageNumber && <div>
                To jest numer {pageNumber}
            </div>}
        </div>
    );
}

export default NewsDetail;