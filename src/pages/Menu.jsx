import React, { useContext } from 'react'
import MenuGird from '../components/UI/MenuUi/MenuGird'
import { SearchContext } from '../components/UI/SearchContext'

const Menu = () => {
  const {searchQuery}  = useContext(SearchContext);
  return (
    <div className='flex flex-col items-center !py-16 !px-4 md:!px-8'>
      {/* Heading */}
      <div className="flex items-center !mb-4 sm:!mb-6">
        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
        <span className="w-14 sm:w-15 h-[1px] bg-orange-500"></span>
        <h2 className="text-orange-500 text-base sm:text-lg  font-semibold uppercase tracking-wide !mx-2">
          Our menu
        </h2>
        <span className="w-14 sm:w-15 h-[1px] bg-orange-500 "></span>
        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
      </div>

      <h1 className="font-dancing text-3xl sm:text-5xl capitalize !mb-8 font-black">
        Tasty and good price
      </h1>

      <MenuGird searchQuery={searchQuery}/>
    </div>
  )
}

export default Menu
