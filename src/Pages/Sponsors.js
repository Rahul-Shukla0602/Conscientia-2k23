import React from 'react'
import { Sponsers } from '../data/sponsorsdata'
import '../Pages/styles/sponsors.css'

function Sponsors() {
  return (
    <div>
      <section className="z-40 relative bg-slate-900 text-base text-white font-light pt-32">
        <span className='block w-screen text-center font-bold text-4xl'>SPONSORS</span>
        <section className='brands'>
          {
            Sponsers.map((val,i)=>{
              return(
            <div className="card">
              <img src={val.logo} alt={val.alt} />
              <span className='brandname'>{val.name}</span>
            </div>
              )
            })
          }
        </section>
        </section>
    </div>
  )
}

export default Sponsors
