import React from 'react';


const singleArticle = (props) => (
    <div>


        <div className="blog-card">

            <div className="description">
                <h1>{props.title}</h1>
                <h2>{props.author} - {props.date}</h2>
                <p>{props.body}</p>

            </div>
        </div>

    </div>

);

export default singleArticle;