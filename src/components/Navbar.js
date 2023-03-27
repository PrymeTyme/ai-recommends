import React from 'react'
import NavbarCSS from './Navbar.module.css'
import { useCategoryContext } from '../Context'

export function  changeColor(cat){
  if (cat === 'Books'){
    return '#0074A6'
  }
  if (cat === 'Music'){
    return '#DB574D'
  }
  if (cat === 'Games'){
    return '#FFB805'
  }

}


function Navbar() {
  const {catData,setData} = useCategoryContext()
  var name = catData.category
  console.log(name)

  return (
    <div className={NavbarCSS.background} style={{backgroundColor:changeColor(name)}}>
      <div className={NavbarCSS.header}>
        <div className="header-left">
          <a href="#">About</a>
          <a href="#">Store</a>
        </div>
        <div className={NavbarCSS.headerRight}>
          <a href="#">Gmail</a>
          <a href="#">Images</a>
          <span className="mat">A</span>
          <span className="mat">B</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
