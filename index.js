let theme = window.localStorage.getItem('myTheme');

if(theme){
    wrapper.classList.add(theme)
}else{
    wrapper.classList.add("light")
};

light.addEventListener('click', () =>{
    wrapper.className = 'light'
    window.localStorage.setItem('myTheme', 'light')
});
dark.addEventListener('click', () =>{
    wrapper.className = 'dark'
    window.localStorage.setItem('myTheme', 'dark')
});
blue.addEventListener('click', () =>{
    wrapper.className = 'blue'
    window.localStorage.setItem('myTheme', 'blue')
});