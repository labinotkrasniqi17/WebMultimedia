import React from "react";
import { motion } from "framer-motion";

export const FooterTxtAnimation = () => {
  const scriptCode = ``
  const [isActive, setIsActive] = React.useState(false);
  
  const styleObj = {
    fontSize: 30,
    //color: "#202533",
    color:"#979A9B ",
    textAlign: "center",
    boxShadow: '1px 2px 12px #979A9B',
    borderRadius: '4px',
    width: 'auto',
    height:'auto'
    
    
}

  return (
   
    
      <motion.div 
      
        className="block"
        onClick={() => setIsActive(!isActive)}
        animate={{
          rotate: isActive ? 180 : 360
        }}
      >
       <h1 style={styleObj}>Powered by: LEAB</h1> 
      </motion.div>
    
  );
};
