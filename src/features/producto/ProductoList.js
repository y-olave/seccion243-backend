import React from 'react'
import Producto from './Producto'
import { Row, Col } from 'antd'
import './ProductoList.css'

const ProductoList = () => {
    const datos = [
        {id:123,titulo:"Coca Cola", precio: 1200, descripcion:"Cocacola 2Lts, retornable Zero"},
        {id:124,titulo:"Fanta", precio: 1200, descripcion:"Fanta 2.5 Lts, retornable Zero"},
        {id:125,titulo:"Sprite", precio: 1200, descripcion:"Sprite 3Lts, retornable"},
    ]
    return (
        <Row gutter={16}>
            <Col className="gutter-box" >
                {
                    datos.map(elemento => 
                     <Producto items={elemento} />   
                    )
                }
                
            </Col>
        </Row>
    )
}
export default ProductoList;
