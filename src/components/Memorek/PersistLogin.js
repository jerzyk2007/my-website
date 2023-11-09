import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "./hooks/useRefreshToken";
import useData from "./hooks/useData";

const PersistLogin = () => {
    const refresh = useRefreshToken();
    const { auth } = useData();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const verifyRefreshToken = async () => {
            try {
                await refresh();
            }
            catch (err) {
                console.error(err);
            }
            finally {
                setIsLoading(false);
            }
        };
        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);

    }, []);


    // useEffect(() => {
    //     console.log(`isLoading: ${isLoading}`);
    //     console.log(`at: ${JSON.stringify(auth?.accessToken)}`);
    //     console.log(`roles: ${JSON.stringify(auth?.roles)}`);
    //     console.log(`user: ${JSON.stringify(auth?.username)}`);
    // }, [isLoading]);

    return (
        <>
            {isLoading
                ? <p>Loading ...</p>
                : <Outlet />}
            {/* <Outlet /> */}
        </>
    );
};

export default PersistLogin;