import React, {useContext, useState, useEffect} from "react"

const ScrollContext = React.createContext()
export function useScroll(){
  return useContext(ScrollContext)
}

export function ScrollProvider({ children }){
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return(
    <ScrollContext.Provider value={scrollY}>
            {children}
    </ScrollContext.Provider>
  )
} 

