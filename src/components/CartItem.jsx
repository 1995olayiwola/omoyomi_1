import React from 'react';
import Parse from 'parse';

import {useHistory} from 'react-router-dom';
import { NavItem } from 'react-bootstrap';
import {useFlutterwave, closePaymentModal} from 'flutterwave-react-v3';


const CartItem = (props) => {
  const user = Parse.User.current();

  const [addUpdate,setAddUpdate] = React.useState(null);
  const [totalPrice,setTotalPrice]=React.useState([]);

  const config = {
    public_key: 'FLWPUBK-0d4e141809a7a2e0cf4085f54b4355fa-X',
    tx_ref: Date.now(),
    amount:totalPrice,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: user.get('email'),
      phone_number: user.get('number'),
      name: user.get('name'),
    },
    customizations: {
      title: 'OMOYOMI',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  
  const handleFlutterPayment = useFlutterwave(config);
const buyCart = (e)=>{
  e.preventDefault();
  handleFlutterPayment({
    callback: (response) => {
       console.log(response);
       if(response.status==='completed'){
        alert('success');
        handleSubmit();
       }else{
        alert('Transaction failed, try again.')
       }
        closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {
      alert('Transaction failed, try again.')
    },
  });
};

  const id = props.match.params.id;
  
  const [data,setData]=React.useState(
    {results:[],count:0}
  );
  
  const [count,setCount] = React.useState(1);
  
  const history = useHistory();
 React.useEffect(()=>{
  const process = async()=>{
try{
  const query = new Parse.Query('AddToCart');
  console.log(query)
  query.withCount();
 //query.equalTo('user',user);
 //query.equalTo('objectId',id)
  const records = await query.find();
  
  console.log(records);
   setData(records);
   const post = await query.first();
   console.log(post.get('total'));
   setTotalPrice(post.get('total'));

 
}catch(err){
alert(err.message)
}
  }
  process()
 },[id])
 const increment = ()=>{
 
  setCount((prev)=>{
return prev + 1;
  })
 
 }
 const decrement = ()=>{
  
  setCount((prev)=>{
return prev - 1;
  })

 }
 //add the total
 React.useEffect(()=>{

    let newTotalPrice = 0;
    
data?.products?.map((product)=>{
  console.log('product is:',product)
  const price = product.get('price');
  return  newTotalPrice += price;

  setTotalPrice(newTotalPrice);
})
    
    
 },[data.products])
 const deleteCartItem = async(e)=>{
  e.preventDefault();
try{
  const query = new Parse.Query('AddToCart');

 //query.equalTo('user',user);
 //query.equalTo('objectId',id)
  const post= await query.first();
  await post.destroy();
  history.push('/');
}
catch(err){
alert(err.message)
}
 }
 const handleSubmit = async()=>{
 try{


 }
 catch(err){
alert(err.message);
 }

 }
console.log(data);
console.log('total price is :',totalPrice)
 
  return (
    <div>
    
       
        {/* Start Top Nav */}
        <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
          <div className="container text-light">
            <div className="w-100 d-flex justify-content-between">
              <div>
                <i className="fa fa-envelope mx-2" />
                <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">Ibroheemabdkareem@gmail.com</a>
                <i className="fa fa-phone mx-2" />
                <a className="navbar-sm-brand text-light text-decoration-none" href="tel:010-020-0340">+2348062301273</a>
              </div>
              <div>
                <a className="text-light" href="https://fb.com/templatemo" target="_blank" rel="sponsored"><i className="fab fa-facebook-f fa-sm fa-fw me-2" /></a>
                <a className="text-light" href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram fa-sm fa-fw me-2" /></a>
                <a className="text-light" href="https://twitter.com/" target="_blank"><i className="fab fa-twitter fa-sm fa-fw me-2" /></a>
                <a className="text-light" href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin fa-sm fa-fw" /></a>
              </div>
            </div>
          </div>
        </nav>
        {/* Close Top Nav */}
        {/* Header */}
        <nav className="navbar navbar-expand-lg navbar-light shadow">
          <div className="container d-flex justify-content-between align-items-center">
            <a className="navbar-brand text-success logo h1 align-self-center" href="index.html">
              OMOYOMI
            </a>
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
              <div className="flex-fill">
                <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Shop</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="navbar align-self-center d-flex">
                <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                  <div className="input-group">
                    <input type="text" className="form-control" id="inputMobileSearch" placeholder="Search ..." />
                    <div className="input-group-text">
                      <i className="fa fa-fw fa-search" />
                    </div>
                  </div>
                </div>
                <a className="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                  <i className="fa fa-fw fa-search text-dark mr-2" />
                </a>
                <a className="nav-icon position-relative text-decoration-none" href="#">
                  <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1" />
                  <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">{data.count}</span>
                </a>
                <a className="nav-icon position-relative text-decoration-none" href="#">
                  <i className="fa fa-fw fa-user text-dark mr-3" />
                  <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">{}</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
        {/* Close Header */}
        {/* Modal */}
        <div className="modal fade bg-white" id="templatemo_search" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="w-100 pt-1 mb-5 text-right">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form action method="get" className="modal-content modal-body border-0 p-0">
              <div className="input-group mb-2">
                <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
                <button type="submit" className="input-group-text bg-success text-light">
                  <i className="fa fa-fw fa-search text-white" />
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Open Content */}
        <section className="bg-light">
        {data?.results?.length>0 && data.results.map((item)=>{
          
            
            return <div className="container pb-5" >
          
            <div className="row">
              <div className="col-lg-5 mt-5">
                <div className="card mb-3">
                  <img className="card-img img-fluid" src={item.get('url')} alt="Card image cap" id="product-detail" />
                </div>
                <div className="row">
                  {/*Start Controls*/}
                  
                  
                </div>
              </div>
              {/* col end */}
              <div className="col-lg-7 mt-5">
                <div className="card">
                  <div className="card-body">
                    <h1 className="h2">Price:</h1>
                    <p className="h3 py-2">#{item.get('price')}</p>
                    <h1 className="h2">Total:</h1>
                    <p className="h3 py-2">#{item.get('total')}</p>
                    <p>Quantity: {item.get('quantity')}</p>
                 
                   
                    <h6>Description:</h6>
                  <p>{item.get('discription')}</p>
                    
                    <form action method="GET">
                      <input type="hidden" name="product-title" defaultValue="Activewear" />
                      <div className="row">
                        <div className="col-auto">
                         
                            {
                              /*
                               <ul className="list-inline pb-3">
                                <li className="list-inline-item">Size :
                              <input type="hidden" name="product-size" id="product-size" defaultValue="S" />
                            </li>
                            <li className="list-inline-item"><span className="btn btn-success btn-size">S</span></li>
                            <li className="list-inline-item"><span className="btn btn-success btn-size">M</span></li>
                            <li className="list-inline-item"><span className="btn btn-success btn-size">L</span></li>
                            <li className="list-inline-item"><span className="btn btn-success btn-size">XL</span></li>
                          </ul>
                              
                              */
                            }
                          
                        </div>
                       
                      </div>
                      <div className="row pb-3">
                        <div className="col d-grid">
                          <button type="submit" className="btn btn-success btn-lg" name="submit" value="buy" onClick={buyCart}>Buy</button>
                        </div>
                        <div className="col d-grid">
                          <button type="submit" className="btn btn-success btn-lg" name="submit" value="addtocard" onClick={deleteCartItem}>Delete Cart</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>


            </div>
          </div>
        })}
        </section>
        {/* Close Content */}
        {/* Start Article */}
        {/*start of update total*/}

<div className="col-lg-7 mt-5">
                <div className="card">
                  <div className="card-body">
                   <h1>Total Items</h1>
                   
                <h5>#{totalPrice}</h5>
                    
                    <form action method="GET">
                      
                   
                      <div className="row pb-3">
                        <div className="col d-grid">
                          <button type="submit" className="btn btn-success btn-lg" name="submit" value="buy" onClick={buyCart}>Buy</button>
                        </div>
                        
                      </div>
                    </form>
                  </div>
                </div>
              </div>



{/*End of update total*/}
        {/* Start Footer */}
        <footer className="bg-dark" id="tempaltemo_footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4 pt-5">
                <h2 className="h2 text-success border-bottom pb-3 border-light logo">OMOYOMI</h2>
                <ul className="list-unstyled text-light footer-link-list">
                  <li>
                    <i className="fas fa-map-marker-alt fa-fw" />
                    Oribanwa, Ibeju Lekki,Lagos.
                  </li>
                  <li>
                    <i className="fa fa-phone fa-fw" />
                    <a className="text-decoration-none" href="tel:+2348062301273">+2348062301273</a>
                  </li>
                  <li>
                    <i className="fa fa-envelope fa-fw" />
                    <a className="text-decoration-none" href="mailto:info@company.com">Ibroheemabdkareem@gmail..com</a>
                  </li>
                </ul>
              </div>
             
              
            </div>
            <div className="row text-light mb-4">
              <div className="col-12 mb-3">
                <div className="w-100 my-3 border-top border-light" />
              </div>
              <div className="col-auto me-auto">
                <ul className="list-inline text-left footer-icons">
                  <li className="list-inline-item border border-light rounded-circle text-center">
                    <a className="text-light text-decoration-none" target="_blank" href="http://facebook.com/"><i className="fab fa-facebook-f fa-lg fa-fw" /></a>
                  </li>
                  <li className="list-inline-item border border-light rounded-circle text-center">
                    <a className="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram fa-lg fa-fw" /></a>
                  </li>
                  <li className="list-inline-item border border-light rounded-circle text-center">
                    <a className="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter fa-lg fa-fw" /></a>
                  </li>
                  <li className="list-inline-item border border-light rounded-circle text-center">
                    <a className="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin fa-lg fa-fw" /></a>
                  </li>
                </ul>
              </div>
              <div className="col-auto">
                <label className="sr-only" htmlFor="subscribeEmail">Email address</label>
                <div className="input-group mb-2">
                  <input type="text" className="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address" />
                  <div className="input-group-text btn-success text-light">Subscribe</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 bg-black py-3">
            <div className="container">
              <div className="row pt-2">
                <div className="col-12">
                  <p className="text-left text-light">
                    Copyright © {new Date().getFullYear()} OMOYOMI
                    | Designed by <a rel="sponsored" href="https://omoyomi.com" target="_blank">OMOYOMI</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* End Footer */}
        {/* Start Script */}
        {/* End Script */}
        {/* Start Slider Script */}
        {/* End Slider Script */}
        </div>
       
    
    
  
  )
}

export default CartItem