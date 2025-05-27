import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useFetchList from "../../hooks/useFetchList";
import useQuery from "../../hooks/useQuery";
import { Link } from "react-router-dom";
import useFetchDemo from "../../hooks/useFetchDemo";
import { deleteProduct } from "../../api/productApi";
import { ToastContainer } from "react-toastify";
import DetailProduct from "./DetailProduct";

const TableContent = styled.table`
border: 1px solid #EAECF0;
border-collapse: collapse;
width:100%;
`
const StyledTh = styled.th`
  border-top: 1px solid #EAECF0;
  padding: 8px;
  background:#F9FAFB;
`;
const StyledTd = styled.td`
  border-top: 1px solid #EAECF0;
  border-bottom: 1px solid #EAECF0;
  padding: 8px;
`;
const ProductListTable = styled.div`
	width:100%;
	min-height:100vh;
	padding: 20px 10px;
	background:#FFF;
	border-radius:10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`
const FilterSection = styled.form`
	padding:10px 10px;
	display:flex;
	gap:10px;
	margin-bottom: 3px;
`
const DemoListPage = () => {
	const [itemUpdate, setUpdate] = useState(false)
	const [selectedItem, setSelectedItem] = useState();
	const handleDetailClick = (item) => {
    setSelectedItem(item);
  	};
	const handleUpdate = (id) => {
		setUpdate(id);
	}
	
	const [products, fetchList, handleRemove,updateStatus] = useFetchDemo("products")

	return <ProductListTable>
		<div className="mb-3">
			<h1>Product List</h1>
		<Link to="add"><button className="btn btn-primary">Add Product</button></Link>
		</div>
		<DetailProduct item={selectedItem} />
		<FilterSection>
			<div>
				<select name="sort" id="sort">
                    <option value="id">default</option>
                    <option value="price">price</option>
                    <option value="stock">stock</option>
                    <option value="id">id</option>
            </select>
			</div>
			<div>
				<select name="sort" id="sort">
                    <option value="">default</option>
                    <option value="asc">asc</option>
                    <option value="desc">desc</option>
            </select>
			</div>
			<div>
				<span>Hiển thị </span>
				<select name="limit" id="limit">
					<option value="12">12</option>
					<option value="20">20</option>
					<option value="50">50</option>
				</select>
				<span> sản phẩm</span>
			</div>
			<div>
				<input type="input" id='search' name='search' />
			</div>
			<div>
				<button >Reset</button>
			</div>


		</FilterSection>
		
			<TableContent className="mb-3">
				<thead>
					<tr>
						<StyledTh>ID</StyledTh>
						<StyledTh>TITLE</StyledTh>
						<StyledTh>PRIORITY</StyledTh>
						<StyledTh>PRICE</StyledTh>
						<StyledTh>DESCRIPTION</StyledTh>
						<StyledTh>STATUS</StyledTh>
						<StyledTh>CREATED AT</StyledTh>
						<StyledTh>ACTION</StyledTh>
						
					</tr>
				</thead>
				<tbody>
					{
					products.map((item)=>(
						<tr key={item.id}>
							<StyledTd>{item.id}</StyledTd>
							<StyledTd>{item.title}</StyledTd>
							<StyledTd>{item.priority}</StyledTd>
							<StyledTd>{item.price}</StyledTd>
							<StyledTd>{item.description}</StyledTd>
							<StyledTd><button onClick={()=>{updateStatus(item.id,item.status)}} className={item.status ? 'btn btn-success' : 'btn btn-danger'}>{item.status?'completed':'pending'}</button></StyledTd>
							<StyledTd>{item.createdAt}</StyledTd>
							<StyledTd>
								<button className="btn btn-success" data-toggle="modal" data-target="#myModal"onClick={()=>handleDetailClick(item)}>Detail</button>
								<Link to={`edit/${item.id}`} className="btn btn-warning" onClick={()=>{handleUpdate(item.id)}}>Update</Link>
								<button className="btn btn-danger"onClick={()=>{handleRemove(item.id)}}>Remove</button>
							</StyledTd>
							
						</tr>
					))}
				</tbody>
			</TableContent>
			<div>
				<button >Preview</button>
				<button>Next</button>
			</div>
			<ToastContainer />
			
	</ProductListTable>;
};

export default DemoListPage;
