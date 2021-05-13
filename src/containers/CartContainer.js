
import React,{ Component } from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Cart from "../components/Cart";
import CartItem from '../components/CartItem';
import Carttotal from "../components/Carttotal";
import * as actions from "../actions/index";
import* as Message from "../constants/Message";
class CartContainer extends Component {
    handleshowcartItem=(cart)=>{
      var result=<tr>
      <td>{Message.MSG_CART_EMPTY}</td>
       </tr>;
      var {Deletecartbutton,Msgcartbutton,Onupdatequantity,Msgupdatequantity}=this.props
      if(cart.length >0){
        result=cart.map((cart,index)=>{
            return <CartItem 
            cart={cart}
            Deletecartbutton={Deletecartbutton}
            Msgcartbutton={Msgcartbutton}
            Onupdatequantity={Onupdatequantity}
            Msgupdatequantity={Msgupdatequantity}
             key={index} 
             index={index}
              />
        })
      }
      return result;
     
    }
    handleshowcartTotal=(cart)=>{
        var result=null
        if(cart.length >0){
          result= <Carttotal cart={cart} />
        }
        return result;
    }
  render(){
      var {cart}=this.props;
  return (
     <Cart>
          {this.handleshowcartItem(cart)}
          {this.handleshowcartTotal(cart)}
     </Cart>
  
  );
}
}
CartContainer.propTypes={
    cart:PropTypes.arrayOf(PropTypes.shape({
     product:PropTypes.shape({
            id:PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image:PropTypes.string.isRequired,
            description:PropTypes.string.isRequired,
            price:PropTypes.number.isRequired,
            inventory:PropTypes.number.isRequired,
            rating:PropTypes.number.isRequired
        }),
     quantity:PropTypes.number.isRequired  
    })).isRequired,
    maptoSateProps:PropTypes.func
}

var maptoSateProps=state=>{
    return{
   cart:state.cart
    }
}
var maptodispatchProps=(dispatch,props)=>{
  return{
    Deletecartbutton:(product)=>{
    dispatch(actions.deletecartbutton(product));
    },
    Msgcartbutton:(message)=>{
    dispatch(actions.massage(message));
    },
    Onupdatequantity:(product,quantity)=>{
      dispatch(actions.onupdatequantity(product,quantity));
      },
    Msgupdatequantity:(message)=>{
        dispatch(actions.massage(message));
        },

  }
}

export default connect(maptoSateProps,maptodispatchProps)(CartContainer);
