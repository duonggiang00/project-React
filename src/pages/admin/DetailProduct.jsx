import React from 'react'


function DetailProduct({item}) {
  
  return (
    <>
  <div className="modal fade" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
      

        <div className="modal-header">
          <h4 className="modal-title">Detail Product</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        

        <div className="modal-body">
        {item ? (
                <div>
                  <p><strong>ID:</strong> {item.id}</p>
                  <p><strong>Title:</strong> {item.title}</p>
                  <p><strong>Price:</strong> {item.price}</p>
                  <p><strong>Description:</strong> {item.description}</p>
                  <p><strong>Status:</strong> {item.status?'completed':'pending'}</p>
                  <p><strong>Created At:</strong> {item.createdAt}</p>
                  {/* Thêm các trường khác nếu cần */}
                </div>
              ) : (
                <p>No product selected</p>
              )}
        </div>
        
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div></>
  )
}

export default DetailProduct