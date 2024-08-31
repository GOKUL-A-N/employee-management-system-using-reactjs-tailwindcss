import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate()

    const [name,setName] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = () => {
        if(name === "Tony Stark" && password === "password") {
            navigate("/dashboard")
        }
    }

  return (
    <div className='h-screen w-full bg-secondary flex items-center justify-center  '>
        <div className="h-[400px] w-[300px] bg-white shadow-md shadow-[#555] rounded-md flex-col flex items-center justify-center">
            <h1 className='p-3 text-center w-full pt-5 font-semibold'>Login</h1>
            <form className='h-2/3 w-full p-6 flex items-center justify-center gap-6 flex-col'>
                <input type="name" className='border-b-secondary border-b-2 outline-none' placeholder='Tony Stark' onChange={(e) => setName(e.target.value)}  />
                <input type="password" className='border-b-secondary border-b-2 outline-none' placeholder='password' onChange={(e) => setPassword(e.target.value)}  />
                <button className='pl-2 pr-2 pt-1 pb-1 bg-secondary rounded-md' onClick={handleSubmit}>login</button>
            </form>
        </div>
    </div>
  )
}

export default Login