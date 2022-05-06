import { useEffect, useState } from "react";
import axios from "axios";
// import Login from "./components/Login"
import './App.css';

const App = () => {

  // <Login />
  const [formData, setFormData] = useState({})
  const [errorMessage, setErrorMessage] = useState(null)
  // const navigate = useNavigate()
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/token/", formData)
      console.log(response)
      if (response.data) {

        localStorage.setItem("Access Token", response.data.access)
        localStorage.setItem("Refresh Token", response.data.refresh)
        console.log("Success")
        // navigate("/blogposts/")
      }
    } catch (e) {
      setErrorMessage(e.response.data.detail)
      console.log("user doesn't exist")
    }
  }
  return (
    <div>
      <h1>Login</h1>
      {errorMessage && <div className="failure">{errorMessage}</div>}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={onChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
// const [whales, setWhales] = useState([]);

// useEffect(() => {
//   const fetchWhales = async () => {
//     const response = await fetch("http://localhost:8000/whales/");
//     const result = await response.json(response);
//     setWhales(result);
//     console.log(result)
//   };
//   fetchWhales();
// }, []);

// const handleDelete = async (id) => {
//   const response = await fetch(`http://localhost:8000/whales/${id}/`, {
//     method: "DELETE"
//   })

//   if (response.ok) {
//     setWhales(whales.filter((whale) => whale.id !== id))
//   }
// }

// return (

//   <div
//     style={{
//       // height: "100vh",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "space-evenly",
//       alignItems: "center",
//       backgroundColor: "white"
//     }}
//   >
//     <div><h1 style={{ paddingTop: "10px" }}>
//       All About Whales
//     </h1></div>
//     <div>
//       <Login />
//     </div>
//     <div>
//       {whales.map((whale) => (
//         <div
//           style={{
//             padding: 15,
//             fontSize: 24,
//             color: "turquoise",
//             borderRadius: 5,
//             border: "2px solid black",
//             marginBottom: 15,
//           }}
//         >
//           <p >{whale.name} - {whale.species_status} </p>
//           <button style={{ cursor: "pointer" }} onClick={() => handleDelete(whale.id)}>Delete</button>
//           <img src={whale.image} width={300} height={150} alt="whale" />
//         </div>

//       ))}
//     </div>
//   </div>
// );


export default App;

