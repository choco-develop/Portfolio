function show(){
  const mobile=window.matchMedia('(max-width:480px)')
  if (mobile.matches){
    if( document.querySelector('#projects').style.display==="none" ){
    document.querySelector('#projects') .style.display ='inline'
    document.querySelector('#more').innerText="Less"
  }
  else{
    document.querySelector('#projects') .style.display ='none'
    document.querySelector('#more').innerText="See More"
  }
}
else{
  if( document.querySelector('#projects').style.display==="none" ){
    document.querySelector('#projects') .style.display ='flex'
    document.querySelector('#more').innerText="Less"
  }
  else{
    document.querySelector('#projects') .style.display ='none'
    document.querySelector('#more').innerText="See More"
  }

}

}
document.querySelector('#more').addEventListener('click',show)


function showMenu(){
  document.querySelector('.menu').classList.toggle('active')
 document.querySelector('.stopScroll').classList.toggle('active')
  }

document.querySelector('.phone').addEventListener('click',showMenu)

function showHome (){
  /*document.querySelector('.menu').classList.toggle('active')
  document.querySelector('.stopScroll').classList.toggle('active')*/
  showMenu()
}
document.querySelector('.menu').addEventListener('click',showHome)


function articleLess(){
  document.querySelector('.more').style.display="none"
  document.querySelector('.less').style.display="inline"
}
document.querySelector('.more').addEventListener('click',articleLess)