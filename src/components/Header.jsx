import React from 'react'
import { mockCompanyDetails } from '../constants/mock'
import Search from './Search'
import ThemeIcon from './ThemeIcon'

const Header = ({ name }) => {
  return (
    <>
        <div className='xl:px-22'>
            <h1 className='text-5xl'>{mockCompanyDetails.name}</h1>
            <Search />
            <ThemeIcon />
        </div>
    </>
  )
}

export default Header