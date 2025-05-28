import { useState } from "react";

const inititalParams = {
	title_like: "",
	_sort: "price",
	_order: "asc",
	_page: "1",
	_limit: "4",
};

const useQuery = (query) => {
	const [params, setParams] = useState(query);

	const resetParams = () => {
		setParams(inititalParams);
	};

	const updateParams = (query) => {
		setParams((prev) => ({
			...prev,
			...query,
		}));
	};
	return [params, updateParams, resetParams];
};

export default useQuery;
