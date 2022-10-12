import React, { useEffect, useState } from 'react'
import Producto from './Producto'
import { Row, Col } from 'antd'
import './ProductoList.css'
import axios from 'axios'

const data = [
    { key: "1", imagen: "https://joeschmoe.io/api/v1/2", precio: "Detalle 2", cantidad: "Titulo 2312" },
    { key: "2", imagen: "https://joeschmoe.io/api/v1/1", precio: "Detalle 1", cantidad: "Titulo 1" },

]
const ProductoList = () => {

    const [basedatos, setBasedatos] = useState(data);
    
    const handleEdit = () => {
        basedatos.map( (elemento) => {
            console.log(elemento)
            return(
                elemento
                );
            }
            
            )
            
        }
        useEffect(()=>{
            const resultado = axios.get("https://g9cd7530b8a8613-db20220601151235.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/producto/").then((response) => {
                setBasedatos(response.data.items)
                console.log("BASEDATOS", basedatos);
            })
        },[])
        return (
            <Row gutter={16}>
            {
                // indicates very long content
                // Array.from(
                //     {
                //         length: 100,
                //     },
                //     (_, index) => (
                //         <Col className="gutter-box" >
                //             <Producto />
                //         </Col>
                //     ),
                // )
                basedatos.map(elemento => {
                    return(
                    <Col className="gutter-box" >
                        <Producto key={elemento.key} valor={elemento} onClick={handleEdit} />
                    </Col>
                    )
                    
                })
            }
        </Row>
    )
}
export default ProductoList;
