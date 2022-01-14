import React from 'react';
import SignUpForm from '../components/Form/SignUpForm';
import ToggleBtn from '../components/ToggleBtn/ToggleBtn';

const signUp = () => {
    return (
        <div className="dark:bg-gray-800 min-h-screen ">
       <ToggleBtn/>
      <div className='min-h-screen flex items-center'>
      <SignUpForm/>
      </div>
    </div>
    );
};

export default signUp;