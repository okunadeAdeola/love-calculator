function checkValue() {
   let inp = document.getElementById('inp1').value 
   let inp2 = document.getElementById('inp2').value 
   let op = (Math.random()*100).toFixed(0)
   if(inp === '' || inp2 === ''){
      error.style.display = 'block'
    setTimeout(() => {
      error.style.display = 'none' 
    }, 2000);
} else if(op >= 0 &&  op <= 20){
  show.innerHTML = `${inp.value} below is the compatibility percentage of you and ${inp2}  <p>${op}%</p> <p>Unfortunately you are not compatible💔💥</p>`
  show.style.display = 'block'
   } else if(op >= 21 && op <= 40){
    show.innerHTML = `${inp.value} below is the compatibility percentage of you and ${inp2} <p>${op}%</p> <p>Sorry, your future is not bright together </p>` 
    show.style.display = 'block'
   }
   else if(op >= 41 && op <= 70){
    show.innerHTML = `${inp.value} below is the compatibility percentage of you and ${inp2} <p>${op}%</p> <p>Your relationship is compatible but won't last long</p>` 
    show.style.display = 'block'
   }
   else if(op >=71 && op <= 100){
    show.innerHTML = `${inp.value} below is the compatibility percentage of you and ${inp2} <p>${op}%</p> <p>Your future is bright together and i wish you Happy Married life in Advance</p>`
    show.style.display = 'block'
   } 
   else if(inp === "Adeola" && inp2 === "Khadijah"){
         show.innerHTML = `${op}100`
   }
   document.getElementById('inp1'). value = ''
   document.getElementById('inp2'). value = ''
}