import swal from 'sweetalert';
import axios from 'axios';

export function showModal(id, desc, price){

    const url = "http://localhost:3002/cart"
    const result = false

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
            }
            ).then(response => {
                if(response.status!==201){
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
                    const productQuantity = document.querySelector('.quantity-products')
                    const number = parseInt(productQuantity.innerHTML)+1
                    productQuantity.innerHTML = number
                }
            })
        }
    })
}