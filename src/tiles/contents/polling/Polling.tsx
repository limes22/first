import axios from "axios";
import React, { useEffect, useState } from "react";

const Polling = () => {
    useEffect(() => {
        console.log("now mount");
        return () => console.log("unmount");
    }, []);

    useEffect(() => {
        console.log("now i'm update");
    });

    const [poll, setPoll] = useState();

    const getNaver = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/posts?userId=1");
        setPoll(result.data);
        console.log(result);
    };

    useEffect(() => {
        getNaver();
    }, []);



    return (
        <>
            <a>
                {poll}
            </a>

        </>
    );
}

export default Polling;