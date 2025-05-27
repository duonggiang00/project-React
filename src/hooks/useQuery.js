import { useState } from "react";

const inititalParams = {
	q: "",
	page: 1,
	limit: 12,
	sortBy: "",
	order: "",
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
