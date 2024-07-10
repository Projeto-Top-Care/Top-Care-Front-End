import React from 'react'

export default function ResponsiveInput({
    children, size
  }: Readonly<{
    children: React.ReactNode;
    size: string
  }>) {
  return (
    <div className={`md:${size} w-full m-auto`}>
        {children}
    </div>
  )
}
