import React from 'react'
import { useNavigate } from 'react-router-dom'


function Placeorder() {

  let navigate = useNavigate()  

    const goToCart = () => {
        navigate('/cart');
    }
    
  return (
    <div className="container">
        <div className="row">
            <h1>
                <a href="/">My Ecommerce Site</a>
                
                <span className="pull-right">
                    <button onClick={()=>goToCart()}>Cart (0)</button>
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
                                        <td> Quntity</td>
                                        <td> SubTotal</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>H2O Sb104 Stainless Steel Sports </td>
                                        <td>2</td>
                                        <td><i className="fa fa-inr"></i>400</td>
                                    </tr>
                                    <tr>
                                        <td>bbb</td>
                                        <td>1</td>
                                        <td><i className="fa fa-inr"></i>1000</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Total</strong></td>
                                        <td>
                                            <strong> 3</strong>
                                        </td>
                                        <td><strong><i className="fa fa-inr"></i>2400 </strong></td>
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
                                    <input className="form-control" id="inputName3" placeholder="Name"></input>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputEmail3" className="col-sm-2 control-label">Address</label>
                                <div className="col-sm-6">
                                    <textarea className="form-control" id="inputEmail3"
                                        placeholder="Deliver Address"></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 control-label"></label>
                                <div className="col-sm-6">
                                    <a className="btn btn-warning">Confirm Order</a>
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