import axios from "axios"
import { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

//profileviews

const MembersPage = () => {
    const [users, setUsers] = useState([])
    const [accessToken] = useLocalStorage("accessToken", "")

    useEffect(() => {
        const fetchMembers = async () => {
            const response = await axios.get("http://127.0.0.1:8000/users/", {
                headers: {
                    Authorization: "Bearer " + accessToken,
                }
            })
            if (response.statusText === "OK") {
                const result = await response
                const result2 = response.data
                console.log(result.data)
                setUsers(result2)
                console.log(users)
                return users

            }
        }
        fetchMembers()
    }, [])


    return (
        <>
            <div>
                {users.map((user) => (
                    <div>
                        <p key={user.username}>{user.username}</p>
                    </div>
                ))}
            </div>
        </>
    )



}





export default MembersPage