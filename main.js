let theme = localStorage.getItem('data-theme');
let firstVisit = localStorage.getItem('first-visit');
const checkbox = document.getElementById("switch");

//change theme to dark
const changeThemeToDark = () =>{
    document.documentElement.setAttribute("data-theme", "dark")
    localStorage.setItem("data-theme", "dark")
}
//change theme to light
const changeThemeToLight = () =>{
    document.documentElement.setAttribute("data-theme", "light")
    localStorage.setItem("data-theme", 'light') 
}


//control on slide event
checkbox.addEventListener('change', ()=> {
    let theme = localStorage.getItem('data-theme');
    if (theme ==='dark'){
        changeThemeToLight()
    }else{
        changeThemeToDark()
    }
   
});

window.addEventListener('load',()=> {
    //Control of first visit browser preference
    if(firstVisit == null){ 
        if((window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) == true){
            console.log("system theme is black");
            localStorage.setItem('first-visit', false); //set control on first visit
            checkbox.checked = true;
            changeThemeToDark(); 
            
        }
        else{
            console.log("system theme is white");
            localStorage.setItem('first-visit', false);
        }
    } else{ //isn't first visit
        if (theme === 'dark'){ 
            //if user reload page
            checkbox.checked = true;
            changeThemeToDark(); 
        } else{ checkbox.checked = false;}
    }
});