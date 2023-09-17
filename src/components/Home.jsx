import * as React from 'react';
import Navbar from './Navbar';
import Products from './Products';
import Footer from './Footer';
import Parse from 'parse';
import {useHistory} from 'react-router-dom';

const Home = (props) =>{
  const user = Parse.User.current();
  const [data,setData]=React.useState({
    results:[],count:0
  });
 const id = props.match.params.id;
 const history = useHistory();
  React.useEffect(()=>{
    const process = async()=>{
      try{
const query = new Parse.Query('Cart');
query.withCount();

const records = await query.find();
console.log(records);

await setData(records);
console.log(records)

      }
      catch(err){
alert(err.message)
      }
      
      
    }
    process();
  
  },[])
console.log(data);
  return (
    <div>
    
    <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
          <div className="container text-light">
            <div className="w-100 d-flex justify-content-between">
              <div>
                <i className="fa fa-envelope mx-2" />
                <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:Ibroheemabdkareem@gmail.com">Ibroheemabdkareem@gmail.com</a>
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
                  <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                </a>
                <a className="nav-icon position-relative text-decoration-none" href="#">
                  <i className="fa fa-fw fa-user text-dark mr-3" />
                  <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span>
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
        {/* Start Banner Hero */}
        <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to={0} className="active" />
            <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to={1} />
            <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row p-5">
                  <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                    <img className="img-fluid" src="data:image/jpeg;base64,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" width="50%" alt="" />
                  </div>
                  <div className="col-lg-6 mb-0 d-flex align-items-center">
                    <div className="text-align-left align-self-center">
                      <h1 className="h1 text-success">OMOYOMI</h1>
                      <h3 className="h2"></h3>
                      <p>
                        OMOYOMI  began its journey in 1995 with a vision to become a leading supplier of high-quality wire products for various industrial applications. Founded by Ibroheem Abdkareem, an experienced entrepreneur with a background in manufacturing, the company started as a small-scale venture operating from a modest warehouse.

In its early days, WireTech Solutions focused on manufacturing and selling traditional barb wire, catering primarily to the agricultural sector. As the company gained a reputation for its durable and reliable products, it steadily expanded its product line to include banding wire, BRC mesh, panel mesh, mesh wire, and various other wire-based solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row p-5">
                  <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                    <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEdg5mpJu7dAkWJiEgeXt8Z61lmpB_Wwp_5-8GktOtZw&s" alt="" />
                  </div>
                  <div className="col-lg-6 mb-0 d-flex align-items-center">
                    <div className="text-align-left">
                      <h1 className="h1">Proident occaecat</h1>
                      <h3 className="h2">Aliquip ex ea commodo consequat</h3>
                      <p>
                       With a commitment to innovation and continuous improvement, OMOYOMI Solutions invested in cutting-edge technology and modern manufacturing processes. This allowed them to not only enhance the quality of their products but also increase production capacity to meet growing demands.

Over the years, the company strategically diversified its customer base, targeting construction, fencing, and industrial sectors, among others. They earned the trust of customers by consistently delivering top-notch products and providing exceptional customer service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row p-5">
                  <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                    <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEdg5mpJu7dAkWJiEgeXt8Z61lmpB_Wwp_5-8GktOtZw&s" alt="" />
                  </div>
                  <div className="col-lg-6 mb-0 d-flex align-items-center">
                    <div className="text-align-left">
                      <h1 className="h1">Repr in voluptate</h1>
                      <h3 className="h2">Ullamco laboris nisi ut </h3>
                      <p>
                       

In recent years, the company has continued to innovate and adapt to changing market trends. They have embraced automation and digitalization to streamline processes and improve operational efficiency further. Additionally, WireTech Solutions has expanded its product offerings to include wire-related accessories and solutions to meet the evolving needs of their clients.

As of 2023, WireTech Solutions remains a market leader in the wire industry, with a global presence and a strong network of loyal customers. With their continued dedication to excellence, it is likely that the company will continue to thrive and make significant contributions to the wire products market in the future.


                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
            <i className="fas fa-chevron-left" />
          </a>
          <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
            <i className="fas fa-chevron-right" />
          </a>
        </div>
        {/* End Banner Hero */}
        {/* Start Categories of The Month */}
        <section className="container py-5">
          <div className="row text-center pt-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Categories of The Month</h1>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 p-5 mt-3">
              <a href="#"><img src="data:image/jpeg;base64,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" className="rounded-circle img-fluid border" /></a>
              <h5 className="text-center mt-3 mb-3">Barb wire </h5>
              <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
            </div>
            <div className="col-12 col-md-4 p-5 mt-3">
              <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEdg5mpJu7dAkWJiEgeXt8Z61lmpB_Wwp_5-8GktOtZw&s" className="rounded-circle img-fluid border" /></a>
              <h2 className="h5 text-center mt-3 mb-3">Panel mesh</h2>
              <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
            </div>
            <div className="col-12 col-md-4 p-5 mt-3">
              <a href="#"><img src="data:image/jpeg;base64,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" className="rounded-circle img-fluid border" /></a>
              <h2 className="h5 text-center mt-3 mb-3">Galvanize Chain Links</h2>
              <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
            </div>
          </div>
        </section>
        {/* End Categories of The Month */}
        {/* Start Featured Product */}
        <section className="bg-light">
          <div className="container py-5">
            <div className="row text-center py-3">
              <div className="col-lg-6 m-auto">
                <h1 className="h1">Featured Product</h1>
                <p>
                  Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>
            </div>
            <div className="row">
              
                {!data && (
                  
                    <div>
                       <h1>No item to display</h1>
                     </div>
                   
                )}
                        {
                        
                        data.results.length>0 && data.results.map((item)=>{
                  return (
                  
                    <div className="col-12 col-md-4 mb-4">
                    <div className="card h-100">
                  <a href={`/product/${item.id}`}>
                    <img src={item.get('url')} className="card-img-top" alt="..." />
                  </a>
                  <div className="card-body">

                    <ul className="list-unstyled d-flex justify-content-between">

                      <li>
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-muted fa fa-star" />
                        <i className="text-muted fa fa-star" />
                      </li>
                      <li className="text-muted text-right">{item.get('price')}</li>
                    </ul>
                    <a href="shop-single.html" className="h2 text-decoration-none text-dark">{item.get('name')}</a>
                    <p className="card-text">
                     {item.get('description')}
                    </p>
                    <p className="text-muted">Reviews {0}</p>
                  </div>
                </div>
                </div>
               
                  )
                })}
               </div>
               </div>
           
        
        </section>
        {/* End Featured Product */}
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
                    <a className="text-decoration-none" href="mailto:Ibroheemabdkareem@gmail.com">Ibroheemabdkareem@gmail.com</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 pt-5">
                <h2 className="h2 text-light border-bottom pb-3 border-light">Products</h2>
                <ul className="list-unstyled text-light footer-link-list">
                  <li><a className="text-decoration-none" href="/">Barb wire</a></li>
                  <li><a className="text-decoration-none" href="/">Barb wire</a></li>
                  <li><a className="text-decoration-none" href="/">Barb wire</a></li>
                 
                </ul>
              </div>
              <div className="col-md-4 pt-5">
                <h2 className="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                <ul className="list-unstyled text-light footer-link-list">
                  <li><a className="text-decoration-none" href="#">Home</a></li>
                  <li><a className="text-decoration-none" href="#">About Us</a></li>
                  <li><a className="text-decoration-none" href="#">Shop Locations</a></li>
                  <li><a className="text-decoration-none" href="#">FAQs</a></li>
                  <li><a className="text-decoration-none" href="#">Contact</a></li>
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
                    | Designed by <a rel="sponsored" href="https://https://my-port-d4597.web.app/" target="_blank">OMOYOMI</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        
      
   </div>

  
  )
  }  
  
  export default Home;