import React, { Component } from 'react';
import moment from 'moment';
import { DISHES } from '../shared/dishes'
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        console.log('dishnn',dish);
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null){
            return(
            <div>
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                      {/* <hr/> */}
                    </CardBody>
                </Card>
                <h1>Comments</h1>
                       {dish && dish.comments && dish.comments.length ? dish.comments.map((ele,i)=>{
                             return(
                            <>
                                <CardText>{ele.comment}</CardText>
                                <CardText>-- {ele.author}, {moment(ele.date).format('MMM DD,YYYY')}</CardText>
                            </>
                             );
                      })   
                : null}
            </div>
            );
        }else{
            return(<div>No Dishes</div>);
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            console.log('DISHES',dish);
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                </div>
            </div>
        );
    }
}


export default Menu;