import React, {Component} from 'react';
//import logo from './logo.svg';
import Aux from './hoc/Auxiliary';
import {Route} from 'react-router-dom';
import List from './contianers/ui/views/ListView';
import Create from './contianers/ui/views/CreateView';
import Update from './contianers/ui/views/UpdateView';
import Details from './contianers/ui/views/DetailsView';
import Layout from './contianers/ui/Layout';
import './App.css';



class App extends Component {
    render() {
        return (
            <Aux>
                <Layout>
                    <Route path="/" exact component={List}/>
                    <Route path="/Details/:id" exact component={Details}/>
                    <Route path="/Create" exact component={Create}/>
                    <Route path="/Update/:id" exact component={Update}/>
                </Layout>
            </Aux>
        );
    }
}

export default App;
