import React from 'react'
import UI_IMG from "../../assets/images/auth-img.png"

const AuthLayout = ({ children }) => {
    return (
        <div className="flex">
            <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
                <h2 className="text-lg font-medium text-black">Task Manager</h2>
                {children}
            </div>
            <div className="hidden md:flex w-[60vw] h-screen items-center justify-center bg-blue-50 overflow-hidden">
                <img
                  src={UI_IMG}
                  alt="Authentication Visual"
                  className="h-full w-auto max-w-full"
                />
            </div>
        </div>
    )
}

export default AuthLayout
