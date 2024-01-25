let colorDiv=document.getElementById('colorDiv');


function randomColor(){
    let color='#';
    let letters='012345678ABCDEF';
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)]
    }
    return color
}

colorDiv.addEventListener('click',()=>{
    let backgroundColor=randomColor()
    colorDiv.style.backgroundColor=backgroundColor
})