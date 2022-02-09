import { useState } from "react";
let Comment = () => {
    let [comments, setComment] = useState([{ Title: "Judges", Body: "Description about judge", Author: "Tom williams", Date: "12-03-2022" }]);
    let addComment = (event) => {
        event.preventDefault();
        let obj = {
            Title: event.target.title.value,
            Body: event.target.body.value,
            Author: event.target.author.value,
            Date: event.target.date.value
        }
        setComment([...comments, obj]);
    }
    let removeAll = () => {
        setComment([]);
    }
    let deleteItem = (index) => {
        let newArr = comments.filter(function (val, ind) {
            if (index == ind) {
                return false;
            }
            else {
                return true;
            }
        })
        setComment(newArr);
    }
    return (
        <div className="Item commentItem">
            <h2>Comment Component</h2>
            <form onSubmit={addComment}>
                <input type="text" placeholder="Enter Comment Title" name="title" />
                <textarea placeholder="Enter Comment Body" name="body"></textarea>
                <input type="text" placeholder="Enter Author Name" name="author" />
                <input type="date" placeholder="Select Submission Date" name="date" />
                <button className="main_btn">Add Comment</button>
            </form>
            <button className="main_btn" onClick={removeAll}>Remove All</button>
            <div className="itemBox">
                {comments.map(function (value, index) {
                    return (
                        <div>
                            <table className="table commentTable">
                                <tr><td className="labels">Title:</td><td>{value.Title}</td></tr>
                                <tr><td className="labels">Body:</td><td>{value.Body}</td></tr>
                                <tr><td className="labels">Author:</td><td>{value.Author}</td></tr>
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
export default Comment;