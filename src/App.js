
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_DATA, DELETE_DATA, EDIT_DATA } from './action/actionConstant';
import './App.css';

function App() {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [data, setData] = useState([])
  const [index, setIndex] = useState(0)
  const [isEdit, setIsEdit] = useState(false)

  const dispatch = useDispatch()
  const user = useSelector((state) => state.listinformation.adddata)
  // console.log("user", user);

  const userdata = {
    fname,
    lname,
    email,
    password
  }
  const resetfield = () => {
    setEmail("")
    setFname("")
    setLname("")
    setPassword("")
  }
  const handlesubmit = (e) => {
    e.preventDefault()
    // setData([...data, userdata])
    if (fname === "" || lname === "" || email === "" || password === "") {
      alert("Please Input All Field")
    } else {
      if (isEdit) {
        dispatch({ type: EDIT_DATA, payload: { index: index, data: userdata } })
        resetfield()
        setIsEdit(false)
      } else {
        dispatch({ type: ADD_DATA, payload: userdata })
        resetfield()
      }
    }
  }

  const onEdit = (item, index) => {
    setEmail(item.email)
    setFname(item.fname)
    setLname(item.lname)
    setPassword(item.password)
    setIsEdit(true)
    setIndex(index)
  }
  const onDelete = (index) => {
    dispatch({ type: DELETE_DATA, payload: { index: index } })
  }
  return (
    <div className="App">
      <div className="div1">
        <form className="form" onSubmit={handlesubmit}>
          <label>FirstName :</label><br />
          <input type="text" name="fname" value={fname} onChange={(e) => setFname(e.target.value)} /><br />
          <label>LastName :</label><br />
          <input type="text" name="lname" value={lname} onChange={(e) => setLname(e.target.value)} /><br />
          <label>Email :</label><br />
          <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
          <label>Password :</label><br />
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
          <button type="submit">{isEdit ? "Update" : "Submit"}</button>
        </form>

      </div><br /><br />
      <div className='table'>
        <table border="2" >
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              user.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.fname}</td>
                    <td>{item.lname}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td><button onClick={() => onEdit(item, index)}>Edit</button>
                      <button onClick={() => onDelete(index)}>Delete</button></td>
                  </tr>
                )
              }

              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
