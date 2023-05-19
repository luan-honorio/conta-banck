let box = document.querySelectorAll('.box-contentTAB')
box.forEach((day,i) => {
    const grafico = document.querySelectorAll('.cores')
    const dindin = document.querySelectorAll('.dindin')
    box[i].addEventListener('mouseover',()=>{
        grafico[i].style.background = "hsl(186, 34%, 80%)";
        grafico[i].style.cursor = "pointer";
        dindin[i].style.display = "block";
    })
    box[i].addEventListener('mouseout',()=>{
        grafico[i].style.background = "hsl(10, 79%, 65%)";
        grafico[i].style.cursor = "pointer";
        dindin[i].style.display = "none";
    })
})
