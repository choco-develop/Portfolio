


function consoleText(words, id, colors) {
  //if (colors === Undefined) colors = ['#fff'];
  let visible = true;
  let con = document.getElementById('console');
  let letterCount = 1;
  let x = 1;
  let waiting = false;
  let target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerText = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        let usedColor = colors.shift();
        colors.push(usedColor);
        let usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerText = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'consoleUnderscore hidden'
      visible = false;

    } else {
      con.className = 'consoleUnderscore'

      visible = true;
    }
  }, 400)
}
window.onload=consoleText(['Hello World!','I am Anita','I build for the web'], 'text',['#ffffff','#ffffff','#ffffff']);


window.onscroll =() => 
document.body.scrollTop > 20 || document.documentElement.scrollTop >20 ? document.querySelector('#arrow').style.display="block":document.querySelector('#arrow').style.display="none"



function show(){
  const mobile=window.matchMedia('(max-width:480px)')
  const tab=window.matchMedia(' (max-width:760px')
  if (mobile.matches || tab.matches){
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
 /*if( document.querySelector('.menu').classList.toggle('active')==false){
  document.querySelector('.menu').classList.add('reverse')
 }*/
 
 
 }
document.querySelector('.phone').addEventListener('click',showMenu)




function showHome (){
  /*document.querySelector('.menu').classList.toggle('active')
  document.querySelector('.stopScroll').classList.toggle('active')*/
  showMenu()
}
document.querySelector('.menu').addEventListener('click',showHome)


