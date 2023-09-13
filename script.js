const uiswitch = document.querySelector('.checkbox');
const body = document.querySelector('body');
const strings = document.querySelectorAll('.string');

const menunav = document.querySelector('.navmenu');
const openbtn = document.querySelector('.openbtn');
const closebtn = document.querySelector('.closeBtn');

let isSwitched = false;
getdata();
uiswitch.addEventListener('click', () => {
    isSwitched = !isSwitched

    if(!isSwitched){
        body.classList.add('darkmode');
        strings.forEach(string => {
            string.style.color = 'hsl(0, 0%, 13%)';
        })
    }
    else{
        body.classList.remove('darkmode');
        strings.forEach(string => {
            string.style.color = 'hsl(0, 0%, 92%)';
        })
    }
    savedata();
})

openbtn.addEventListener('click', () => {
    menunav.style.width = '350px';
})
closebtn.addEventListener('click', () => {
    menunav.style.width = '0';
})
        
function savedata(){
    localStorage.setItem('saveTog', isSwitched);
}
function getdata(){
    isSwitched = localStorage.getItem('saveTog');
}