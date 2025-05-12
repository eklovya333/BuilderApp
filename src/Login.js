import axios from "axios";
import { useState } from "react";



export default function Login(){

    const [mail, setMail] = useState('');
    const [passwd, setPasswd] = useState('');

    const handleChange = async (event) => {
       event.preventDefault();

       try{
        const response = await axios.post("http://localhost:5001/login", {
            email: mail,
            password: passwd
        });
        console.log("Login Successful!!!", response.data);
       }catch(error){
        console.error("Login failed:", error.response?.data || error.message);
       }
       console.log("Form submitted");
    }

    return(
        <form onSubmit={handleChange}>
            <input 
                type="text"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                placeholder="Email"
            />
            <input 
                type="password"
                value={passwd}
                onChange={(e) => setPasswd(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Submit</button>
        </form>
    );
}