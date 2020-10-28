import React, { useState, useEffect } from "react";
export const Cart = (props) => {
  const [carts, setCarts] = useState([]);
  const [payload, setPayloader] = useState({});
  const [hasError, setError] = useState(false);
  async function fetchCart() {
    
  useEffect(() => {
    fetchCart();
  }, []);
  return (
    <main>
      <section>
        
          <div className="container">
           
                  <table className="table">
                    <tr className="tr-0">
                      <th className="th-0">Name</th>
                      <th className="th-0">Price</th>
                      <th className="th-0">Quantity</th>
                      <th className="th-0">Total Price</th>
                    </tr>
                    {carts.map((_vinyl, i) => (
                      <tr>
                        <td>{vinyl.title}</td>
                        <td>{vinyl.release}</td>
                        <td>
                          <button
                            onClick={(e) => increaseQty(vinyl.id)}
                            className="button"
                          >
                            +
                          </button>
                          {vinyl.quantity}
                          <button className="button">-</button>
                        </td>
                        <td className="text-right">
                          <h5>{vinyl.total}</h5>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td>
                        Subtotal :{payload.subTotal}
                      </td>
                      <td>
                        <button
                          className="button"
                          onClick={(e) => emptyCart()}
                        >
                          Empty cart
                        </button>
                      </td>
                    </tr>
                  </table>
                </div>
         
        
      </section>
    </main>
  );
                    };}