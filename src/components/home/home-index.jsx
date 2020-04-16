import React from "react";

const HomeIndex = () => {
  return (
    <div>
    




 <main id="main" role="main">
 <div className="container">
     <div className="row">
         <div className="col-lg-3">
             <div className="shop-category">
                 <h1 className="my-4 lead">B-Shop</h1>
                 <div className="list-group">
                     <a href="#" className="list-group-item active">Category 1</a>
                     <a href="#" className="list-group-item">Category 2</a>
                     <a href="#" className="list-group-item">Category 3</a>
                     <a href="#" className="list-group-item">Category 4</a>
                     <a href="#" className="list-group-item">Category 5</a>
                     <a href="#" className="list-group-item">Category 6</a>
                     <a href="#" className="list-group-item">Category 7</a>
                 </div>
             </div>
             <div className="recommended">
                 <h2 className="my-4 lead">Recommended</h2>
                 <div className="list-group">
                     <a href="#" className="list-group-item">Recently Viewed
                         <i className="fa fa-chevron-right"></i>
                     </a>
                     <a href="#" className="list-group-item">Best Sellers
                         <i className="fa fa-chevron-right"></i>
                     </a>
                     <a href="#" className="list-group-item">Best Of Phones
                         <i className="fa fa-chevron-right"></i>
                     </a>
                     <a href="#" className="list-group-item">Top Picks In Fashion
                         <i className="fa fa-chevron-right"></i>
                     </a>
                 </div>
             </div>
         </div>
         <div className="col-lg-9 pt-lg-5">
             <div id="carousel-slide" className="carousel slide my-4" data-ride="carousel">
                 <ol className="carousel-indicators">
                     <li data-target="#carousel-slide" data-slide-to="0" className="active"></li>
                     <li data-target="#carousel-slide" data-slide-to="1"></li>
                     <li data-target="#carousel-slide" data-slide-to="2"></li>
                 </ol>
                 <div className="carousel-inner" role="listbox">
                     <div className="carousel-item active">
                         <img className="d-block img-fluid" src="../img/item-1.jpeg" alt="First slide"/>
                     </div>
                     <div className="carousel-item">
                         <img className="d-block img-fluid" src="../img/item-2.jpeg" alt="Second slide"/>
                     </div>
                     <div className="carousel-item">
                         <img className="d-block img-fluid" src="../img/item-3.jpeg" alt="Third slide"/>
                     </div>
                 </div>
                 <a className="carousel-control-prev" href="#carousel-slide" role="button" data-slide="prev">
                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span className="sr-only">Previous</span>
                 </a>
                 <a className="carousel-control-next" href="#carousel-slide" role="button" data-slide="next">
                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
                     <span className="sr-only">Next</span>
                 </a>
             </div>
             <div className="row pt-lg-5">
                 <div className="col-lg-4 col-md-6 mb-4">
                     <div className="card h-100">
                         <a href="#">
                             <img className="card-img-top" src="../img/item-1.jpeg" alt="Item 1"/>
                         </a>
                         <div className="card-body">
                             <h4 className="card-title">
                                 <a href="#">Item One</a>
                             </h4>
                             <h5>$74.99</h5>
                             <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero architecto nisi iure
                                 optio aperiam ea obcaecati repellendus facilis, delectus aut doloribus eos quasi
                                 enim recusandae earum aspernatur, alias sint nobis?</p>
                         </div>
                         <div className="card-footer">
                             <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                         </div>
                     </div>
                 </div>

                 <div className="col-lg-4 col-md-6 mb-4">
                     <div className="card h-100">
                         <a href="#">
                             <img className="card-img-top" src="../img/item-2.jpeg" alt="Item Two"/>
                         </a>
                         <div className="card-body">
                             <h4 className="card-title">
                                 <a href="#">Item Two</a>
                             </h4>
                             <h5>$54.99</h5>
                             <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sit officia eum suscipit
                                 debitis vero nihil id consequatur, illo, mollitia labore voluptatum saepe ullam quaerat
                                 at repudiandae inventore, iusto placeat.</p>
                         </div>
                         <div className="card-footer">
                             <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                         </div>
                     </div>
                 </div>

                 <div className="col-lg-4 col-md-6 mb-4">
                     <div className="card h-100">
                         <a href="#">
                             <img className="card-img-top" src="../img/item-3.jpeg" alt="Item 3"/>
                         </a>
                         <div className="card-body">
                             <h4 className="card-title">
                                 <a href="#">Item Three</a>
                             </h4>
                             <h5>$24.99</h5>
                             <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit et pariatur ratione sit
                                 recusandae. Reprehenderit repellat, odit consectetur quo molestiae accusantium consequatur,
                                 adipisci dolores ipsam neque iure vitae ex velit?</p>
                         </div>
                         <div className="card-footer">
                             <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                         </div>
                     </div>
                 </div>

                 <div className="col-lg-4 col-md-6 mb-4">
                     <div className="card h-100">
                         <a href="#">
                             <img className="card-img-top" src="../img/item-3.jpeg" alt="Item 4"/>
                         </a>
                         <div className="card-body">
                             <h4 className="card-title">
                                 <a href="#">Item Four</a>
                             </h4>
                             <h5>$24.99</h5>
                             <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit unde provident iure,
                                 quisquam deserunt et cumque quos incidunt, magni saepe libero magnam voluptatum minus
                                 aliquid, fugiat eaque consectetur doloribus sequi!</p>
                         </div>
                         <div className="card-footer">
                             <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                         </div>
                     </div>
                 </div>

                 <div className="col-lg-4 col-md-6 mb-4">
                     <div className="card h-100">
                         <a href="#">
                             <img className="card-img-top" src="../img/item-2.jpeg" alt="Item Five"/>
                         </a>
                         <div className="card-body">
                             <h4 className="card-title">
                                 <a href="#">Item Five</a>
                             </h4>
                             <h5>$99.99</h5>
                             <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quos accusamus laborum
                                 quis recusandae, maxime adipisci, qui, magnam eaque deserunt eos officia veniam dolores!
                                 Reiciendis labore repellat quasi atque quam!</p>
                         </div>
                         <div className="card-footer">
                             <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                         </div>
                     </div>
                 </div>

                 <div className="col-lg-4 col-md-6 mb-4">
                     <div className="card h-100">
                         <a href="#">
                             <img className="card-img-top" src="../img/item-1.jpeg" alt="Item 6"/>
                         </a>
                         <div className="card-body">
                             <h4 className="card-title">
                                 <a href="#">Item Six</a>
                             </h4>
                             <h5>$1994.99</h5>
                             <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eligendi quod explicabo
                                 expedita, commodi possimus nobis cum, rerum adipisci veniam aliquid impedit ex quas
                                 maxime porro. Voluptatibus officiis delectus saepe!</p>
                         </div>
                         <div className="card-footer">
                             <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </div>
 <a href="#" className="btn btn-primary scrollUp">
     <i className="fa fa-arrow-circle-o-up"></i>
 </a>
</main>


</div>
);
};

export default HomeIndex;