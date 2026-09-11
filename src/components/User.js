import { useEffect, useState } from "react";

const User = ( props ) => {
    const [val, setVal] = useState(0);
     const [val1, setVal1] = useState(0);
     useEffect(() => {
        const timer = setInterval(() => {
            console.log("SET INTERNAL FUNCTION COMP")
        }, 1000);

        return () => {
            clearInterval(timer)
        }
     })
    return (
        <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
            <h2>{props?.name}</h2>
            <h3>Location: Noida</h3>
            <h3>{val}- {val1}</h3>
        </div>
    )
}

export default User;