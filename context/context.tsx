
"use client"

import { createContext, useState } from "react";
export const ThemeContextProvider = createContext();

function Context({ children }) {
    const [message, setMessage] = useState("haii");
  
    return (
      <ThemeContextProvider.Provider value={{ message, setMessage }}>
        {children}
      </ThemeContextProvider.Provider>
    );
  }

  export default Context;