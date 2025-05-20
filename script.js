let button = document.getElementById("search-button")
const seeAll = document.getElementById("button2")
const Select = document.querySelector("#choix")
let type_animal = document.getElementById("choix").value 
let ville = document.querySelector('input')
let benevole = document.querySelector('.benevole','.benevolex')

 
button.addEventListener("click",() => {
    const type_animal = document.getElementById("choix").value 
   let ville = document.querySelector('input').value
   window.location.href = "jadopte.html"+"?type=" + type_animal + "&city=" + ville 
    
})

seeAll.addEventListener("click",() => {
    console.log('popo')
    window.location.href = "jadopte.html" +"?type=" + "" + "&city=" +"";    
})


benevole.addEventListener("click",() => {
    console.log('popo')
    window.location.href = "benevole.html"
;    
})
