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
  document.querySelector('.menu').classList.toggle('active')
}
document.querySelector('.menu').addEventListener('click',showHome)

/*function showProfile(){
  document.querySelector(".h1").style.display="none"
  
  document.querySelector("#blogs").style.display="none"
  document.querySelector("#mainAbout").style.display="none"
  document.querySelector("#all").style.display="none"
  document.querySelector("#myWork").style.display="none"

  
  document.querySelector('#profile').style.display='block'

  
}
document.querySelector('#hide').addEventListener('click',showProfile)*/

/**if(document.querySelector('.menu').classList.toggle('active')=="active"){
  document.querySelector('#body').'
    }
 else {
  document.querySelector('#body'). */