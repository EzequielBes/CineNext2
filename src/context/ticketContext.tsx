'use client'

import { Cadeiras } from '@/types/IChairs';
import { createContext, useContext, useState } from 'react';


interface ICadeiraIndex {
    indice: number
}
interface ICadeiraContextProps {
    setIndice: React.Dispatch<React.SetStateAction<ICadeiraIndex | undefined>>;
    indicet?: ICadeiraIndex;
    setSalaCadeira: React.Dispatch<React.SetStateAction<Cadeiras[] | undefined>>;
    salaCadeira: Cadeiras[] | undefined
   
  }




 const IndiceCadeiraContext = createContext({} as ICadeiraContextProps);

 export function CadeiraProvider({ children }: any) {
  const [indicet, setIndice] = useState<ICadeiraIndex>();
  const [salaCadeira, setSalaCadeira ] = useState<Cadeiras[]>()

  return (
    <IndiceCadeiraContext.Provider value={{setIndice, indicet, setSalaCadeira, salaCadeira}}>
        {children}
    </IndiceCadeiraContext.Provider>
  )
}

export function useMyContext() {
    const context = useContext(IndiceCadeiraContext)
    return context
}
