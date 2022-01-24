import React from 'react'

const Content = () => {
    return (
        <div className = 'h-[calc(100%_-_90px)] flex'>
            <div className = 'flex flex-col pt-[15%] pl-[30px] pr-[15px] w-[60%]'>
                <div className=' text-gray-600 text-[32px]'>Market Solutions</div>
                <div className = 'text-[48px] pb-[20px] text-teal-600'>Win your market</div>
                <div className = 'text-light text-gray-800'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel pretium tortor, sit amet sollicitudin elit. Donec et cursus mauris, eu condimentum eros. Integer gravida leo velit, sed scelerisque libero hendrerit non.
                </div>
            </div>
            <div className = 'flex w-[40%]'>
                test
            </div>
        </div>
    )
}

export default Content
