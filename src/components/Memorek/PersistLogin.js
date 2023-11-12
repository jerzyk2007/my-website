import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "./hooks/useRefreshToken";
import useData from "./hooks/useData";

const PersistLogin = () => {
    const refresh = useRefreshToken();
    const { auth, persist } = useData();
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

    return (
        <>
            {!persist
                ? <Outlet />
                : isLoading
                    ? <p>Loading ...</p>
                    : <Outlet />}
        </>
    );
};

export default PersistLogin;