import React from 'react'

export default function ResponsiveInput({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className='md:w-72 w-full m-auto'>
        {children}
    </div>
  )
}
