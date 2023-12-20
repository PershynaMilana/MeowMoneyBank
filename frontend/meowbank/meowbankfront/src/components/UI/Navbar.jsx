import React from 'react';
import { ProfileMenu } from './ProfileMenu';
import MeowMoneyImage from '../../../public/MeowMoney.png';
export default function MainNavbar() {
  return (
    <div className='w-full bg-gradient-to-r from-japanese-indigo to-dark-electric-blue text-azureish-white font-montserrat transition-all ease-linear'>
      <nav className='flex items-center justify-between flex-wrap p-2'>
        <div className='flex items-center flex-shrink-0 mr-6'>
		<img src={MeowMoneyImage} alt="dfrg" className='h-16 w-16 mr-2' /> 
          <span className='font-semibold text-xl tracking-tight'>MeowMoney</span>
        </div>
        <div className='flex-grow flex items-center justify-center w-auto -ml-[150px]'>
          <div className='text-sm flex-grow flex justify-center items-center'>
            <a href='#responsive-header' className='inline-block mt-0 mr-4 hover:text-white'>
              Dashboard
            </a>
            <a href='#responsive-header' className='inline-block mt-0 mr-4 hover:text-white'>
              Statistics
            </a>
            <a href='#responsive-header' className='inline-block mt-0 hover:text-white'>
              Settings
            </a>
          </div>
        </div>
	
        
            <a href='login' className='inline-block mt-0 mr-8 hover:text-white'>
              Login
            </a>      
     
       
        <div className='mr-6'>
          <ProfileMenu />
        </div>
      </nav>
    </div>
  );
}
