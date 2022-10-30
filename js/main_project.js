



let productos={}
let lista=[]
let compras=[]
let compra_verd={}
let compra_alm={}



function Items(it, tipo, pPedido, stockMax, imagen){
    this.it = it;
    this.tipo = tipo;
    this.pPedido = pPedido;
    this.stockMax = stockMax;
   
}

const item1 = new Items("Bananas", "Verduleria", 5, 8)
const item2 = new Items("Naranjas", "Verduleria", 3, 8)
const item3 = new Items("Leches", "Almacen", 3, 8)
const item4 = new Items("Yogurt", "Almacen", 2, 5)
const item5 = new Items("Huevos", "Almacen", 4, 12)


lista = [item1,item2, item3, item4, item5]




function ingresar(){
    
    
    for(let elem of document.getElementById("items").children) {
        if(elem.selected==true){
            item=elem.value}
    }    
    stock = document.getElementById("cant").value

    for (cada of lista) {
        
        if(cada.it===item && cada.tipo==="Verduleria"){
            let item = cada.it
            console.log(item)
            if (cada.pPedido >stock){
            compra_verd[item] =  cada.stockMax - stock}
            console.log(compra_verd)
            const verdu_json = JSON.stringify(compra_verd)
            localStorage.setItem("verdu_json", verdu_json)    
            
        }   
        else if(cada.it===item && cada.tipo==="Almacen"){
        
            let item = cada.it
            console.log(item)
            if (cada.pPedido >stock){
            compra_alm[item] =  cada.stockMax - stock}
            console.log(compra_alm)

            const alm_json = JSON.stringify(compra_alm)
            localStorage.setItem("alm_json", alm_json)
        }
    }  

    document.getElementById("elform").reset(); 

}

 

function borrar(){
    const elemento = document.querySelectorAll("h4")
    for (cosa of elemento){
        cosa.remove()
        
    }
}


function verdura(){
    borrar()

    for (cosa in compra_verd){
        const listado = document.createElement("h4")
        listado.innerHTML = cosa + " : " + compra_verd[cosa] 
        prueba.appendChild(listado)
    }

}

function almacen(){
    borrar()

    for (cosa in compra_alm){
        const listado = document.createElement("h4")
        listado.innerHTML = cosa + " : " + compra_alm[cosa] 
        prueba.appendChild(listado)
    }

}

function recupera(){
    borrar()
    let final_verdu = JSON.parse(localStorage.getItem('verdu_json'))
    let final_alm = JSON.parse(localStorage.getItem('alm_json'))
    
    for (cosa in final_verdu){

        const listado = document.createElement("h4")
        listado.innerHTML = cosa + " : " + final_verdu[cosa] 
        final.appendChild(listado)
    }

    for (cosa in final_alm){

        const listado = document.createElement("h4")
        listado.innerHTML = cosa + " : " + final_alm[cosa] 
        final.appendChild(listado)
    }
   
}

