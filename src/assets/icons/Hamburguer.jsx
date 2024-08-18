import { useState } from 'react'

export function IconamoonMenuBurgerHorizontalBold(props) {
  var [isOpen, setIsOpen] = useState(false)

    return (
      <>
      {
        isOpen? (
          <button aria-label="Abrir menú de navegación" onClick={() => setIsOpen(!isOpen)}>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M18 6h-18M18 12h-18M18 18h-18"></path></svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" className='hover:opacity-50' width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"/></svg>
          </button>
        ) : (
          <button aria-label="Cerrar menú de navegación" onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className='hover:opacity-50' width="32" height="32" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 6h18M3 12h18M3 18h18"></path></svg>
          </button>
        )
      }
      <div className={`${isOpen? "h-[calc(100vh-80px)] py-8" : "opacity-0 z-[-1]"} transition-all duration-[500ms] absolute flex top-20 border-t h-0 w-full left-0 bg-white`}>
        <div className={`${isOpen? "flex flex-col px-5  items-start w-full gap-6" : "hidden"}`}>
          {props.children}
        </div>
      </div>
      </>
      
    )

}
export default IconamoonMenuBurgerHorizontalBold