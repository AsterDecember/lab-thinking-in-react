import React,{Component} from 'react'
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import info from "../../data"
class FilterableProductTable extends Component{
    state = {
        data:info.data
    }
    render(){
        const {data} = this.state
        return(
            <div>
                FilterableProductTable Product table!!!!
                <SearchBar/>
                <ProductTable data={data}/>
            </div>
        )
    }
}

export default FilterableProductTable