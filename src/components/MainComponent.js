
// Use as a container

import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import DiscDetial from './DiscDetail';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Route, Redirect, Switch} from 'react-router-dom';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            promotions: PROMOTIONS,
            leaders :LEADERS,
            comments: COMMENTS
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
                <Home 
                    dish={this.state.dishes.filter((dish)=> dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo)=> promo.featured)[0]}
                    leader={this.state.leaders.filter((leader)=> leader.featured)[0]}
                    />
            );
        }
        return (
            <div  >
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route exact path='/menu' component={() => < Menu dishes={this.state.dishes}/>}/>
                    <Route exact path="/contactus" component={Contact}/>
                    <Redirect to='/home'></Redirect>
                </Switch>
                <Footer />
            </div>
        );
    }
}



export default Main;
