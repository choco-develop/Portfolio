function show(){
    
    if(document.querySelector('#projects').style.display==="none")
    document.querySelector('#projects') .style.display ='inline'

  else{
    document.querySelector('#projects') .style.display ='none'
  }

}
document.querySelector('#button').addEventListener('click',show)
