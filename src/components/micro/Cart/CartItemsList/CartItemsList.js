// REACT
import React, { useEffect, useState } from 'react'
import { Nav, Col, Container } from 'react-bootstrap'


// ESTILO
import '../../../../assets/css/Style.css'
import './CartItemsList.css'

// PÁGINAS/COMPONENTES
import CartItems from  '../CartItem/CartItems'


function ProductListCart(props) {
    //Ao renderizar irá pegar a lista de produtos do localStorage
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(JSON.parse(localStorage.getItem("cart")))
        
    }, [])
    

    const [price, setPrice] = useState(0.0)

    let finalPrice = 0;
    function getTotalPrice(totalPrice){
        finalPrice = finalPrice+totalPrice;
        //Está duplicando o valor total por algum motivo desconhecido
        setPrice(finalPrice);
    }

    //Remove um produto do carrinho
    function removeItem(product){
      var productIndex = products.indexOf(product);
      products.splice(productIndex, 1)

      var productString = JSON.stringify(products);
      localStorage.setItem("cart", productString)
      window.location.href='http://localhost:3000/cart'
    }

    //Remove produtos com mesmo ID do carrinho
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

        //Retorna um card para cada produto na lista
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

    //Carrinho Vazio
    if(products==null || products.length==0){
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

    //Carrinho com produtos
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