let theme = localStorage.getItem('data-theme');
let firstVisit = localStorage.getItem('first-visit');
const checkbox = document.getElementById("switch");

//cambia il tema in dark
const changeThemeToDark = () =>{
    document.documentElement.setAttribute("data-theme", "dark")
    localStorage.setItem("data-theme", "dark")
}
//cambia il tema in light
const changeThemeToLight = () =>{
    document.documentElement.setAttribute("data-theme", "light")
    localStorage.setItem("data-theme", 'light') 
}


//controllo sullo stato dello slide
checkbox.addEventListener('change', ()=> {
    let theme = localStorage.getItem('data-theme');
    if (theme ==='dark'){
        changeThemeToLight()
    }else{
        changeThemeToDark()
    }
   
});

window.addEventListener('load',()=> {
    //Controllo prima visita cerco se il browser ha un tema dark ed è la prima visita
    if(firstVisit == null){ 
        if((window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) == true){
            console.log("è la prima visita il tema è nero");
            localStorage.setItem('first-visit', false); //setto la variabile di controllo
            checkbox.checked = true;
            changeThemeToDark(); //cambio il tema
            
        }
        else{
            console.log("è la prima visita il tema è bianco");
            localStorage.setItem('first-visit', false);
        }
    } else{ //non è la prima visita
        if (theme === 'dark'){ 
            //nel caso la pagina viene aggiornata
            checkbox.checked = true;
            changeThemeToDark(); 
        } else{ checkbox.checked = false;}
    }
});