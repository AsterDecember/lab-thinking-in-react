import React from 'react'

const ProductRow = ({category,price,stocked,name})=> {
    return(
        <tr>
            <th>{name}</th>
            <th>{price}</th>
        </tr>
    )
}

export default ProductRow