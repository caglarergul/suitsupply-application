import React, {Component} from 'react';
import axios from "../../DAL/database";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
class CreateView extends Component {

    state = {
        title: "",
        body: "",
        author: "",
        date: ""
    };
 
    postDataHandler = () => {
        const data = {
            title: this.state.title.trim(),
            body: this.state.body.trim(),
            date: moment().format("YYYY-MM-DD"),
            author : this.state.author
        };

        axios.post("article", data)
            .then(response => {
                console.log(response);
                alert("Successfully added!");
                setTimeout(() => {
                    window.location = "/";
                }, 1000);
            }).catch(err => {
            //console.log(err);
        });

    };



    render() {
        return (
            <div>
                <h1 className="text-center">Add an article</h1>
                <br/>
                <div className="row align-items-center">
                <div className="col"></div>
                    <div className="col-8">
                        <div className="form">
                            <label htmlFor="firstname" className="firstname">Title</label>
                            <input type="text" id="title" className="form-control input-lg" 
                                   value={this.state.title}
                                   onChange={(event) => this.setState({title: event.target.value})}/>
                        </div>
                        <div className="form">
                            <label htmlFor="firstname" className="lastname">Body</label>
                            <textarea type="text" id="body" className="form-control input-lg" 
                                   value={this.state.body}
                                   onChange={(event) => this.setState({body: event.target.value})} ></textarea>
                        </div>
                        
                        
                           

                                    
                               
                            
                     
                        
                        <button className="success" onClick={this.postDataHandler}>Save article
                        </button>
                        
                    </div>
                    <div className="col"></div>
                </div>  
            </div>
        );
    }
}

export default CreateView;