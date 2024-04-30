import React from 'react'

export default function MoldeInput({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className='md:w-full w-[90%] m-auto flex flex-col md:flex-row gap-5 md:gap-8'>
        {children}
    </div>
  )
}
