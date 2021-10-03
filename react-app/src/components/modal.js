import swal from 'sweetalert';
import axios from 'axios';
// import { CartContext } from '../contexts/CartContext'

export function showModal(id, desc, price){

    // const cartUser = useContext(CartContext)

    const url = "http://localhost:3002/cart"

    swal({
        title: `Add ${desc}`,
        text: `Do you want to add ${desc} to the cart for ${price}?`,
        icon: "warning",
        buttons: ["No", "Yes"]
    }).then(resp => {
        if(resp){
            axios({
                method: 'post',
                url: url,
                data: {
                    prodID: parseInt(id),
                    desc: desc,
                    price: price
                }
            }).then(response => {
                // console.log(response.status)
                if(response.status!==201){
                    console.log(products)
                    swal({
                        text: "The product could not be added to the cart",
                        icon: "error",
                        timer: "3000"
                    })
                }else{
                    swal({
                        text: "Producto added",
                        icon: "success",
                        timer: "3000"
                    })
                }
            })
        }
    })
}