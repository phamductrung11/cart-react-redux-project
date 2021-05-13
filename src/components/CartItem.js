import * as Message from "../constants/Message";
import React,{ Component } from 'react';

class CartItem extends Component {
    
    Onupdatequantity=(product,quantity)=>{
       if (quantity >0) {
          
           this.props.Onupdatequantity(product,quantity);
           this.props.Msgupdatequantity(Message.MSG_UPDATE_TO_CART_SUCCESS);
       }
      
    }
    subtotal=(price,quantity)=>{
     return price * quantity
    }
    hanldedelete=(product)=>{
        this.props.Deletecartbutton(product);
        this.props.Msgcartbutton(Message.MSG_DELETE_TO_CART_SUCCESS);
    }
  render(){
      var {cart}=this.props
      var {quantity}=cart;
  return (
    
          <tr>
                                <th scope="row">
                                    <img src={cart.product.image}
                                        alt="" className="img-fluid z-depth-0" />
                                </th>
                                <td>
                                    <h5>
                                        <strong>{cart.product.name}</strong>
                                    </h5>
                                </td>
                                <td>{cart.product.price}$</td>
                                <td className="center-on-small-only">
                                    <span className="qty">{quantity} </span>
                                    <div className="btn-group radio-group" data-toggle="buttons">
                                        <label 
                                        onClick={()=>this.Onupdatequantity(cart.product,cart.quantity-1)}
                                        className="btn btn-sm btn-primary
                                            btn-rounded waves-effect waves-light">
                                            <a href="/#/">—</a>
                                        </label>
                                        <label 
                                         onClick={()=>this.Onupdatequantity(cart.product,cart.quantity+1)}
                                        className="btn btn-sm btn-primary
                                            btn-rounded waves-effect waves-light">
                                            <a href="/#/">+</a>
                                        </label>
                                    </div>
                                </td>
                                <td>{this.subtotal(cart.product.price,cart.quantity)}$</td>
                                <td>
                                    <button onClick={()=>this.hanldedelete(cart.product)} className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                                        title="" data-original-title="Remove item">
                                        X
                                    </button>
                                </td>
                            </tr>

  );
}
}

export default CartItem;
