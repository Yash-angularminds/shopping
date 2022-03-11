import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function Cart(cartData) {

    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        let temp = []
        temp = JSON.parse(window.localStorage.getItem('items'));
        setCartItems([...temp])
    }, [])


    let navigate = useNavigate()
    const { state } = useLocation();


    const continueShopping = () => {
        navigate('/home')
    }

    const goToOrder = () => {
        navigate('/place_order')
    }

    const goToCart = () => {
        navigate('/cart');
    }
    console.log(cartItems)
    console.log(state);

    return (
        <div className="container">
            <div className="row">
                <h1>
                    <a href="/">My Ecommerce Site</a>

                    <span className="pull-right">
                        <button onClick={() => goToCart()}>Cart (0)</button>
                    </span>
                </h1>
                <hr></hr>
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">MY CART ()
                        </div>
                        <div className="panel-body">
                            {/* {console.log(cartItems)} */}

                            <form>
                                {cartItems && cartItems.map((product) =>
                                    <div className="row">
                                        <div className="col-md-3"> <img src={`http://interviewapi.ngminds.com/${product.image}`} width="100px" height="200px"></img></div>
                                        <div className="col-md-3"> {product.name}
                                            <br /><i className="fa fa-inr"></i>{product.price}
                                        </div>
                                        <div className="col-md-3"> quantity
                                            <br />
                                            <button ng-click="decrement()" className='qtyminus' ng-disabled="qty<=0">-</button>
                                            <input ng-model="qty" type='text' name='quantity' className='qty' size="5px"
                                                value="2" />
                                            <button ng-click="increment()">+</button>
                                        </div>
                                        <div className="col-md-3"> <a className="btn btn-warning">remove</a></div>
                                    </div>
                                )}
                            </form>

                            <hr></hr>
                            <div className="row">
                                <div className="col-md-9">
                                    <label className="pull-right">Amount Payable
                                    </label>
                                </div>
                                <div className="col-md-3 ">
                                    400
                                </div>
                            </div>
                        </div>
                        <div className="panel-footer">
                            <button className="btn btn-success" onClick={() => continueShopping()}>Continue Shopping</button>
                            <button className="pull-right btn btn-danger" onClick={() => goToOrder()}>Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart