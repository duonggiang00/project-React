import axios from "axios";

//* "https://dummyjson.com/products"
const api = axios.create({
	baseURL: "https://codefarm-json-server-web01.onrender.com/",
	headers: {
		"Content-Type": "application/json",
	},
});

api.interceptors.request.use(
	function(config){
		const accessToken = localStorage.getItem("accessToken");
		if(accessToken){
			config.headers.Authorization=`Bearer ${accessToken}`
		}
		return config
	}
)

export default api;
