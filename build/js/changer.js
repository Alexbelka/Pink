let items = document.querySelectorAll('.item');
let targets = document.querySelectorAll('.target');




for(let i = 0; i <targets.length; i++){

 targets[i].addEventListener('change',function (){

     for(let e = 0; e < items.length; e++){

         if(items[e].classList.contains(this.value)){

             items[e].style.display = 'block'

         }else{
             items[e].style.display ='none'
         }

     }

 })

}