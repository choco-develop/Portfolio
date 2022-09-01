function show(){
    
    if(document.querySelector('#projects').style.display==="none" ){
    document.querySelector('#projects') .style.display ='flex'
    document.querySelector('#more').innerText="Less"
  }
  else{
    document.querySelector('#projects') .style.display ='none'
    document.querySelector('#more').innerText="See More"
  }

}
document.querySelector('#more').addEventListener('click',show)


function showMenu(){
  document.querySelector('.menu').classList.toggle
}
document.querySelector('.phone').addEventListener('click',showMenu)
