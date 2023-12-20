import React from 'react';
import {Outlet} from "react-router-dom";

export default function GuestLayout(){
	//TODO: Написать проверку авторизированного пользователя


	return(

		<div>
			<Outlet/>
		</div>
	)
}