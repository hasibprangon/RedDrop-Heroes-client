import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import useAxiosPublic from '../Hooks/useAxiosPublic';

export const AuthContext = createContext(null);

const AuthContextProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const handleSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const handleSignOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const updateUserProfile = (profileData) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profileData);
    };

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, currentUser => {
    //         setUser(currentUser)
    //         if(currentUser) {
    //             const userInfo = { email: currentUser?.email };
    //             axiosPublic.post("/jwt", userInfo).then((res) => {
    //                 if (res.data?.token) {
    //                   localStorage.setItem("access-token", res.data.token);
    //                   setLoading(false);
    //                 }
    //               });
    //         }

    //         console.log("Current user: ", currentUser);
    //         localStorage.removeItem("access-token");
    //         setLoading(false);
    //     })
    //     return () => {
    //         unsubscribe();
    //     }
    // }, [axiosPublic])


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                const userInfo = { email: currentUser?.email };
                axiosPublic.post("/jwt", userInfo)
                    .then((res) => {
                        if (res.data?.token) {
                            localStorage.setItem("access-token", res.data.token);
                            setLoading(false);
                        }
                    });
            } else {
                localStorage.removeItem("access-token");
                setLoading(false);
            }
        });
        return () => unSubscribe();
    }, [axiosPublic]);


    const info = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        handleSignIn,
        handleSignOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProviders;