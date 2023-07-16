'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { useUserAuth } from '@/src/context/UserAuthContext';
import { useRouter } from 'next/navigation';
import { toast } from "react-hot-toast";


const Reset: React.FC = () => {
    const [email, setEmail] = useState<string>();

    const { signUp } = useUserAuth()
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

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
                        Reset password
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
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    />

                    <button
                        type="submit"
                        className="cursor-pointer bg-[#fdf5f2] text-[#eb5757] hover:bg-[#fbebe8]
                        inline-flex items-center justify-center whitespace-nowrap h-9 rounded-md
                        text-sm font-medium px-3 py-1.5  w-full  transition-colors duration-300 ease-in "

                        style={{boxShadow:'rgba(15, 15, 15, 0.1) 0px 1px 2px, rgba(235, 87, 87, 0.3) 0px 0px 0px 1px inset',}}
                    >
                        Send reset link
                    </button>
                </form>

                <div
                    className="text-sm leading-6 mt-4 mb-4 text-center"
                    style={{color: 'rgba(55, 53, 47, 0.65)',}}
                >
                    If you already have an account{' '}
                    <Link href='/login'
                        className="inline hover:text-red-500 text-current underline select-none cursor-pointer"
                    >
                        Login
                    </Link>
                </div>


            </div>
        </div>
    );
};

export default Reset;
