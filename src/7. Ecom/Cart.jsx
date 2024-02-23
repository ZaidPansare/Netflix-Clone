import { useEffect, useState } from 'react'
import './Cart.css'
import GooglePayButton from '@google-pay/button-react'
import Navbar from './Navbar'

const Cart = ({cart,setCart}) => {

  const [price,setPrice] = useState(0)

  function handlePrice(){
    let ans=0
    cart.map((item)=>ans+=item.price*item.amount)
    setPrice(Number(ans.toFixed(2)))
  }

  function handleRemove(id){
    const del = cart.filter(i=>id!==i.id)
    setCart(del)
  }

  function handleInc(id){
    const updatedCart= cart.map((item)=>{
      if (item.id===id) {
        return{...item, amount: item.amount+1}
      }
      return item;
    });
    setCart(updatedCart)
  }

  function handleDec (id){
    const updatedCart = cart.map((item)=>{
      if (item.id===id && item.amount>1){
        return{...item, amount: item.amount-1}
      }
      return (item)
    });
    setCart(updatedCart)
  }

  useEffect(()=>{
    handlePrice()})

  return (
    <div className='main'>
              <Navbar  />
      <table>
        <thead>
          <tr>
            <td><b>Image</b></td>
            <td><b>Name</b></td>
            <td><b>Increase</b></td>
            <td><b>Quantity</b></td>
            <td><b>Decrease</b></td>
            <td><b>Total price</b></td>
            <td><b>Remove</b></td>
          </tr>
        </thead>
        <br />
        <tbody>
          {cart.map((item)=>{
            return(
              <tr key={item.id} id='abtbtn'>
                <td><img src={item.image} /></td>
                <td>{item.title}</td>
                <td><button onClick={()=>handleInc(item.id)}>+</button></td>
                <td>{item.amount}</td>
                <td><button onClick={()=>handleDec(item.id)}>-</button></td>
                <td>{item.price} $</td>
                <td id='del'><button onClick={()=>handleRemove(item.id)}>Delete</button></td>
              </tr>
            )           
          })}
          </tbody>
          <br />
          <tfoot>
            <tr>
              <td>Total Amount: </td>
              <td>{price} $</td>
              <td colSpan={5}>
              <GooglePayButton 
              environment="TEST"
              paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                  {
                    type: 'CARD',
                    parameters: {
                      allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                      allowedCardNetworks: ['MASTERCARD', 'VISA'],
                    },
                    tokenizationSpecification: {
                      type: 'PAYMENT_GATEWAY',
                      parameters: {
                        gateway: 'example',
                        gatewayMerchantId: 'exampleGatewayMerchantId',
                      },
                    },
                  },
                ],
                  merchantInfo: {
                    merchantId: '12345678901234567890',
                    merchantName: 'Demo Merchant',
                  },
                  transactionInfo: {
                    totalPriceStatus: 'FINAL',
                    totalPriceLabel: 'Total',
                    totalPrice: '100.00',
                    currencyCode: 'USD',
                    countryCode: 'US',
                  },
                }}
                onLoadPaymentData={paymentRequest => {
                  console.log('load payment data', paymentRequest);
                }}
              />
              </td>
              </tr>
              </tfoot>
              </table>
              </div>
              )
              }

export default Cart



