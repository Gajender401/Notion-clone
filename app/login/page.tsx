'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useUserAuth } from '@/src/context/UserAuthContext';
import { useRouter } from 'next/navigation';
import { toast } from "react-hot-toast";

const Login: React.FC = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const { login, googleOAuth } = useUserAuth()
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setFormData({ email: '', password: '' });
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-4xl mt-12vh font-bold mb-10 text-center leading-tight max-w-380px">
                Login
            </div>

            <div className="w-full flex flex-col items-center max-w-[320px]">
                <form className="w-full" onSubmit={handleSubmit}>
                    <label
                        className="block mb-4 text-sm text-gray-500"
                        style={{ color: 'rgba(55, 53, 47, 0.65)' }}
                    >
                        Email
                    </label>

                    <input
                        className="flex items-center w-full text-base leading-6 px-4 py-1  h-9 focus:outline-none relative rounded-md cursor-text mt-4 mb-4"
                        style={{
                            boxShadow: 'rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset',
                            background: 'rgba(242, 241, 238, 0.6)',
                        }}
                        placeholder="Enter your email address..."
                        type="email"
                        autoComplete="email"
                        aria-label="Enter your email address..."
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                    />

                    <input
                        className="flex items-center w-full text-base leading-6 px-4 py-1  h-9 focus:outline-none relative rounded-md cursor-text mt-4 mb-4"
                        style={{
                            boxShadow: 'rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset',
                            background: 'rgba(242, 241, 238, 0.6)',
                        }}
                        placeholder="Enter Password"
                        type="password"
                        aria-label="Password"
                        value={formData.password}
                        onChange={(e) =>
                            setFormData({ ...formData, password: e.target.value })
                        }
                    />

                    <button
                        type="submit"
                        className="cursor-pointer bg-[#fdf5f2] text-[#eb5757] hover:bg-[#fbebe8]
                        inline-flex items-center justify-center whitespace-nowrap h-9 rounded-md
                        text-sm font-medium px-3 py-1.5  w-full  transition-colors duration-300 ease-in "

                        style={{
                            boxShadow:
                                'rgba(15, 15, 15, 0.1) 0px 1px 2px, rgba(235, 87, 87, 0.3) 0px 0px 0px 1px inset',
                        }}

                    >
                        Continue with email
                    </button>
                </form>


                <div
                    className="text-sm leading-6 mt-4 text-center"
                    style={{
                        color: 'rgba(55, 53, 47, 0.65)',
                    }}
                >
                    <Link href='/reset' className="inline hover:text-red-500 text-current underline select-none cursor-pointer">
                        Forgot password?
                    </Link>
                </div>

                <div
                    className="text-sm leading-6 mt-4 mb-4 text-center"
                    style={{
                        color: 'rgba(55, 53, 47, 0.65)',
                    }}
                >
                    Don't have an account{' '}
                    <Link href='/signup'
                        className="inline hover:text-red-500 text-current underline select-none cursor-pointer"
                    >
                        Signup
                    </Link>
                </div>

                <div className="w-full h-1 border-b border-gray-200 mb-4 "></div>

                <div style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
                    <div>
                        <button
                            className="w-full text-[#111111] inline-flex  items-center justify-center whitespace-nowrap h-9 rounded-md text-base font-medium px-3 cursor-pointer bg-white mb-4"
                            style={{
                                border: '1px solid rgba(15, 15, 15, 0.15)',
                                boxShadow: 'rgba(15, 15, 15, 0.05) 0px 1px 2px',
                            }}
                            onClick={()=>googleOAuth()}
                        >
                            <FcGoogle size={18} className="mr-3" />
                            Continue with Google
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
