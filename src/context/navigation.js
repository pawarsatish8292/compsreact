import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({children}) {
    const [currentPath, serCurrentPath]= useState(window.location.currentPath);
    useEffect (()=>{
     const handler = () =>{
        serCurrentPath(window.location.pathname);
     };
     window.addEventListener('popstate',handler);
     return ()=>{
        window.removeEventListener('popstate',handler);
     }
    },[]);
    const navigate = (to) => {
        window.history.pushState({}, '', to);
        serCurrentPath(to);
    }
    return (
        <NavigationContext.Provider value={{currentPath, navigate}}>
            {currentPath}
            {children}
        </NavigationContext.Provider>
    )
}

export {NavigationProvider};
export default NavigationContext;
