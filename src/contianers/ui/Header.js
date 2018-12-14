import React, {Component} from 'react';
import logo from "../../logo.png";

class Header extends Component {
    render() {
        return (

            <nav className="sidebar-navigation">
                <ul>
                    <li className="active">
                        <a href={'/'}> <i className="fa fa-home"></i>
                        <span className="tooltip">Home</span></a>
                    </li>
                    <li>
                        <a href={'/Create'}><i className="fa fa-edit"></i>
                        <span className="tooltip">Create Article</span></a>
                    </li>
                    <li>
                        <a href={'/Update'}><i className="fa fa-refresh"></i>
                        <span className="tooltip">Update an Article</span></a>
                    </li>
                    <li>
                        <a href={'/Delete'}><i className="fa fa-trash"></i>
                        <span className="tooltip">Delete Article</span></a>
                    </li>
                    <li>
                        <a href={'/Login'}><i className="fa fa-user"></i>
                        <span className="tooltip">Login</span></a>
                    </li>
                </ul>
            </nav>




      
        );
    }
}

export default Header;