import React,{Component} from 'react'
import FilterableProductTable from "./products/FilterableProductTable";

class Home extends Component{
    render(){
        return(
            <div>
                Home!!!!
                <FilterableProductTable />
            </div>
        )
    }
}

export default Home