import Image from 'next/image'
import React from 'react'

const Calculator = () => {
  return (
   <div className="w-72 h-64 rounded-xl relative border border-red-600">
  <Image
    src="https://plus.unsplash.com/premium_photo-1661663603858-2df08fe3d65d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="calculator"
    fill
    className="object-cover rounded-xl p-1 -z-100"
  />
</div>

  )
}

export default Calculator
