import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import loadingAsset from './assets/sending.json'
import successAsset from './assets/success.json'
import { FormData, createOrder } from './api';

const Forms: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isLoading, isSubmitSuccessful }, reset } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await createOrder(data)
    reset();
  };

  const containerVariants = {
    hidden: {
      y: '100vh',
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-50">
        
      <motion.form variants={containerVariants}
        initial="hidden"
        animate="visible"
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-5 bg-white rounded-lg shadow-xl space-y-4">
        <div className="my-5">
            <div className="relative">
            <input
                {...register("name", { required: "ФИО обязательно к заполнению" })}
                placeholder="ФИО"
                className="w-full p-3 pl-10 rounded-lg border-0 shadow-sm"
            />
            <svg className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </div>
            {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
        </div>

        <div className="my-5">
            <div className="relative">
            <input
                {...register("phone", { required: "Телефон обязателен к заполнению" })}
                placeholder="Телефон"
                className="w-full p-3 pl-10 rounded-lg border-0 shadow-sm"
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            </div>
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
        </div>

        <div className="my-5">
            <div className="relative">
            <input
                {...register("email", { required: "email обязателен к заполнению" })}
                placeholder="email"
                className="w-full p-3 pl-10 rounded-lg border-0 shadow-sm"
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
            </svg>

            </div>
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className='my-5'>
            <div className="relative">
                <input
                {...register("address_street", { required: "Улица обязательна к заполнению" })}
                placeholder="Улица"
                className="w-full p-3 pl-10 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
            </div>
            {errors.address_street && <p className="text-red-500 text-xs">{errors.address_street.message}</p>}
          </div>

          <div className='my-5'>
            <div className="relative">
                <input
                {...register("address_house_number", { required: "Дом обязателен к заполнению" })}
                placeholder="Дом"
                className="w-full p-3 pl-10 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </div>
            {errors.address_house_number && <p className="text-red-500 text-xs">{errors.address_house_number.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
        <div className='my-5'>
            <div className="relative">
                <input
                {...register("address_korpus", { required: "Корпус обязателен к заполнению" })}
                placeholder="Корпус"
                className="w-full p-3 pl-10 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                </svg>
            </div>
            {errors.address_korpus && <p className="text-red-500 text-xs">{errors.address_korpus.message}</p>}
          </div>

          <div className='my-5'>
            <div className="relative">
                <input
                {...register("address_atag", { required: "Этаж обязателен к заполнению" })}
                placeholder="Этаж"
                className="w-full p-3 pl-10 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                </svg>
            </div>
            {errors.address_atag && <p className="text-red-500 text-xs">{errors.address_atag.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className='my-5'>
            <div className="relative">
                <input
                {...register("address_kvartira", { required: "Квартира обязательна к заполнению" })}
                placeholder="Квартира"
                className="w-full p-3 pl-10 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                </svg>

            </div>
            {errors.address_kvartira && <p className="text-red-500 text-xs">{errors.address_kvartira.message}</p>}
          </div>
        </div>

        <input
          type="file"
          {...register("files")}
          className="w-full p-3 rounded-full border-gray-300 file:border-none file:rounded-full file:bg-red-500 cursor-pointer file:text-white file:py-2 file:px-4 file:shadow-sm"
          multiple
        />

        <textarea
          {...register("comment")}
          placeholder="Комментарий"
          className="w-full p-3 rounded border-gray-300 shadow-sm"
        ></textarea>

        {isLoading ? 
            <Lottie animationData={loadingAsset} className=' w-44 h-44 mx-auto'/>
        : 
            <button type="submit" className="w-full bg-red-700 text-white p-3 rounded-full shadow-lg hover:bg-red-600">
                Отправить
            </button>
        }

      </motion.form>
      {isSubmitSuccessful && 
            <div className="absolute bg-black/10 w-screen h-screen flex justify-center items-center">
                <div className="bg-white w-1/2 h-1/2 rounded-lg shadow-sm flex justify-center items-center">
                    <Lottie animationData={successAsset} loop={false}/>
                </div>
            </div>
        }
    </div>
  );
};

export default Forms;
