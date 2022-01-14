import React from 'react';

const TextField = ({type,title,placeholder,error,...rest}) => {
    return (
        <div className='py-2'>
            <div className='py-2 text-lg text-blue-600 dark:text-gray-300'>
            <label >{title} : </label>
            </div>
            <div>
            <input className="dark:bg-slate-700 bg-blue-50 outline-none focus:ring-2 dark:ring-slate-200 ring-blue-600 p-2 block w-full rounded-md" type={type} placeholder={placeholder} {...rest}/>
            </div>
            <p className={error ? `block pt-2 text-red-600` : 'hidden'} >{error}</p>
        </div>
    );
};

export default TextField;