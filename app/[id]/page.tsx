'use client'
import { useState, useEffect } from 'react'
import { useRouter } from "next/navigation";
import Sidebar from '@/components/sidebar';
import Sidearea from '@/components/sidearea';
import ProtectedRoutes from '@/src/HOC/ProtectedRoute'
import { useUserAuth } from '@/src/context/UserAuthContext';
import Split from 'react-split'
import Editor from "@/components/Editor/Editor";


const Page = ({ params }: { params: { id: string } }) => {

    const router = useRouter()

    useEffect(() => {
        console.log(params.id);
    }, [])


    return (
        <main>
            <Split sizes={[17,83]} className="split" gutterSize={2} gutterAlign="start" minSize={200}>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <Editor />
                </div>
            </Split>
        </main>
    )
}

export default ProtectedRoutes(Page)