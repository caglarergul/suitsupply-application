import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
class Header extends Component {
    render() {
        return (

            <nav className="sidebar-navigation">
                <ul>
                    <li className="active">
                        <NavLink to={"/"}><i className="fa fa-home"></i>
                            <span className="tooltip">List All Articles</span></NavLink>

                    </li>
                    <li>
                        <NavLink to={"/Create"}><i className="fa fa-edit"></i>
                            <span className="tooltip">Create Article</span></NavLink>
                    </li>


                </ul>
            </nav>



      
        );
    }
}

export default Header;