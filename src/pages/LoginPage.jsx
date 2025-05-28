import React from "react";
import FormCommon from "../components/FormCommon";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../validations/authSchema";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "../api/authApi";
import { toast } from "react-toastify";

const LoginPage = () => {
	const { register, handleSubmit, reset, formState:{errors}} = useForm({resolver: zodResolver(loginSchema)})
	
	const nav = useNavigate();

	const onSubmit = async (dataForm)=>{
		try {
			const { data } = await loginApi(dataForm)
			if (data.accessToken){
				localStorage.setItem("accessToken",data.accessToken);
				localStorage.setItem("user",JSON.stringify(data.user))
			}
		} catch (error) {
			console.log(error)
			toast.error(error.response?.data||"login failed!");
			reset()
		}
	}

	return <>
	<h1>LOGIN PAGE</h1>
	<FormCommon handleSubmit={handleSubmit(onSubmit)}>
		<div className="mb-3">
			<label htmlFor="">Username:</label>
			<input type="text" className="form-control" {...register("email", {required:true})}/>
		</div>
		<div className="mb-3">
			<label htmlFor="">Password:</label>
			<input type="password" className="form-control" {...register("password", {required:true})}/>
		</div>
		<div className="mb-3">
			Chưa có tài khoản? cook vào <Link to="/auth/register">đây</Link> 
		</div>
		<div className="mb-3">
			<button type="submit" className="btn btn-primary">Đăng Nhập</button>
		</div>
	</FormCommon>
	</>;
};

export default LoginPage;
