import React, {Component} from 'react';
import axios from "../../DAL/database";
import moment from "moment";

class UpdateView extends Component {

    state = {
        article: [],
        id: this.props.match.params.id
    };

    componentDidMount() {
        axios.get("article/"+this.props.match.params.id).then(response => {
            this.setState({article: response.data});
        }).catch(err => {
            console.log(err);
            this.setState({error: true});

        });
    }

    putDataHandler = () => {
        const data = {
            id: this.state.id,
            title: this.state.article.title,
            body: this.state.article.body,
            date: moment().format("YYYY-MM-DD"),
            author: "SuitSupply"
        };

        axios.put("article/"+data.id, data)
            .then(response => {
                alert("Successfully updated!");
                setTimeout(() => {
                    window.location = "/Update/"+data.id;
                }, 1000);
            }).catch(err => {
                alert(err);
        });
    };


    changeTitle(event) {

        const articleUpdated = this.state.article;
        articleUpdated.title = event.target.value;
        this.setState({article: articleUpdated});
    }

    changeBody(event) {

        const articleUpdated = this.state.article;
        articleUpdated.body = event.target.value;
        this.setState({article: articleUpdated});
       
    }




    render() {

        return (
            <div>
                <h1 className="text-center title">
                    Update Article
                </h1>
                <br/>



                        <div className="form">
                            <label className="inputEmail">ID</label>
                            <input type="text" className="form-control input-lg"
                                   placeholder="Person ID" disabled value={this.state.id}/>
                        </div>
                        <div className="form">
                            <label className="inputPassword">Title</label>
                            <input type="text" className="form-control input-lg"
                                   placeholder="First Name"
                                   value={this.state.article.title}
                                   onChange={this.changeTitle.bind(this)}/>
                        </div>
                        <div className="form">
                            <label className="inputPassword">Body</label>
                            <textarea rows={20}
                                   value={this.state.article.body}
                                   onChange={this.changeBody.bind(this)}>&nbsp;</textarea>
                        </div>



                        
                        <button className="btn default-button pull-right" onClick={this.putDataHandler}>Update
                        </button>


            </div>

        );
    }

}

export default UpdateView;