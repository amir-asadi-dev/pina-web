const closs_Hamberger = document.getElementById('closs_Hamberger')
function Hamberger(state,element){
    if(state == "open"){
        element.nextElementSibling.classList.remove('translate-x-200')
        element.nextElementSibling.classList.add('translate-x-0')
    }
    if(state == "close"){
        element.parentElement.classList.remove('translate-x-0')
        element.parentElement.classList.add('translate-x-200')
    }
}