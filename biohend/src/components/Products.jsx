export default function Products(){
    return(
        <div className="product">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="titlepage">
                  <h2>Our Product</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 padding_left0">
                <div className="product_box">
                  <figure>
                    <img src="images/product1.jpg" alt="#" />
                  </figure>
                  <h3 className="black">Lavender Water</h3>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                <div className="product_box">
                  <figure>
                    <img src="images/product2.jpg" alt="#" />
                  </figure>
                  <h3>Lavender Oil</h3>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 padding_right0">
                <div className="product_box">
                  <figure>
                    <img src="images/product3.jpg" alt="#" />
                  </figure>
                  <h3>Soil</h3>
                </div>
              </div>
             
              
            </div>
          </div>
        </div>
    )
}