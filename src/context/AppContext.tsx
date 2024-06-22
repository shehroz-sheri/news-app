import React, { createContext } from 'react'
import { useLocation } from 'react-router-dom';


interface MyContextType {
    searchLocation: string;
}

interface AppContextProviderProps {
    children: React.ReactNode,
}

export const AppContext = createContext<MyContextType | undefined>(undefined)

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const location = useLocation()
    const searchLocation = location.pathname;


    return (
        <AppContext.Provider value={{ searchLocation }}>
            {children}
        </AppContext.Provider>
    )
}
