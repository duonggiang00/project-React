import styled from "@emotion/styled";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import FooterAdmin from "../components/FooterAdmin";
import HeaderAdmin from "../components/HeaderAdmin";
import SideBarAdmin from "../components/SideBarAdmin";

const LayoutWrapper = styled.div`
	display: flex;
	height: 100vh;
`;

const MainLayOut = styled.div`
	display: flex;
	flex-direction: column;
	width:100%;
`

const Body = styled.div`
	display: flex;
	flex: 1;
	overflow: hidden;
	
`;

const Content = styled.main`
	flex: 1;
	padding: 20px;
	overflow-y: auto;
	background-color: #F5F5F9;;
`;

const AdminLayout = () => {
	const [collapsed, setCollapsed] = useState(false);

	const handleToggleSidebar = () => {
		setCollapsed((prev) => !prev);
	};

	return (
		<>
			<LayoutWrapper>
				<SideBarAdmin collapsed={collapsed} onToggle={handleToggleSidebar} />
				<MainLayOut>
					<HeaderAdmin />
					<Body>
						<Content>
							<Outlet />
						</Content>
					</Body>
				<FooterAdmin />
				</MainLayOut>
				
			</LayoutWrapper>
		</>
	);
};

export default AdminLayout;
