import { useState } from "react";
let Ecommerce = () => {
    let [products, setProduct] = useState([{ Name: "Car", Description: "Car description and features here", Price: "2000", Color: "black", Date: "02-04-2022" }]);
    let addProduct = (event) => {
        event.preventDefault();
        let obj = {
            Name: event.target.name.value,
            Description: event.target.description.value,
            Price: event.target.price.value,
            Color: event.target.color.value,
            Date: event.target.date.value
        }
        setProduct([...products, obj]);
    }
    let removeAll = () => {
        setProduct([]);
    }
    let deleteItem = (index) => {
        let newArr = products.filter(function (val, ind) {
            if (index == ind) {
                return false;
            }
            else {
                return true;
            }
        })
        setProduct(newArr);
    }
    return (
        <div className="Item EcommerceItem">
            <h2>Ecommerce Component</h2>
            <form onSubmit={addProduct}>
                <input type="text" placeholder="Enter Product Name" name="name" />
                <textarea placeholder="Enter Product Description" name="description"></textarea>
                <input type="number" placeholder="Enter Price" name="price" />
                <input type="color" placeholder="black" name="color" />
                <input type="date" placeholder="Select Submission Date" name="date" />
                <button className="main_btn">Add Product</button>
            </form>
            <button className="main_btn" onClick={removeAll}>Remove All</button>
            <div className="itemBox">
                {products.map(function (value, index) {
                    return (
                        <div>
                            <table className="table commentTable">
                                <tr><td className="labels">Product Name:</td><td>{value.Name}</td></tr>
                                <tr><td className="labels">Product Description:</td><td>{value.Description}</td></tr>
                                <tr><td className="labels">Price:</td><td>{value.Price}$</td></tr>
                                <tr><td className="labels">Product Color:</td><td>{value.Color}</td></tr>
                                <tr><td className="labels">Date:</td><td>{value.Date}</td></tr>
                            </table>
                            <button className="sub_btn" onClick={() => deleteItem(index)}>Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Ecommerce;