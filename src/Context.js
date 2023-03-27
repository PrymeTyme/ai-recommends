import React, { createContext, useContext, useState } from "react"

// create toggle context
const CategoryContext = createContext()

// create context provider
export const CategoryProvider = ({ children }) => {
    const [catData, setData] = useState({
       category: 'Movies',
    })
    // the value passed in here will be accessible anywhere in our application 
    // you can pass any value, in our case we pass our state and it's update method  // add[] instead of {}to value in order to make it iterable?
    return (
        <CategoryContext.Provider value={{catData, setData}}> 
            {children}
        </CategoryContext.Provider>
    )
}

// useToggleContext will be used to use and update state accross the app
// we can access to data and setData using this method 
// anywhere in any component that's inside ToggleProvider
export  const useCategoryContext = () => useContext(CategoryContext)
