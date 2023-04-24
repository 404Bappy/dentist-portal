import { useEffect, useState } from "react";

const useDoctor = email => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const existingToken = localStorage.getItem('accessToken');
        if (existingToken) {
            setToken(existingToken);
        } else if (email) {
            fetch(`http://localhost:9000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken);
                        setToken(data.accessToken);
                    }
                });
        }
    }, [email]);

    return [token];
}

export default useDoctor;
