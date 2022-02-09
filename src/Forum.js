import { useState } from "react";
let Forum = (props) => {
    let [forums, setForum] = useState([{ Author: "KarunaSree", Reply: "React is a beatiful technology" }]);
    let addForum = (event) => {
        event.preventDefault();
        let obj = {
            Author: event.target.author.value,
            Reply: event.target.reply.value
        }
        setForum([...forums, obj]);
    }
    let removeAll = () => {
        setForum([]);
    }
    let deleteItem = (index) => {
        let newArr = forums.filter(function (val, ind) {
            if (index == ind) {
                return false;
            }
            else {
                return true;
            }
        })
        setForum(newArr);
    }
    return (
        <div className="Item forumItem">
            <h2>Forum Component</h2>
            <h3>Topic : {props.topic}</h3>
            <form onSubmit={addForum}>
                <input type="text" placeholder="Enter Author Name" name="author" />
                <textarea placeholder="Enter Your Reply" name="reply"></textarea>
                <button className="main_btn">Add Reply</button>
            </form>
            <button className="main_btn" onClick={removeAll}>Remove All</button>
            <div>
                <table className="table forumTable">
                    <tr>
                        <th>Author</th>
                        <th>Given Reply</th>
                        <th>del Buttons</th>
                    </tr>
                {forums.map(function (value, index) {
                    return (
                        <tr>
                            <td>{value.Author}</td>
                            <td>{value.Reply}</td>
                            <td><button className="sub1_btn" onClick={() => deleteItem(index)}>Delete</button></td>
                        </tr>                        
                    )
                })}
                </table>
            </div>
        </div>
    )
}
export default Forum;