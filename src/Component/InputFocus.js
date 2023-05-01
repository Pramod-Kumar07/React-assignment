import { useEffect, useState , useRef } from 'react'


export default function InputFocus() {

        const [name, setName] = useState();
        // const [updateName, setUpdateName] = useState(name);
        const [userName, setUserName]= useState();
        // const [updateUserName, setUpdateUserName]= useState(userName);
        const [isClick, setIsClick] = useState(false);
        function handleClick() {
            setIsClick(true);
            // setName(name);
            // setUserName(userName);
        }
    

    return(
        <div>
            <input type="text" placeholder='user name' value={name} onChange={(e)=>setName( e.target.value)} />
            <input type='text' placeholder='name' value={userName} onChange={(e)=>setUserName(e.target.value)} />
            <input type='password' placeholder='password'/>
            <button onClick={handleClick}>click</button>
            {isClick ?
                <div>
            <h3>{name}</h3>
            <h3>{userName}</h3>
            </div>
            : <h3>No Data available</h3>}
        </div>
    )
}