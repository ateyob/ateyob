import "./addCategory.css";

export default function NewProduct() {
  return (
    <div className="addCategory">
      <h1 className="addCategoryTitle">Add Category</h1>
      <form className="addCategoryForm">
        <div className="addCategoryItem">
          <label>Category Name</label>
          <input type="text" placeholder="Catedgory Name" />
        </div>
        <div className="addCategoryItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
       
        <button className="addCategoryButton">Add</button>
      </form>
    </div>
  );
}