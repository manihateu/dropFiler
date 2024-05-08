import Lottie from 'lottie-react'
import React from 'react'
import mailAsset from './assets/mail.json'
import { useNavigate } from 'react-router-dom'

const OnBoard: React.FC = () => {
  const navigate = useNavigate()
  return (
    <section className="bg-white dark:bg-gray-900 flex justify-center items-center w-screen h-screen flex-col">
        <div className="text-center">
            <Lottie animationData={mailAsset} className='w-4/5 h-4/5 mx-auto'/>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Лучший сервис по отправке писем!</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <button onClick={() => {navigate('/order')}} className="inline-flex justify-center items-center py-3 px-5 text-base font-bold text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
                    Продолжить
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </button>
            </div>
        </div>
    </section>
  )
}

export default OnBoard