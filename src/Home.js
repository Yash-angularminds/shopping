import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [allProducts, setAllProducts] = useState([])
  const [listItems, setListItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const colors = ["bg-info", "bg-success", "bg-warning", "bg-danger"];
  
  let navigate = useNavigate()  

  useEffect(() => {

    let localdata = JSON.parse(localStorage.getItem('items'))
    if(localdata==null){
        localStorage.setItem('items',[])
    }
    else{
        setCartItems(localdata)
    }

    axios
      .get("http://interviewapi.ngminds.com/api/getAllProducts")
      .then((res) => {
        setAllProducts(res.data.products);
        let fourProd = [];
        let tempProds = res.data.products;
        let i = 0;
        while (i < tempProds.length) {
          fourProd.push(tempProds.slice(i, i + 4));
          i += 4;
        }
        setListItems(fourProd);
      });

    //   let count = localdata.length
    //   setCartCount(count)
    //   console.log(count);

  }, []);

  useEffect(() => {
    localStorage.setItem('items',JSON.stringify(cartItems))
    setCartCount(cartItems.length)
  }, [cartItems])
  

  const addToCart = (product) => {
    if (cartItems.filter((item) => item._id === product._id).length)
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  } 

  const goToCart = () => {
    navigate('/cart');
  }
  console.log(cartItems);
//   console.log(allProducts);

  return (
    <>
      <div className="container">
        <h1>
          <a href="/">My Ecommerce Site</a>
          <span className="pull-right">
            <button onClick={()=>goToCart()}>Cart ({cartCount})</button>
          </span>
        </h1>
        <hr></hr>
        {listItems.length && listItems.map((row) => (
          <>
            <div className="row">
            {row.length &&
                  row.map((product, i) => (
            <div className="col-md-3">
               <div className={colors[i % 4]}>
                    <img src={`http://interviewapi.ngminds.com/${product.image}`} width="100" height="200"></img>
                    <br></br>
                    <p>{product.name}</p>
                    <p><i className="fa fa-inr"></i>{product.price}</p>
                    <button className="btn btn-warning" onClick={()=> addToCart(product)}>Add to Cart</button>
                </div>
            </div>
          ))}
        </div>
          </>
        ))}
        <hr
        style={{
                  color: "#909090",
                  backgroundColor: "#909090",
                  borderColor: "#909090",
                }}
              />
    </div> 
    </>
  )

}

export default Home
