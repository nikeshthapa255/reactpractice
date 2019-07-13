
// Use as a container

import React, { Component } from 'react';
import Menu from './MenuComponent'
import { DISHES } from '../shared/dishes'
import DiscDetial from './DiscDetail';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectdish:null
        };
    }
    onDishSelect(dishId) {
        const dish=this.state.dishes.filter((dish)=>dish.id === dishId)[0]
        this.setState({ selectdish: dish });
        document.getElementById('target').scrollIntoView();
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
        return (
            <div  >
                <Header />
                <div className="m-5">
                    <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}></Menu>
                </div>
                <div  id="target" >
                    {this.renderDish(this.state.selectdish)}
                </div>
                <Footer />
            </div>
        );
    }
}



export default Main;
