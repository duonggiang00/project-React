import React, { useEffect, useState } from 'react'
import styled from "@emotion/styled"
import { createProduct, getProductDetail, updateProduct } from '../../api/productApi'
import FormCommon from '../../components/FormCommon'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { productSchema } from '../../validations/productSchema'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../components/Header'

const initFormData= {
    title: "",
    description: "",
}

const ProductForm  = () => {
    const {register, handleSubmit, formState:{errors} , reset} = useForm({ resolver: zodResolver(productSchema)})
    let { id } = useParams()
    const navigate= useNavigate()
    console.log(id)
     useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                try {
                    const product = await getProductDetail(id);
                    reset(product.data);
                } catch (error) {
                    toast.error('Failed to load product');
                }
            };
            fetchProduct();
        }
    }, [id, reset]);
    
    const handleBack = () =>{
        navigate("/admin/demo")
    }

    const handleReset=()=>{
        reset(initFormData);
        navigate("/admin/demo/add")
    }
    
    const onSubmit = async (data) => {
        try {
            if(id){
                const res = await updateProduct(id,(data))
                toast('Wow, đã sửa thành công')
                handleReset();
            }else{
                let time = new Date
                data={...data,status:false,createdAt: time.toISOString()}
                const res = await createProduct(data)
                toast('Wow, đã thêm thành công ')
                handleReset()
            }
        } catch (error) {
            console.log(error)
            toast('Wow, đã thêm không thành công ')
        }
    }
  return (
    <>
        <FormCommon handleSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="">Title:</label>
                <input type="text" placeholder='Product Name' className='form-control' {...register("title",{required:true})} />
                {errors.title && <span className='text-danger'>{errors.title.message}</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="">Price:</label>
                <input type="text" placeholder='Product Price' className='form-control' {...register("price",{valueAsNumber:true})} />
                {errors.price && <span className='text-danger'>{errors.price.message}</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="" name="description">description:</label>
                <input type="text" placeholder='Product Description' className='form-control'  {...register("description")}/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="" name="priority">Priority</label>
                <select name="priority" className='form-select' id="" {...register("priority")}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                
            </div>
            <div className="mb-3">
                <button type="submit" placeholder='ProductName' className='btn btn-primary w-50' >Add Product</button>
                <button type="submit" placeholder='ProductName' className='btn btn-secondary w-50' onClick={handleReset}>reset</button>
            </div>
            <div className="mb-3">
                <button type="submit" placeholder='ProductName' className='btn btn-primary w-50' onClick={handleBack} >Back</button>
            </div>
            <ToastContainer />
        </FormCommon>
    </>
  )
}

export default ProductForm