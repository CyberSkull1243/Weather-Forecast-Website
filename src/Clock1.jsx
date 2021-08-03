import React , {useState} from 'react';

const Clock = () => {

    let time = new Date().toLocaleTimeString();
    const [current_time , setCurrent_time]  = useState(time);
    const UpdateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrent_time(time);
    } 

    setInterval(UpdateTime , 1000)

    return(
        <>
        <h1>{current_time}</h1>
        </>
    )
}

export default Clock;