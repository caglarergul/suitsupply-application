import React, {Component} from 'react';
import axios from "../../DAL/database";
import Article from '../../partials/Article';

class Content extends Component {

    state = {articles: []};

    componentDidMount() {
        axios.get("articles").then(response => {
            const articles = response.data;
            const updatedArticles = articles.map(article => {
                return {
                    ...article
                }
            });
            this.setState({articles: updatedArticles});
        }).catch(err => {
            //console.log(err);
            this.setState({error: true});
        });

    }

    render() {

        let articles = this.state.articles.map(article => {
            return <Article key={article._id} id={article._id} title={article.title} body={article.body} author={article.author} date={article.date}/>;
        });

        return (
            <div>
                <h1 className="text-center title">List of Articles</h1>
                <hr/>
                <div className="container">
                    {articles}
                </div>
            </div>
        );
    }

}

export default Content;