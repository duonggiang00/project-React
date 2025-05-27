import { useEffect, useState } from "react";
import api from "../api";
import { deleteProduct, getAllProduct, getProductDetail, updateProduct } from "../api/productApi";
import { toast } from "react-toastify";

const useFetchDemo = (path) => {
	const [list, setList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetchList = async () => {
		try {
			setLoading(true);
			const { data } = await getAllProduct();
			setList(data);
			
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setError(error.message || "Failed!");
			console.log(error);
		}
	};

	const handleRemove= async (id)=>{
		try {
			confirm("Are you sure") && await deleteProduct(id)
			toast('Wow, đã xóa thành công ')
			await fetchList()
			
		} catch (error) {
			console.log(error)
			toast('Wow, đã xóa không thành công ')
		}
	}

	const updateStatus = async (id,status)=>{
		try {
			const res = await updateProduct(id,{status : !status})
			await fetchList()
			// console.log("hello")
		} catch (error) {
			console.log(error)
		}
	}

	// const updateProduct = async (id)=>{
	// 	try {
	// 		const res = await
	// 	} catch (error) {
			
	// 	}
	// }

	useEffect(() => {
		fetchList();
	}, []);
	return [list, fetchList, handleRemove, updateStatus ,updateProduct];
};

export default useFetchDemo;
