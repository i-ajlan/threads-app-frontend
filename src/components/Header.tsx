import { useLayoutEffect, useRef, useState } from "react"
import { Button } from "./ui/button"

const Header = () => {


  const [themeMode, setThemeMode] = useState<'dark' | 'light'>('light');
  const firstRender = useRef<boolean>(true);

  const themeHandler = () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    console.log('theme handler')
  }

  useLayoutEffect(()=>{
    if(firstRender.current){
      if(localStorage.theme){setThemeMode(localStorage.theme)}
      firstRender.current = false;
    }else{
      localStorage.theme = themeMode
    }
    themeHandler(); 
  },[themeMode])

  console.log(localStorage.theme)

  const changeMode = () => {
    if(themeMode === 'dark'){
      setThemeMode('light');
    } else {
      setThemeMode('dark');
    }    
  }

  return (
    <div className="text-center mb-2">
      <Button className="text-4xl bg-transparent text-black dark:text-white w-full p-9 hover:bg-transparent" onClick={()=>changeMode()}>
        @
      </Button>
    </div>
  )
}
export default Header