import React, { useState } from 'react'

export const AppContext = React.createContext();

export function AppProvider ({children}) {
    
    // Estado - Cual componente esta activo y visible
    const [activeComponent, setActiveComponent] = useState('introduccion');

    return(
        <AppContext.Provider value={
          {
            activeComponent, // Estado - Componente activo (Modal, aside)
            setActiveComponent,
            
          }
        }>
          {children}
        </AppContext.Provider>
      )
}
