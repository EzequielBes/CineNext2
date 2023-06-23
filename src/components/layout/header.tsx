import Link from 'next/link'
import {PiPopcorn} from 'react-icons/pi'

export function Header() {
  return (

  <header className="h-24 bg-gray-200 flex justify-center items-center ">
    <div className='w-10/12 flex justify-between '>
      <div className='flex gap-4 '>
        <PiPopcorn className='text-yellow-500 text-4xl ' />
        <h1 className="font-poppins text-3xl">CineNext</h1>
      </div>
      <nav>
        <ul>
          <Link href="/ingressos/comprarIngresso" className='text-red-900'>Comprar ingresso</Link>
        </ul>
      </nav>
    </div>
  </header>
  )
}
