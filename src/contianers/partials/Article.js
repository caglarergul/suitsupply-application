import React , {Component} from 'react';
import Truncate from 'react-truncate';

class article extends Component {
// This is the basic partial to show article blog card. Additionally I used Truncate lib to show read more text and show short intro text for the blog card.

    render() {
        const options = this.props.results.map((r,index) => (
            <div className="blog-card" key={index}>
                <div className="description">
                    <h1>{r.title}</h1>
                    <h2>{r.author} - {r.date}</h2>

                    <p><Truncate lines={2} >{r.body}</Truncate>
                        <span className="read-more"><a href={"/Details/" + r._id}>Read More</a></span>
                    </p>
                </div>
            </div>
        ));
        return <div>{options}</div>
    };

}

export default article;