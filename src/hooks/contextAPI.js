import React, {useContext, createContext, useEffect, useState} from "react";

const AppContext = createContext()

const AppProvider = ({children}) => {
    return(
        <AppContext.Provider value="Hello">
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {useGlobalContext, AppProvider}