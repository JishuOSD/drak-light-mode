let moon = document.querySelector('.moon');
let sun = document.querySelector('.sun');
let body = document.querySelector('body');

moon.addEventListener('click', function(){
  body.classList.add("mode");
 if( body.classList.contains('mode')){
    moon.style. marginTop = '-100%';
 }
});

sun.addEventListener('click',function(){
    body.classList.remove("mode");
    if(!body.classList.contains('mode')){
    moon.style. marginTop = '0%';
    }
});