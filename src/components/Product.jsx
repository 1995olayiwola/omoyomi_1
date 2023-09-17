import React from 'react';
import Parse from 'parse';
import {useHistory} from 'react-router-dom';
import Loading from './Loading';


const Product = (props) => {
    const id = props.match.params.id;
const[loading,setLoading] = React.useState(false);
// set new counter
const [count,setCount]=React.useState(1);
const increment = async()=>{
  setCount(count+1);
  try{
const query = new Parse.Query('Cart');
   const results = await query.first();




setTotalUp(+(results.get('price'))* count)
setUpdate(results.get('price'));


  }
  catch(err){
alert(err.message)
  }
  
}
const decrement = async()=>{
  setCount(count-1);
  if(count<=0 && count === 0){
    setCount(1)
  }
  try{
const query = new Parse.Query('Cart');
    const results = await query.first();


    setTotalUp(+(results.get('price'))* count)
    setUpdate(results.get('price'));

  }
  catch(err){
alert(err.message)
  }
}
//End of counter
//setupdate
const [update,setUpdate]=React.useState(0);
const [totalUp, setTotalUp] = React.useState(0);
const [allData,setAllData] = React.useState({
  records:[],count:0
})
  const [index, setIndex] = React.useState(0);
  const user = Parse.User.current();
  const [data,setData]=React.useState({
    results:[],count:0
  });
  

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const history = useHistory();
  React.useEffect(()=>{
    const process = async()=>{
      try{
const query = new Parse.Query('Cart');
query.withCount();
query.equalTo('user',user);
query.equalTo('objectId',id)
const records = await query.find();
console.log(records);

 setData(records);
console.log(records)

const query2 = new Parse.Query('Cart');
query2.withCount();

const record2 = await query2.find();

console.log(record2);
 setAllData(record2);

      }
      catch(err){
alert(err.message)
      }
      
      
    }
    process();
  },[id])
  console.log(update);
  
  const handleAddToCart = async(e)=>{
    e.preventDefault();
    console.log(totalUp)
    try{

     
      const query = new Parse.Query('Cart');
    
      
query.withCount();
query.equalTo('objectId',id)
const records = await query.first();
console.log(records);


const Post = Parse.Object.extend('AddToCart');
const post = new Post();
post.set('price',records.get('price'));
const y = +records.get('price') * count;
y.toString();
post.set('total',y);
post.set('name',records.get('name'));
post.set('url',records.get('url'));
post.set('type',records.get('type'));
post.set('quantity',count);
post.set('discription',records.get('description'));
const acl = new Parse.ACL();
acl.setWriteAccess(user,true);
acl.setReadAccess(user,true);
post.setACL(acl);
await post.save();

setLoading(true);

history.push('/cart');
setLoading(false);

    }catch(err){
alert(err.message)
    }
  }
 console.log('alldata are:',allData)
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
                  <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">0</span>
                </a>
                <a className="nav-icon position-relative text-decoration-none" href="#">
                  <i className="fa fa-fw fa-user text-dark mr-3" />
                  <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">0</span>
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
        {data.results.length>0 && data.results.map((item)=>{
          const total = +(item.get('price')) * count;
          //
            console.log(item)
            
            return <div className="container pb-5" >
            
          
            <div className="row">
              <div className="col-lg-5 mt-5">
                <div className="card mb-3">
                  <img className="card-img img-fluid" src={item.get('url')} alt="Card image cap" id="product-detail" />
                </div>
                <div className="row">
                  {/*Start Controls*/}
                  <div className="col-1 align-self-center">
                    <a href="#multi-item-example" role="button" data-bs-slide="prev">
                      <i className="text-dark fas fa-chevron-left" />
                      <span className="sr-only">Previous</span>
                    </a>
                  </div>
                  {/*End Controls*/}
                  {/*Start Carousel Wrapper*/}
                  <div id="multi-item-example" className="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel">
                    {/*Start Slides*/}
                    <div className="carousel-inner product-links-wap" role="listbox">
                      {/*First slide*/}
                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-4">
                            <a href="#">
                              <img className="card-img img-fluid" src={item.get('url')} alt="Product Image 1" />
                            </a>
                          </div>
                          <div className="col-4">
                            <a href="#">
                              <img className="card-img img-fluid" src={item.get('url')} alt="Product Image 2" />
                            </a>
                          </div>
                          <div className="col-4">
                            <a href="#">
                              <img className="card-img img-fluid" src={item.get('url')} alt="Product Image 3" />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*/.First slide*/}
                      {/*Second slide*/}
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-4">
                            <a href="#">
                              <img className="card-img img-fluid" src={item.get('url')} alt="Product Image 4" />
                            </a>
                          </div>
                          <div className="col-4">
                            <a href="#">
                              <img className="card-img img-fluid" src={item.get('url')} alt="Product Image 5" />
                            </a>
                          </div>
                          <div className="col-4">
                            <a href="#">
                              <img className="card-img img-fluid" src={item.get('url')} alt="Product Image 6" />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*/.Second slide*/}
                      {/*Third slide*/}
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-4">
                            <a href="#">
                              <img className="card-img img-fluid" src={item.get('url')} alt="Product Image 7" />
                            </a>
                          </div>
                          <div className="col-4">
                            <a href="#">
                              <img className="card-img img-fluid" src={item.get('url')} alt="Product Image 8" />
                            </a>
                          </div>
                          <div className="col-4">
                            <a href="#">
                              <img className="card-img img-fluid" src={item.get('url')} alt="Product Image 9" />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*/.Third slide*/}
                    </div>
                    {/*End Slides*/}
                  </div>
                  {/*End Carousel Wrapper*/}
                  {/*Start Controls*/}
                  <div className="col-1 align-self-center">
                    <a href="#multi-item-example" role="button" data-bs-slide="next">
                      <i className="text-dark fas fa-chevron-right" />
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                  {/*End Controls*/}
                </div>
              </div>
              {/* col end */}
              <div className="col-lg-7 mt-5">
                <div className="card">
                  <div className="card-body">
                    <h1 className="h2">Price:</h1>
                    <p className="h3 py-2">#{item.get('price')}</p>
                    <h1 className="h2">Total:</h1>
                    <p className="h3 py-2">#{total}</p>
                    <p className="py-2">
                      <i className="fa fa-star text-warning" />
                      <i className="fa fa-star text-warning" />
                      <i className="fa fa-star text-warning" />
                      <i className="fa fa-star text-warning" />
                      <i className="fa fa-star text-secondary" />
                      <span className="list-inline-item text-dark">Rating {0} | {0} Comments</span>
                    </p>
                   
                    <h6>Description:</h6>
                  <p>{item.get('description')}</p>
                    
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
                        <div className="col-auto">
                          <ul className="list-inline pb-3">
                            <li className="list-inline-item text-right">
                              Quantity
                              <input type="hidden" name="product-quanity" id="product-quanity" defaultValue={1} />
                            </li>
                            <li className="list-inline-item"><span className="btn btn-success" id="btn-minus" onClick={decrement}>-</span></li>
                            <li className="list-inline-item"><span className="badge bg-secondary" id="var-value">{count}</span></li>
                            <li className="list-inline-item"><span className="btn btn-success" id="btn-plus" onClick={increment}>+</span></li>
                          </ul>
                        </div>
                      </div>
                      <div className="row pb-3">
                        <div className="col d-grid">
                          <button type="submit" className="btn btn-success btn-lg" name="submit" value="buy">Buy</button>
                        </div>
                        <div className="col d-grid">
                          {loading && <Loading/>}
                          <button type="submit" className="btn btn-success btn-lg" name="submit" value="addtocard" onClick={handleAddToCart}>Add To Cart</button>
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
        <section className="py-5">
          <div className="container">
            <div className="row text-left p-2 pb-3">
              <h4>Related Products</h4>
            </div>
            {/*Start Carousel Wrapper*/}
            
             
              
                {allData?.results?.length>0 && allData?.results?.map((item2)=>{
                  return (
                  <div id="carousel-related-product" key={item2.id}>
                  
                    <div className="p-2 pb-3">
                    <div className="product-wap card rounded-0">
                  <div className="card rounded-0">
                    <img className="card-img rounded-0 img-fluid" src={item2.get('url')} />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li><a className="btn btn-success text-white" href='/'><i className="far fa-heart" /></a></li>
                        <li><a className="btn btn-success text-white mt-2" href="/"><i className="far fa-eye" /></a></li>
                        <li><a className="btn btn-success text-white mt-2" href="/"><i className="fas fa-cart-plus" /></a></li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="card-body">
                    <a href="shop-single.html" className="h3 text-decoration-none">{item2.get('name')}</a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>{item2.get('type')}</li>
                      <li className="pt-2">
                        <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                      </li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                      <li>
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-muted fa fa-star" />
                      </li>
                    </ul>
                    <p className="text-center mb-0">#{item2.get('price')}</p>
                  </div>
                </div>
              </div>
                    
                     </div>
                  )
                })}
                
            
           
          </div>
        </section>
        {/* End Article */}
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
                    <a className="text-decoration-none" href="mailto:info@company.com">Ibroheemabdkareem@gmail.com</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 pt-5">
                <h2 className="h2 text-light border-bottom pb-3 border-light">Products</h2>
                <ul className="list-unstyled text-light footer-link-list">
                  <li><a className="text-decoration-none" href="/">Barb wire</a></li>
                  <li><a className="text-decoration-none" href="/">Barb wire</a></li>
                  <li><a className="text-decoration-none" href="/">Barb wire</a></li>
                  <li><a className="text-decoration-none" href="/">Barb wire</a></li>
                  <li><a className="text-decoration-none" href="/">Barb wire</a></li>
                  <li><a className="text-decoration-none" href="/">Barb wire</a></li>
                  <li><a className="text-decoration-none" href="/">Barb wire</a></li>
                </ul>
              </div>
              <div className="col-md-4 pt-5">
                <h2 className="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                <ul className="list-unstyled text-light footer-link-list">
                  <li><a className="text-decoration-none" href="/">Home</a></li>
                  <li><a className="text-decoration-none" href="/">About Us</a></li>
                  <li><a className="text-decoration-none" href="/">Shop Locations</a></li>
                  <li><a className="text-decoration-none" href="/">FAQs</a></li>
                  <li><a className="text-decoration-none" href="/">Contact</a></li>
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

export default Product