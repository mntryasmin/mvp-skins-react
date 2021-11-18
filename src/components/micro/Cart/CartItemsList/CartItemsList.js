// REACT
import React, { useEffect, useState } from 'react'
import { Nav, Col, Container } from 'react-bootstrap'


// ESTILO
import '../../../../assets/css/Style.css'
import './CartItemsList.css'

// PÁGINAS/COMPONENTES
import CartItems from  '../CartItem/CartItems'


function ProductListCart(props) {
    const [products, setProducts] = useState([])
    const [qtyCart, setQtyCart] = useState(0)
    
    console.log(products)
    useEffect(() => {
        setProducts(JSON.parse(localStorage.getItem("cart")))
        setQtyCart(JSON.parse(localStorage.getItem("qtyCart")))
        
    }, [])
    
    function removeItem(product){
      console.log(products.indexOf(product))
      var productIndex = products.indexOf(product);
      products.splice(productIndex, 1)

      var productString = JSON.stringify(products);
      localStorage.setItem("cart", productString)
      window.location.href='http://localhost:3000/cart'
    }

    function getCartItemsList() {
        products.forEach((p)=>{
            var num = products.indexOf(p);
            for(var i=num; i<products.length-1; i++){

                if(p.id == products[i+1].id){
                    products.splice((i+1), 1);
                }
            }
        })
        
        var productString = JSON.stringify(products);
        localStorage.setItem("cart", productString);

        return products.map((items) => {
            return (
                <>
                <div key={items.id}>
                  <CartItems  key={items.id} product={items} removeItem={removeItem} totalPrice={props.functionTotalPrice}/>
                </div>
                </>
            )
        })
    }

    if(products.length==0){
      return(
        <>
          <h1 className="card-title-mvp pt-4">Meus produtos</h1>
            <Nav className="pt-3 pb-2 px-0 product-list-cart card-caption-mvp" defaultActiveKey="/home" as="ul">
                <Col className="col-3">
                    <Nav.Item as="li"> Produto </Nav.Item>
                </Col>

                <Col className="col-4">
                    <Nav.Item as="li"> Descrição </Nav.Item>
             </Col>

                <Col className="col-3">
                <Nav.Item as="li"> Preço </Nav.Item>
                </Col>

                <Col className="col-2" >
                    <Nav.Item as="li"> Remover </Nav.Item>
                </Col>
            </Nav>
            <div className="cart-empty">Seu carrinho está vazio</div>
        </>
      )
    }
     return (
         <>
            <h1 className="card-title-mvp pt-4">Meus produtos</h1>
            <Nav className="pt-3 pb-2 px-0 product-list-cart card-caption-mvp" defaultActiveKey="/home" as="ul">
                <Col className="col-3">
                    <Nav.Item as="li"> Produto </Nav.Item>
                </Col>

                <Col className="col-4">
                    <Nav.Item as="li"> Descrição </Nav.Item>
             </Col>

                <Col className="col-3">
                <Nav.Item as="li"> Preço </Nav.Item>
                </Col>

                <Col className="col-2" >
                    <Nav.Item as="li"> Remover </Nav.Item>
                </Col>
            </Nav>

            {getCartItemsList()}
         </>
     )
}


export default ProductListCart