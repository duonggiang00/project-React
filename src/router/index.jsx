import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/Homepage";
import RegisterPage from "../pages/register/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AboutPage from "../pages/AboutPage";
import ClientLayout from "../layouts/ClientLayout";
import NotFoundPage from "../pages/NotFoundPage";
import AdminLayout from "../layouts/AdminLayout";
import DashBoardPage from "../pages/admin/DashBoardPage";
import OrderListPage from "../pages/admin/OrderListPage";
import BlogListPage from "../pages/admin/BlogListPage";
import UserListPage from "../pages/admin/UserListPage";
import ProductListPage from "../pages/admin/ProductListPage";
import SettingsPage from "../pages/admin/SettingsPage";
import CategoriesPage from "../pages/CategoriesPage";
import ProductForm from "../pages/admin/ProductForm";
import DemoListPage from "../pages/admin/DisplayDemo";

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
