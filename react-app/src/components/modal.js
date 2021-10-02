import swal from 'sweetalert';

export function showModal(){
    swal({
        title: "Add product",
        text: "Do you want to add the product to the cart?",
        icon: "warning",
        buttons: ["No", "Yes"]
    }).then(response=>{
        if(response){

            // Logica para modificar la base de datos mockeada
            
            swal({
                text: "Producto added",
                icon: "success"
            })
        }
    })
}