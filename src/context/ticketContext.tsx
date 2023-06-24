'use client'

import { createContext, useContext, useState } from 'react';


interface ICadeiraIndex {
    indice: number
}
interface ICadeiraContextProps {
    setIndice: React.Dispatch<React.SetStateAction<ICadeiraIndex | undefined>>;
    indicet?: ICadeiraIndex
  }




 const IndiceCadeiraContext = createContext({} as ICadeiraContextProps);

 export function CadeiraProvider({ children }: any) {
  const [indicet, setIndice] = useState<ICadeiraIndex>();

  return (
    <IndiceCadeiraContext.Provider value={{setIndice, indicet}}>
        {children}
    </IndiceCadeiraContext.Provider>
  )
}

export function useMyContext() {
    const context = useContext(IndiceCadeiraContext)
    return context
}