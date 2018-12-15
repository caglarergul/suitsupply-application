import React, {Component} from 'react';
import axios from "../DAL/database";
import {NavLink} from 'react-router-dom';



class singleArticle extends Component {



    deleteHandler = () => {
        const data = {
            id: this.props.id
        };
        axios.delete("article/"+data.id, data)
            .then(response => {
                alert("Successfully deleted!");
                setTimeout(() => {
                    window.location = "/";
                }, 1000);
            }).catch(err => {
            alert(err);
        });
    };

    render() {

        const updateUrl = "/Update/"+this.props.id;
        return (

            <div>


                <div className="blog-card">

                    <div className="description">
                        <h1>{this.props.title}</h1>
                        <h2>{this.props.author} - {this.props.date}</h2>
                        <p>{this.props.body}</p>
                        <p>
                            <NavLink to={updateUrl} className={"btn btn-small update-button"}>Update</NavLink>

                            <button className={"btn btn-small delete-button"} onClick={this.deleteHandler}>Delete</button>
                        </p>

                    </div>
                </div>

            </div>

        );

    }
}


export default singleArticle;