//simulador de compra
const comprarProductos = () => {
    let producto = '';
    let cantidad = 0;
    let precio = 0;
    let compraTotal = 0;
    let algoMas = false;
    let conTarjeta = true;
    let pagarConTarjeta = 0;
    let confirmarTarjeta = 0;
   // let datosTarjeta= 0;
    //let confirmarTarjeta = pagarConTarjeta;

    do {
        producto = prompt('que quieres comprar? Tenemos sudaderas, camisetas y gorras')
        cantidad = parseInt(prompt ('¿Cuantas unidades quieres llevarte?'))

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
    compraTotal += precio * cantidad
    alert ('el total son '+compraTotal+'€')
    
    algoMas = confirm ('¿Quieres añadir algo más?');
    
    } while (algoMas)
    
    conTarjeta = confirm ('Quieres pagar con tarjeta?');
        
    do{
        pagarConTarjeta = parseInt(prompt('Añada el número de su tarjeta'));
        confirmarTarjeta = parseInt(prompt('Confirme el número de su tarjeta'));;  
        
        if (pagarConTarjeta === confirmarTarjeta){
                alert ('el numero es correcto, hemos deducido de su cuenta el importe de'+compraTotal+'€.')
                }else{ 
                    alert ('El numero es incorrecto')        
        }
        conTarjeta = confirm ('Deseas comprar algo más?');
            if (conTarjeta){
                do {
                    producto = prompt('que quieres comprar? Tenemos sudaderas, camisetas y gorras')
                    cantidad = parseInt(prompt ('¿Cuantas unidades quieres llevarte?'))
            
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
                compraTotal += precio * cantidad
                alert ('el total son '+compraTotal+'€')
                
                algoMas = confirm ('¿Quieres añadir algo más?');
                
                } while (algoMas)
        }
        }while (conTarjeta)
    }
comprarProductos()