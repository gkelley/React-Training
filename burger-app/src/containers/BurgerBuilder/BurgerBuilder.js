import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            meat: 0,
            salad: 0,
            cheese: 0,
            bacon: 0,
        }
    }

    render(){
        return (
            <React.Fragment>
               <Burger ingredients={this.state.ingredients} />
                <p>Build Controls</p>
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;