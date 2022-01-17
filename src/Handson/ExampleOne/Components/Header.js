import React from 'react'

const Link = ({value, isActive}) => {
    return (
        <a href='#' className={isActive ? 'text-blue-700 hover:text-blue-800 font-semibold': 'text-gray-500 hover:text-gray-800 font-semibold hover:font-semibold'}>
            {value}
        </a>
    )
}

const Header = () => {
    return (
        <header className = 'flex h-40px bg-blue-200 py-[10px] w-[100%] px-[20px]'>
            <strong className='px-[20px] flex w-[15%]'>Logo - Name</strong>
            <div className='flex justify-around w-[55%]'>
                <Link value = 'Home' isActive={true}/>
                <Link value = 'Services'/>
                <Link value = 'Portfolio'/>
                <Link value = 'Company'/>
                <Link value = 'Contact'/>
            </div>
            <div className = 'flex w-[30%] justify-end pr-[20px]'>
                Profile
            </div>
        </header>
    )
}

export default Header
