import React from 'react';
import Truncate from 'react-truncate';

const article = (props) => (
<div>


    <div className="blog-card">

        <div className="description">
            <h1>{props.title}</h1>
            <h2>{props.author} - {props.date}</h2>
            <p> <Truncate lines={2} ellipsis={<p className="read-more"><a href={"/Details/"+props.id}>Read More</a></p>}>{props.body}</Truncate></p>

        </div>
    </div>

</div>

);

export default article;