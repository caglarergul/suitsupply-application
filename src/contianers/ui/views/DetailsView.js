import React, {Component} from 'react';
import axios from "../../DAL/database";
import Article from "../../partials/Article";

class DetailsView extends Component {

    state = {
        articleId :this.props.match.params.id,
        articleDetails : []
    };

    componentDidMount() {
        axios.get("article/"+this.props.match.params.id).then(response => {
            const articles = response.data;
            const updatedArticles = articles.map(article => {
                return {
                    ...article
                }
            });
            console.log(updatedArticles);
            this.setState({articleDetails: updatedArticles});
        }).catch(err => {
            console.log(err);
            this.setState({error: true});

        });

    }

    render() {
        let singleArticle = this.state.articleDetails.map(article => {
            return <Article key={article._id} id={article._id} title={article.title} body={article.body} author={article.author} date={article.date}/>;
        });
        return (
            <div>
                {singleArticle}
            </div>
        );
    }
}



export default DetailsView;
