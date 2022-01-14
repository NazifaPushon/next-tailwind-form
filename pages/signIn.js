import React from 'react';
import SignInForm from '../components/Form/SignInForm';
import ToggleBtn from '../components/ToggleBtn/ToggleBtn';

const signIn = () => {

    return (
        <div className="dark:bg-gray-800 min-h-screen ">
      <ToggleBtn/>
      <div className='min-h-screen flex items-center'>
      <SignInForm/>
      </div>
    </div>
    );
};

export default signIn;