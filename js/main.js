let agregar = document.getElementById("btnAgregar");
let nameProduct = document.getElementById("nameProduct");
let numberProducts = document.getElementById("numberProducts");
let tablaListaCompras = document.getElementById("tablaListaCompras");
let countProduct =0;
let totalPriceProducts = 0;
let totalProducts = document.getElementById("totalProducts");
let totalCostProducts = document.getElementById("totalCostProducts");
let cuerpoTabla =document.getElementsByTagName("tbody");

// cuerpoTabla[0].innerHTML =  `<tr>
//     <th scope="row">1</th>
//     <td>Leche descremada</td>
//     <td>3</td>
//     <td>$ 23.00</td>
//     </tr> `;
// Prueba 1
console.log(nameProduct,numberProducts);

function validarNombre() {
    if (nameProduct.value.length <3) {
        return false;
    }
    return true;
}

function validarCantidad(){
    if(numberProducts.value.length==0) {
        return false;
    }// if
     if (isNaN(numberProducts.value)){
        return false;
     }//if

     if (parseFloat(numberProducts.value)<=0) {
        return false;
     }//if
     return true;
}// validarCantidad


agregar.addEventListener("click",e=>
{   e.preventDefault();
   if (!(validarNombre())||!(validarCantidad())) {
       document.getElementById("alertValidacion").style.display="block"
       if (!validarNombre()){
        nameProduct.style.border = "red thin solid"
       }
       if (!validarCantidad()){
        numberProducts.style.border = "red thin solid"
       }
       setTimeout(() => {
        document.getElementById("alertValidacion").style.display="none"
      }, 5000)
       return false
   }
    nameProduct.style.border=""
    numberProducts.style.border=""
    countProduct++;
    let costProduct = Math.floor((Math.random()*50)*100)/100;
    
    let cantidadProduct = parseFloat(numberProducts.value);
    totalPriceProducts += (costProduct*cantidadProduct)
    totalCostProducts.innerHTML=`${totalPriceProducts}`
    console.log(totalCostProducts);
    let rowOfProducts =  
    `<tr>
    <th scope="row">${countProduct}</th>
    <td>${nameProduct.value}</td>
    <td>${numberProducts.value}</td>
    <td>${costProduct}</td>
    </tr> `;

    cuerpoTabla[0].innerHTML += rowOfProducts

    totalProducts.innerHTML=countProduct;

    nameProduct.value=""
    numberProducts.value=""
    nameProduct.focus();
     
}
)

nameProduct.addEventListener('blur',(e)=>{
    e.target.value = e.target.value.trim();
})
numberProducts.addEventListener('blur',(e)=>{
    e.target.value = e.target.value.trim();
})