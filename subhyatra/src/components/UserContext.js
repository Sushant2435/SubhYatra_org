// UserContext.js
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);

    const updateUser = (newUserInfo) => {
        setUserInfo(newUserInfo);
    };

    return (
        <UserContext.Provider value={{ userInfo, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
