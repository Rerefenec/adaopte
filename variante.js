let button = document.getElementById("search-button")
let animalsGrid = document.getElementById("inclusion")
let change = document.querySelector(".orange-button")
const Select = document.querySelector("#choix")
let type_animal = document.getElementById("choix").value 
let ville = document.querySelector('input')
let buttonAccueil = document.getElementById("page-d-accueil")


 async function selectedAnimal() {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const city = urlParams.get('city');
    const reponse = await fetch('animaux.json');
    const data = await reponse.json();
    let openDoor = true
    
    
    for(let i=0 ; i< data.length ; i++){

         if((data[i].type.toLowerCase() === type.toLowerCase() || type=='') && (data[i].city.toLowerCase() === city.toLowerCase() || city=='')) {
            const inclusion =document.createElement('div')
            inclusion.innerHTML=`
            <div id='bulle-page2'>
            <img src="${data[i].imageUrl}" class='image'></img>
           <p>type :${data[i].type} </p>
           <p>nom: ${data[i].name}</p>
           <p>age: ${data[i].age}</p>
           <p>localisation: ${data[i].city}</p>
           </div>
            `
            animalsGrid.appendChild(inclusion)
           openDoor= false
            }
    }  
    return openDoor
  }

   async function noAnswer () {
     let openDoor =  await selectedAnimal()
   if (openDoor == true){
      const inclusion =document.createElement('div')
      inclusion.innerHTML=`
      <div id='bulle-page2'>
      <p>Rien ne correspond à votre recherche 🙁</p>
   `
     animalsGrid.appendChild(inclusion)
   }
  }
  
  async function chooseAnimal() {
      animalsGrid.innerHTML=''
      noAnswer()
  }




chooseAnimal()

button.addEventListener("click",(e) => {
   e.preventDefault();
   const type_animal = document.getElementById("choix").value ;
  let ville = document.querySelector('input').value;
  window.location.href = "jadopte.html"+"?type=" + type_animal + "&city=" + ville ;
   
})

buttonAccueil.addEventListener("click",(e) => {
   e.preventDefault();
 console.log("dze")
  window.location.href = "index.html";
   
})