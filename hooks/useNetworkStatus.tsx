// useNetworkStatus.ts
import { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";

const useNetworkStatus = () => {
    const [isConnected, setIsConnected] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected ?? false);
            if (!state.isConnected) {
                setErrorMessage("Network connection is required, please connect to network.");
            } else {
                setErrorMessage(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return { isConnected, errorMessage };
};

export default useNetworkStatus;