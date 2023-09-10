function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('Light')
    
    
    const img = document.querySelector("#profile img")
   
     if(html.classList.contains('Light')) {
       img.setAttribute("src", "./assets/avatar-light.png")
       img.setAttribute("alt", "Foto de MykeBrito Sorrindo de óculos escuros")
       
    } else {
       img.setAttribute("src", "./assets/avatar.png")
       img.setAttribute("alt", "Foto de MykeBrito Sorrindo")
       
    }

    

    


}