import { useEffect, useState } from "react";
import api from "../api";

const useFetchList = (path, query) => {
	const [list, setList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [total, setTotal] = useState(0)
	let numberPage;
	const fetchList = async () => {
		try {
			setLoading(true);
			const skip = (query.page - 1) * query.limit;
			query.skip = skip;
			let queryString = new URLSearchParams(query).toString();
			const { data } = await api.get(`${path}/search?${queryString}`);
			setList(data[path]);
			setTotal(data.total);
			setLoading(false);
			console.log(total)
			numberPage=[...Array(Math.ceil(total/data.limit)).keys()]
			console.log(numberPage)
		} catch (error) {
			setLoading(false);
			setError(error.message || "Failed!");
			console.log(error);
		}
	};

	useEffect(() => {
		fetchList();
	}, [query]);
	return [list, loading, error, total, numberPage];
};

export default useFetchList;
