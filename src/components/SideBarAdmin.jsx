import styled from "@emotion/styled";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // optional: icon
import { Link, NavLink } from "react-router-dom";

const SidebarWrapper = styled.div`
	width: ${(props) => (props.collapsed ? "80px" : "250px")};
	transition: width 0.3s ease;
	background-color: #363740;
	color: white;
	padding: 20px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
`;

const ToggleButton = styled.button`
	background: none;
	border: none;
	color: white;
	cursor: pointer;
	margin-bottom: 20px;
	font-size: 20px;
	align-self: ${(props) => (props.collapsed ? "center" : "flex-end")};
`;

const MenuItem = styled.div`
	margin: 16px 0;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: ${(props) => (props.collapsed ? "0" : "16px")};
	opacity: ${(props) => (props.collapsed ? "0" : "1")};
	transition: opacity 0.2s ease, font-size 0.2s ease;
	a{
	color:#A4A6B3;
	}
	a.active{
	color:#FFF
	}
`;

const SiderBarAdmin = ({ collapsed, onToggle }) => {
	return (
		<SidebarWrapper collapsed={collapsed}>
			<ToggleButton collapsed={collapsed} onClick={onToggle}>
				{collapsed ? <FiChevronRight /> : <FiChevronLeft />}
			</ToggleButton>
			<MenuItem collapsed={collapsed}>
				<NavLink to="dashboard">Dashboard</NavLink>
			</MenuItem>
			<MenuItem collapsed={collapsed}>
				<NavLink to="users">Users</NavLink>
			</MenuItem>
			<MenuItem collapsed={collapsed}>
				<NavLink to="products">Products</NavLink>
			</MenuItem>
			<MenuItem collapsed={collapsed}>
				<NavLink to="settings">Settings</NavLink>
			</MenuItem>
			<MenuItem collapsed={collapsed}>
				<NavLink to="demo">Demo</NavLink>
			</MenuItem>
		</SidebarWrapper>
	);
};

export default SiderBarAdmin;
