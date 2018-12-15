import React, {Component} from 'react';
import axios from "../../DAL/database";
import SingleArticle from "../../partials/SingleArticle";

class DetailsView extends Component {

    state = {
        articleId :this.props.match.params.id,
        articleDetails : []
    };

    // In here, the component gets a specific article with id prop. Send them to the state array.
    componentDidMount() {
        axios.get("article/"+this.props.match.params.id).then(response => {
            this.setState({articleDetails: response.data});
        }).catch(err => {
            console.log(err);
            this.setState({error: true});
        });
    }

    // And I create a SingleArticle Component to show a specific article blog card.
    render() {
        return (
            <div>
                <SingleArticle id={this.state.articleDetails._id} title={this.state.articleDetails.title}
                               body={this.state.articleDetails.body} author={this.state.articleDetails.author}
                               date={this.state.articleDetails.date}/>
            </div>
        );
    }
}



export default DetailsView;
