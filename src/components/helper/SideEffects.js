import { useEffect } from "react";


const sideEffect = (setState) =>{
    useEffect(() => {
        const onKeyDown = (e) => {
          if (e.key === "Escape") {
            setState(false);
          }
        };
        window.addEventListener("keydown", onKeyDown);
    
        return () => {
          window.removeEventListener("keydown", onKeyDown);
        };
      }, []);    
}
export default sideEffect;