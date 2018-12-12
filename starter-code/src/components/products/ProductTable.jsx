import React from 'react'
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({data})=> {

    const drawProduct = (data) =>{
        return data.map((element,index) => <ProductRow key={index}  {...element}/>)
    }

    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <ProductCategoryRow/>
                {drawProduct(data)}
            </tbody>
        </table>
    )
}

export default ProductTable