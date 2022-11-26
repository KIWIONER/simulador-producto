//simulador de compra
const comprarProductos = () => {
    let producto = '';
    let cantidad = 0;
    let precio = 0;
    let compraTotal = 0;
    let algoMas = false;

    do {
        producto = prompt('que quieres comprar? Tenemos sudaderas, camisetas y gorras')
        cantidad = parseInt(prompt ('¿Cuantas unidades quieres llevarte?'))

        let cantidadValidada = validarCantidad(cantidad);
        
    switch (producto) {
        case "sudaderas":
                precio = 69;
                break;
        case "camisetas":
                precio = 24;
                break;
        case "gorras":
                precio = 15;
                break;
        default:
            alert ('Algo no ha ido bien, vuelve a elegir qúe producto qieres');
            precio = 0;
            cantidad = 0;
    }
    compraTotal += precio * cantidadValidada;
    
    algoMas = confirm ('¿Quieres añadir algo más?');

    } while (algoMas)
    
    const totalConDescuento = aplicarDescuento(compraTotal);
    const totalConEnvio = calcularEnvio(totalConDescuento);

    return totalConEnvio;
}

function validarCantidad(cantidad) {
    while (Number.isNaN(cantidad) || cantidad === 0) {
        if (cantidad !== 0) {
            alert('Debe escribir un número.');
        } else {
            alert('Agrega la cantidad de productos que quieres.');
        }
        cantidad = parseInt(prompt('¿Cuántas unidades quieres llevarte?'));
    }
    return cantidad;
}

//aplicamos un descuento

const aplicarDescuento = (compraTotal) => {
    let totalDescuento = 0;

    if(compraTotal >= 20){
        totalDescuento = compraTotal * 0.2;
        return totalDescuento;
    }else{
        return compraTotal;
    }
}