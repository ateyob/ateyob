import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Product Name" />
        </div>
        <div className="addProductItem">
          <label>Category</label>
          <select name="active" id="active">
            <option value="item">Category Items</option>
            <option value="fruit">Fruit</option>
            <option value="vegetable">Vegetable</option>
            <option value="dairy">Dairy</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file"  />
        </div>
        </div>
        <button className="addProductButton">Add</button>
      </form>
    </div>
  );
}