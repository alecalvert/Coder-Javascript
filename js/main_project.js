



let productos={}
let lista=[]
let compras=[]



function Items(it, tipo, pPedido, stockMax, imagen){
    this.it = it;
    this.tipo = tipo;
    this.pPedido = pPedido;
    this.stockMax = stockMax;
   
}

const item1 = new Items("Bananas", "Verduleria", 5, 8)
const item2 = new Items("Naranjas", "Verduleria", 3, 8)
const item3 = new Items("Mandarinas", "Verduleria", 3, 8)
const item4 = new Items("Leches", "Almacen", 3, 8)
const item5 = new Items("Yogurt", "Almacen", 3, 8)
const item6 = new Items("Manteca", "Almacen", 2, 4)
const item7 = new Items("Huevos", "Almacen", 4, 12)



lista = [item1,item2, item3, item4, item5, item6, item7]


for (let i = 0; i < lista.length; i+=1){

 productos=lista[i]

 productos.stock = prompt(`Cuántas ${lista[i].it} quedan?: `)

 
 for (key in productos){
   
    console.log(`${key}: ${productos[key]}`)
 }



 function Faltante(){
    if (productos.stock < productos.pPedido) {

        compras.push({elem:productos.it, tipo:productos.tipo, cant:productos.stockMax - productos.stock})
       
        
        return (`Cantidad de ${lista[i].it} a comprar: ${productos.stockMax - productos.stock}`)
    }

    else{
        return (`No necesitas comprar ${lista[i].it}`)
    }
 }

 
 console.log(Faltante())
 console.log("\n\n\n")

 
}


function borrar(){
    const elemento = document.querySelectorAll("h2")
    for (cosa of elemento){
        cosa.remove()
    }
}


function verdura(){
    borrar()
    const Verdu = compras.filter ((el) => el.tipo==="Verduleria")
    for (cosa of Verdu){
        let listado = document.createElement("h2")
        listado.innerHTML = cosa.elem + ":  " + cosa.cant
        document.body.append(listado)
    }
}

function almacen(){
    borrar()
    const Almac = compras.filter ((el) => el.tipo==="Almacen")
    for (cosa of Almac){
        let listado = document.createElement("h2")
        listado.innerHTML = cosa.elem + ":  " + cosa.cant
        document.body.append(listado)
    }
}


