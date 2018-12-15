import React, {Component} from 'react';
import axios from "../../DAL/database";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.min.css";

class CreateView extends Component {

    state = {
        title: "",
        body: "",
        author: "",
        date: ""
    };

    // Posting input datas to api via Axios post method. I checked the form empty validation and post it.
    postDataHandler = () => {
        const data = {
            title: this.state.title.trim(),
            body: this.state.body.trim(),
            date: moment().format("YYYY-MM-DD"), // I used moment library to get date value for a proper format.
            author: "SuitSupply"
        };

        if (data.title!=="" && data.body!=="" && data.date!=="" && data.author!=="") {
            axios.post("article", data)
                .then(response => {
                    alert("Successfully added!");
                    setTimeout(() => {
                        window.location = "/";
                    }, 1000);
                }).catch(err => {
                console.log(err);
            });

        }else {
            alert("Please do not left blank any parts!!!");
        }
    };


    render() {
        return (
            <div>
                <h1 className="text-center title">Add an article</h1>
                <br/>
                        <div className="form">
                            <label htmlFor="firstname" >Title</label>
                            <input type="text" id="title"
                                   value={this.state.title}
                                   onChange={(event) => this.setState({title: event.target.value})}/>
                        </div>
                        <div className="form">
                            <label htmlFor="firstname" >Body</label>
                            <textarea id="body" rows={20}
                                      value={this.state.body}
                                      onChange={(event) => this.setState({body: event.target.value})}>&nbsp;</textarea>
                        </div>

                        <button className="btn default-button pull-right" onClick={this.postDataHandler}>
                            Save article
                        </button>
            </div>
        );
    }
}

export default CreateView;