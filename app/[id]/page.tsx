'use client'
import { useState, useEffect } from 'react'
import { useRouter } from "next/navigation";
import Sidebar from '@/components/sidebar';
import Sidearea from '@/components/sidearea';
import ProtectedRoutes from '@/src/HOC/ProtectedRoute'
import { useUserAuth } from '@/src/context/UserAuthContext';


const Page = ({ params }: { params: { id: string } }) => {

    const router = useRouter()

    useEffect(() => {
        console.log(params.id);
    }, [])


    return (
        <main>
            <div className="flex flex-row bg-zinc-50 h-screen w-screen">
                <nav className="flex-2">
                    <Sidebar />
                </nav>
                <div className="flex-1">
                    <div className="flex min-h-screen bg-gray-100">
                        <div className="flex-1 p-4">
                            <h2 className="text-2xl font-bold mb-4">{params.id}</h2>
                            <p className="text-gray-600">
                                This is the main content area of your Notion Clone.
                                Add your content here and customize it to fit your needs.
                            </p>
                        </div>
                    </div>                </div>
            </div>
        </main>
    )
}

export default ProtectedRoutes(Page)