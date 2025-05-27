import React from "react";
import styled from "@emotion/styled";
import useFetchList from "../../hooks/useFetchList";
import useQuery from "../../hooks/useQuery";
import { Link } from "react-router-dom";

const TableContent = styled.table`
border:1px solid black;
border-collapse: collapse;
`
const StyledTh = styled.th`
  border: 1px solid black;
  padding: 8px;
`;
const StyledTd = styled.td`
  border: 1px solid black;
  padding: 8px;
`;
const ProductListTable = styled.div`
	width:100%;
	padding: 50px 10px;
`
const FilterSection = styled.form`
	padding:10px 10px;
	display:flex;
	gap:10px;
	border-radius:5px;
	border: 1px solid black;
	margin-bottom: 3px;
`
const ProductListPage = () => {
	const [params, updateParams, resetParams] = useQuery({
		q: "",
		page: 1,
		limit: 12,
		sortBy: "",
		order: "",
	})

	const resetFilter = (e) => {
		e.preventDefault;
		e.reset()
	}

	const handlePage=(newPage)=>{
    	updateParams({ ...params, page: newPage})
  	}
	const handleLimit=(newLimit)=>{
    	updateParams({ ...params, limit: newLimit, page: 1 })
  	}
	const handleOrder = (newOrder)=>{
		updateParams({...params, order: newOrder, page:1})
	}
	const handleSortBy = (newSortBy)=>{
		updateParams({...params, sortBy: newSortBy, page:1})
	}
	const handleSearch = (search)=>{
		updateParams({...params, q: search})
	}

	const [products, loading , error, total,numberPage] = useFetchList("products",params)
	
	let count = 1

	

	return <ProductListTable>
		<h1>Product List</h1>
		<Link to="add">Add Product</Link>
		<FilterSection>
			<div>
				<select name="sort" id="sort" onChange={(e)=>handleSortBy(e.target.value)}>
                    <option value="id">default</option>
                    <option value="price">price</option>
                    <option value="stock">stock</option>
                    <option value="id">id</option>
            </select>
			</div>
			<div>
				<select name="sort" id="sort" onChange={(e)=>handleOrder(e.target.value)}>
                    <option value="">default</option>
                    <option value="asc">asc</option>
                    <option value="desc">desc</option>
            </select>
			</div>
			<div>
				<span>Hiển thị </span>
				<select name="limit" id="limit" onChange={(e)=>handleLimit(e.target.value)}>
					<option value="12">12</option>
					<option value="20">20</option>
					<option value="50">50</option>
					<option value={total}>all</option>
				</select>
				<span> sản phẩm</span>
			</div>
			<div>
				<input type="input" id='search' name='search' onInput={(e)=>handleSearch(e.target.value.toLowerCase())}/>
			</div>
			<div>
				<button onClick={resetFilter}>Reset</button>
			</div>


		</FilterSection>
		
			<TableContent>
				<thead>
					<tr>
						<StyledTh>STT</StyledTh>
						<StyledTh>ID</StyledTh>
						<StyledTh>TITLE</StyledTh>
						<StyledTh>CATEGORIES</StyledTh>
						<StyledTh>IMAGE</StyledTh>
						<StyledTh>PRICE</StyledTh>
						<StyledTh>STOCK</StyledTh>
						<StyledTh>DESCRIPTION</StyledTh>
						<StyledTh>ACTION</StyledTh>
					</tr>
				</thead>
				<tbody>
					{
					products.map((item)=>(
						<tr key={item.id}>

							<StyledTd>{count++}</StyledTd>
							<StyledTd>{item.id}</StyledTd>
							<StyledTd>{item.title}</StyledTd>
							<StyledTd>{item.category}</StyledTd>
							<StyledTd><img src={item.thumbnail} alt="" width={100}/></StyledTd>
							<StyledTd>{item.price}</StyledTd>
							<StyledTd>{item.stock}</StyledTd>
							<StyledTd>{item.description}</StyledTd>
							<StyledTd><button>Test</button></StyledTd>
						</tr>
					))}
				</tbody>
			</TableContent>
			<div>
				<button onClick={()=>{if(params.page>1){handlePage(params.page-1)}}}>Preview</button>
				{/* {numberPage.map((item)=>(
					<li key={item}>
						<button></button>
					</li>
				))} */}
				<button onClick={()=>{if(params.page<Math.ceil(total/params.limit)){handlePage(params.page+1)}}}>Next</button>
			</div>
	</ProductListTable>;
};

export default ProductListPage;
