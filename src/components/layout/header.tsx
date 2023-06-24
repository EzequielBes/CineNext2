import Link from 'next/link'
import {PiPopcorn} from 'react-icons/pi'
import IngressoComprar from '../sala/inputMovies'
import { List } from '@chakra-ui/react'

export function Header() {
  return (

  <header className="h-24 bg-gray-200 flex justify-center items-center ">
    <div className='w-10/12 flex justify-between '>
      <div className='flex gap-4 '>
        <PiPopcorn className='text-yellow-500 text-4xl ' />
        <h1 className="font-poppins text-3xl">CineNext</h1>
      </div>
      <ul>
        <li>
          <IngressoComprar/>
          
        </li>
      </ul>
    </div>
  </header>
  )
}
