import React, { useState, useEffect } from "react";
export const Products = () => {
  const [products, setProducts] = useState([]);
  const [hasError, setError] = useState(false);
  
  useEffect(() => {
    fetchData();
  }, []);
  console.log(products);
  return (
    <main>
      <section>
        <div className="banner-innerpage">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 align-self-center text-center">
                <h1 className="title">Shop listing</h1>
                <h6 className="subtitle op-8">
                  We are small team of creative people working together
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="spacer">
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-9">
                <div className="row shop-listing">
                  {products.map((product, i) => (
                    <div className="col-lg-4">
                      <div className="card shop-hover border-0">
                        <img
                          src={"http://localhost:3000/" + product.image}
                          alt="wrapkit"
                          className="img-fluid"
                        />
                        <div className="card-img-overlay align-items-center">
                          <button
                            onClick={(e) => addToCart(product._id, 1)}
                            className="btn btn-md btn-info"
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                      <div className="card border-0">
                        <h6>
                          <a href="#" className="link">
                            {product.name}{" "}
                          </a>
                        </h6>
                        <h6 className="subtitle">by Wisdom</h6>
                        <h5 className="font-medium m-b-30">
                          $195 /{" "}
                          <del className="text-muted line-through">$225</del>
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};