



let productos={}
let lista=[]
let compras=[]
let compra_verd={}
let compra_alm={}
let tabla = []



const links = document.querySelectorAll('nav a')


const obtenerData = () => {
    fetch("./data/data.json")
        .then((respuesta) => {
            
            return respuesta.json()
        })
        .then((datos) => {
            lista = datos
            
        })
        .catch((error) => {
            alert(error)
        })
}



obtenerData()





function ingresar(){
    
    
    for(let elem of document.getElementById("items").children) {
        if(elem.selected==true){
            item=elem.value}
    }    
    stock = document.getElementById("cant").value

    for (cada of lista) {
        
        if(cada.it===item && cada.tipo==="Verduleria"){
            let item = cada.it
            
            if (cada.pPedido >stock){
            compra_verd[item] =  cada.stockMax - stock}
            
            /* const verdu_json = JSON.stringify(compra_verd)
            localStorage.setItem("verdu_json", verdu_json) */    
            
        }   
        else if(cada.it===item && cada.tipo==="Almacen"){
        
            let item = cada.it
            
            if (cada.pPedido >stock){
            compra_alm[item] =  cada.stockMax - stock}
            

            /* const alm_json = JSON.stringify(compra_alm)
            localStorage.setItem("alm_json", alm_json) */
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
        milista.appendChild(listado)
        }
}



function almacen(){
    borrar()
    
        for (cosa in compra_alm){
            const listado = document.createElement("h4")
            listado.innerHTML = cosa + " : " + compra_alm[cosa] 
            milista.appendChild(listado)
    }

}


async function sumban()   {
                       
    const {value: cantban}  =  await Swal.fire({
        title: 'Cuánto llevas?',
        icon: 'question',
        input: 'number',
        inputLabel: 'Cantidad',
        
        inputAttributes: {
            min: 1,
            max: 15,
            step: 1,
                                },
        inputValue: 5,
        
    })
    
    if (cantban < compra_verd["Bananas"]) {
        Swal.fire(`Faltan: ${compra_verd["Bananas"]-cantban}`)}
    else  {
        Swal.fire("Perfecto!")
    } 
    
    
    tabla.bananas=cantban
    
   

}  

    


async function sumdur()   {
                       
    const {value: cantdur}  =  await Swal.fire({
        title: 'Cuánto llevas?',
        icon: 'question',
        input: 'number',
        inputLabel: 'Cantidad',
        
        inputAttributes: {
            min: 1,
            max: 15,
            step: 1,
                                },
        inputValue: 5,
        
    })
    
    if (cantdur < compra_verd["Duraznos"]) {
        Swal.fire(`Faltan: ${compra_verd["Duraznos"]-cantdur}`)}
    else  {
        Swal.fire("Perfecto!")
    } 
    
    tabla.duraznos=cantdur
       
}  

async function sumhar()   {
                       
    const {value: canthar}  =  await Swal.fire({
        title: 'Cuánto llevas?',
        icon: 'question',
        input: 'number',
        inputLabel: 'Cantidad',
        
        inputAttributes: {
            min: 1,
            max: 5,
            step: 1,
                                },
        inputValue: 2,
        
    })
    
    if (canthar < compra_alm["Harina"]) {
        Swal.fire(`Faltan: ${compra_alm["Harina"]-canthar}`)}
    else  {
        Swal.fire("Perfecto!")
    } 
    
    
    tabla.harina=canthar
    
          
    
}

async function sumfid()   {
                       
    const {value: cantfid}  =  await Swal.fire({
        title: 'Cuánto llevas?',
        icon: 'question',
        input: 'number',
        inputLabel: 'Cantidad',
        
        inputAttributes: {
            min: 1,
            max: 6,
            step: 1,
                                },
        inputValue: 3,
        
    })
    
    if (cantfid < compra_alm["Fideos"]) {
        Swal.fire(`Faltan: ${compra_alm["Fideos"]-cantfid}`)}
    else  {
        Swal.fire("Perfecto!")
    } 
    
    tabla.fideos=cantfid
        
}



document.querySelector("#banana").addEventListener("click", sumban)
document.querySelector("#durazno").addEventListener("click", sumdur)
document.querySelector("#harina").addEventListener("click", sumhar)
document.querySelector("#fideos").addEventListener("click", sumfid)


function comprafinal(){
    console.log(tabla)
    
    const ultimo = document.querySelector("#elcarro")
    ultimo.innerHTML = `<div id="paq">
                        <h3>Comprando:</h3>
                        <br>
                        <p>Bananas: ${tabla.bananas}  &ensp;- &ensp;Tot:  $${lista[0].precio*tabla.bananas}</p>
                        <p>Duraznos: ${tabla.duraznos} &ensp;- &ensp;Tot:  $${lista[1].precio*tabla.duraznos}</p>                            
                        <p>Harina: ${tabla.harina} &ensp;- &ensp;Tot:  $${lista[2].precio*tabla.harina}</p>   
                        <p>Fideos: ${tabla.fideos} &ensp;- &ensp;Tot:  $${lista[3].precio*tabla.fideos}</p>                         
    
                        </div>
    `
    
}
    
function borrar2(){
    const elemento = document.querySelector("#paq")
    
        elemento.remove()
        
}