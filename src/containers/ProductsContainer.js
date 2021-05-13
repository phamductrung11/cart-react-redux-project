
import React,{ Component } from 'react';
import Products from "../components/Products";
import Product from "../components/Product";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {addtocart,massage} from "../actions/index"
class ProductsContainer extends Component {
    handleproducts=(products)=>{
        var result = null;
        var {Addtocart,Msgsuccess}=this.props
        if (products.length > 0) {
            result = products.map((products,index)=>{
                return <Product 
                product={products}
                 key={index}
                 Addtocart={Addtocart}
                 Msgsuccess={Msgsuccess}
                  index={index}/>
            }) 
            
        }
        return result
     }
  render(){
      var {products}=this.props;
  return (
      <Products>
      {this.handleproducts(products)}
      </Products>
  
  );
}
}
ProductsContainer.propTypes={
    products:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image:PropTypes.string.isRequired,
            description:PropTypes.string.isRequired,
            price:PropTypes.number.isRequired,
            inventory:PropTypes.number.isRequired,
            rating:PropTypes.number.isRequired
        })
    ).isRequired
}

var maptoSateProps=state=>{
    return{
   products:state.products
    }
}
var maptodispatchProps=(dispatch,props)=>{
    return{
   Addtocart:(product)=>{
    dispatch(addtocart(product,1))
   },
   Msgsuccess:(message)=>{
    dispatch(massage(message))
   }
    }
}

export default connect(maptoSateProps,maptodispatchProps)(ProductsContainer);
