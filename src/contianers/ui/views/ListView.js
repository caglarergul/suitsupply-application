import React, {Component} from 'react';
import axios from "../../DAL/database";
import Article from '../../partials/Article';

class Content extends Component {

    state = {articles: [], searchResult: [], foundedArticles: []};
    searchHandler = (e) => {
        if (e.target.value.length!==0) {
            const updatedArray = [];
            for (let i=0; i<this.state.articles.length;i++) {

                // console.log(this.state.searchResult[i].title)
                if(this.state.articles[i].title.toLowerCase().indexOf(e.target.value.toLowerCase())>=0) {
                    console.log("found!");

                    updatedArray.push(this.state.articles[i]);
                }else {


                }
            }
            this.setState({searchResult: updatedArray})
        }else {
           this.getAllArticles();
           // this.setState({searchResult: this.state.articles})

        }


        console.log("Search Result after the search process:")
        console.log(this.state.searchResult)
    };

    getAllArticles = () => {
        // Getting all articles from the API and store them into state.
        axios.get("articles").then(response => {
            const articles = response.data;
            const updatedArticles = articles.map(article => {
                return {
                    ...article
                }
            });
            this.setState({articles: updatedArticles});
            this.setState({searchResult: updatedArticles});
        }).catch(err => {
            console.log(err);
            this.setState({error: true});
        });
    };

    componentDidMount() {

       this.getAllArticles();



    }


    render() {



        return (
            <div>
                <h1 className="text-center title">List of Articles</h1>

                <div className="container">
<hr/>
                    <input type="text" onChange={(event) => this.searchHandler(event)} placeholder="Search an article"/>

                    <Article  results={this.state.searchResult} />
                </div>
            </div>
        );
    }

}

export default Content;