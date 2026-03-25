import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div>
      <h1 className='font-medium text-2xl'>
        {text1} <span className='text-red-500'>{text2}</span>
      </h1>
    </div>
  )
}

export default Title
