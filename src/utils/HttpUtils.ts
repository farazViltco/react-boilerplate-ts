// Universal Hook used for Api Calls

import { useCallback, useState } from "react";
import axios from "axios";

export const useHttpClient = () => {
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [error, setError] = useState<String>("");

    const clearError = () => {
        setError('');
    };

    const sendRequest = useCallback(
        async (endpoint: String, method: String = "GET", body: any = null, headers: Object = {}) => {
            setIsLoading(true);
            let response;
            try {
                if (method === "POST" || method === "PATCH" || method === "DELETE" || method === "PUT") {
                    response = await axios.post(
                        `${process.env.REACT_APP_BASE_URL}${endpoint}`,
                        body,
                        { headers }
                    );
                } else {
                    response = await axios.get(
                        `${process.env.REACT_APP_BASE_URL}${endpoint}`
                    );
                }
                setIsLoading(false);
                return response;
            } catch (err) {
                setError(err.response);
                setIsLoading(false);
                throw err;
            }
        }, []
    );

    return { isLoading, error, sendRequest, clearError };
};