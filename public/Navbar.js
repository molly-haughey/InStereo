import React from "react"
export const Navbar = () => {
  return ( 
        <nav className = "navbar" role="navigation" aria-label="main navigation">
            <div className = "navbar-brand">
                <a href="/" > View Cart </a>
                <a href="/"> Home </a> 
                <a href= "/cart">Cart</a> 
            </div>
            
        </nav>
  )
}