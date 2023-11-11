'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/login');
        }
    }, [user, router]);
    return (
        <div>
            <h1>Message Page</h1>
            <p>This is a protected page.</p>
            <button onClick={() => router.push('/login')}>Logout</button>
        </div>
    )
}
