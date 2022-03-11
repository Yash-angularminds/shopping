import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Placeorder() {

    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState()
    const [person, setPerson] = useState('')
    const [address, setAddress] = useState('')

    useEffect(() => {
        let temp = []
        temp = JSON.parse(window.localStorage.getItem('items'));
        setCartItems([...temp])
        setCartCount(temp.length)
    }, [])

    let navigate = useNavigate()  

    const goToCart = () => {
        navigate('/cart');
    }

    const calculateSubTotal = (current) => {
        // console.log(arr);
        let arr = []
        arr = [current]
        let price = 0;
        if(arr){
            arr.map((item)=>{
                price=item.price*item.quantity
            })
        }
        return price;
    }

    const calculateAmount = (arr) => {
        let amount=0;
        arr.map((item)=> (
            amount+=item.price*item.quantity
        ))
        return amount;
    }
    
  return (
    <div className="container">
        <div className="row">
            <h1>
                <a href="/">My Ecommerce Site</a>
                
                <span className="pull-right">
                    <button onClick={()=>goToCart()}>Cart ({cartCount})</button>
                </span>
            </h1>
            <hr></hr>
            <div className="col-md-12">
                <div className="panel panel-default">
                    <div className="panel-heading">Place Order</div>
                    <div className="panel-body">
                        <form className="form-horizontal" role="form">

                            <table className="table table-striped">
                                <thead className="table-head">
                                    <tr>
                                        <td>Product Name</td>
                                        <td> Quantity</td>
                                        <td> SubTotal</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems && cartItems.map((item) => (
                                        <tr>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td><i className="fa fa-inr">
                                            {calculateSubTotal(item)}
                                            </i></td>
                                    </tr>
                                    ))}
                                    <tr>
                                        <td><strong>Total</strong></td>
                                        <td>
                                            <strong>{cartCount}</strong>
                                        </td>
                                        <td><strong><i class="fa fa-inr"></i>{calculateAmount(cartItems)}</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                            <br />
                            <br />
                            <div className="form-group">
                                <label for="inputName3" className="col-sm-2 control-label">Enter Order Details</label>
                            </div>
                            <div className="form-group">
                                <label for="inputName3" className="col-sm-2 control-label">Name</label>
                                <div className="col-sm-6">
                                    <input className="form-control" id="inputName3" placeholder="Name" onChange={(e)=>setPerson(e.target.value)}></input>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputEmail3" className="col-sm-2 control-label">Address</label>
                                <div className="col-sm-6">
                                    <textarea className="form-control" id="inputEmail3"
                                        placeholder="Deliver Address" onChange={(e)=>setAddress(e.target.value)}></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 control-label"></label>
                                <div className="col-sm-6">
                                    <button className="btn btn-warning">Confirm Order</button>
                                </div>
                            </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Placeorder
