import React from "react";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../validations/authSchema";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import FormCommon from "../../components/FormCommon";
import { registerApi } from "../../api/authApi";
import { toast, ToastContainer } from "react-toastify";


const RegisterPage = () => {
	const { register, handleSubmit, reset, formState:{errors}} = useForm({resolver: zodResolver(registerSchema)})
	const navigate=useNavigate()
	const onSubmit= async (data)=>{
		try {
			delete data.confirmPassword
			const res = await registerApi(data)
			console.log(res)
			toast.success("đăng ký thành công")
			reset()
			
		} catch (error) {
			toast.error("wow, đăng ký không thành công")
			console.log(error)
		}
	}
	return (
		<>
			<h1>Register Form</h1>
			<FormCommon handleSubmit={handleSubmit(onSubmit)} action="">
				<div className="mb-3">
					<label htmlFor="">Username</label>
					<input type="text" className="form-control" {...register("username", {required:true})} />
					{errors.username && <span className='text-danger'>{errors.username.message}</span>}
				</div>
				<div className="mb-3">
					<label htmlFor="">Email</label>
					<input type="text" className="form-control" {...register("email", {required:true})} />
					{errors.email && <span className='text-danger'>{errors.email.message}</span>}
				</div>
				<div className="mb-3">
					<label htmlFor="">Password</label>
					<input type="password" className="form-control" {...register("password", {required:true})} />
					{errors.password && <span className='text-danger'>{errors.password.message}</span>}
				</div>
				<div className="mb-3">
					<label htmlFor="">Confirm Password</label>
					<input type="password" className="form-control" {...register("confirmPassword", {required:true})} />
					{errors.confirmPassword && <span className='text-danger'>{errors.confirmPassword.message}</span>}
				</div>
				<div className="mb-3">
					Already have an account? <Link to="/auth/login">Login here</Link> 
				</div>
				<div className="mb-3">
					<button type="submit" className="btn btn-primary">Đăng ký</button>
				</div>
				<ToastContainer/>
			</FormCommon>
		</>
	);
};

export default RegisterPage;
