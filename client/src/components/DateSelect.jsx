import React from 'react'
import { useState } from 'react'
import BlurCircle from './BlurCircle'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const DateSelect = ({ dateTime, id }) => {
  const [selected, setSelected] = useState(null)
  const navigate = useNavigate()

  const onBookHandler = () => {
    if (!selected) {
      return toast.error("Please select a date and time")
    } else {
      navigate(`/movies/${id}/${selected}`)
      scrollTo(0, 0)
    }
  }

  return (
    <div id='dateSelect' className='pt-20'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-8 relative p-8 bg-red-500/10 border border-red-500/20 rounded-2xl overflow-hidden'>

        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle top="100px" right="0px" />

        {/* LEFT SECTION */}
        <div className='flex flex-col gap-4 w-full'>
          <p className='text-lg font-semibold text-white'>
            Choose Date & Time
          </p>

          <div className='flex items-center gap-4'>
            
            <ChevronLeftIcon className='w-6 h-6 text-gray-400 cursor-pointer hover:text-white' />

            <div className='flex flex-wrap gap-4'>
              {Object.keys(dateTime).map((date) => (
                <button
                  key={date}
                  onClick={() => setSelected(date)}
                  className={`flex flex-col items-center justify-center w-16 h-16 rounded-lg text-sm transition-all cursor-pointer
                    ${selected === date
                      ? "bg-red-500 text-white shadow-lg scale-105"
                      : "border border-red-500/40 text-gray-300 hover:bg-red-500/20"
                    }`}
                >
                  <span className='font-semibold'>
                    {new Date(date).getDate()}
                  </span>
                  <span className='text-xs'>
                    {new Date(date).toLocaleString("en-US", { month: "short" })}
                  </span>
                </button>
              ))}
            </div>

            <ChevronRightIcon className='w-6 h-6 text-gray-400 cursor-pointer hover:text-white' />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className='flex items-center justify-center md:justify-end w-full md:w-auto'>
          <button
            onClick={onBookHandler}
            className='bg-red-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-500/90 transition-all cursor-pointer shadow-md'
          >
            Book Now
          </button>
        </div>

      </div>
    </div>
  )
}

export default DateSelect