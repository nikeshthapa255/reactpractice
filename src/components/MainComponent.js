
// Use as a container

import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import { DISHES } from '../shared/dishes'
import DiscDetial from './DiscDetail';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Route, Redirect, Switch} from 'react-router-dom';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
        };
    }
    
    renderDish(dish) {
        if (dish != null) {
            return (
                <DiscDetial key={dish.id} dish={dish} />
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
    render() {
        const HomePage= () =>{
            return (
                <Home />
            );
        }
        return (
            <div  >
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route exact path='/menu' component={() => < Menu dishes={this.state.dishes}/>}/>
                    <Redirect to='/home'></Redirect>
                </Switch>
                <Footer />
            </div>
        );
    }
}



export default Main;
