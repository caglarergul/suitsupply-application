import React from 'react';
import Truncate from 'react-truncate';

const article = (props) => (
// This is the basic partial to show article blog card. Additionally I used Truncate lib to show read more text and show short intro text for the blog card.
<div>
    <div className="blog-card">
        <div className="description">
            <h1>{props.title}</h1>
            <h2>{props.author} - {props.date}</h2>

            <p> <Truncate lines={2} ellipsis={<span className="read-more"><a href={"/Details/"+props.id}>Read More</a></span>}>{props.body}</Truncate></p>
        </div>
    </div>
</div>

);

export default article;