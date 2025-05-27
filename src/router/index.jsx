import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import RegisterPage from "../pages/register/RegisterPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import ClientLayout from "../layouts/ClientLayout";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import AdminLayout from "../layouts/AdminLayout";
import DashBoardPage from "../pages/admin/DashBoardPage.jsx";
import OrderListPage from "../pages/admin/OrderListPage.jsx";
import BlogListPage from "../pages/admin/BlogListPage.jsx";
import UserListPage from "../pages/admin/UserListPage.jsx";
import ProductListPage from "../pages/admin/ProductListPage.jsx";
import SettingsPage from "../pages/admin/SettingsPage.jsx";
import CategoriesPage from "../pages/CategoriesPage.jsx";
import ProductForm from "../pages/admin/ProductForm.jsx";
import DemoListPage from "../pages/admin/DisplayDemo.jsx";

const router = createBrowserRouter([
	// * Layout Client
	{
		path: "/",
		element: <ClientLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "/about", element: <AboutPage /> },
			{ path: "/categories", element: <CategoriesPage /> },
		],
	},

	// * Layout Admin
	{
		path: "/admin",
		element: <AdminLayout />,
		children: [
			{ index: "dashboard", element: <DashBoardPage /> },
			// { path: "products", element: <Produc /> },
			{ path: "orders", element: <OrderListPage /> },
			{ path: "blogs", element: <BlogListPage /> },
			{ path: "users", element: <UserListPage /> },
			{ path: "products", element: <ProductListPage /> },
			{ path: "settings", element: <SettingsPage /> },
			{ path: "products/add", element: <ProductForm /> },
			{ path: "demo/add", element: <ProductForm /> },
			{ path: "demo/edit/:id", element: <ProductForm /> },
			{ path: "demo", element: <DemoListPage /> },
		],
	},

	// * Layout Empty
	{ path: "/auth/login", element: <LoginPage /> },
	{ path: "/auth/register", element: <RegisterPage /> },
	{ path: "*", element: <NotFoundPage /> },
]);

const AppRouter = () => {
	return <RouterProvider router={router} />;
};

export default AppRouter;
