'use server'
 
import { redirect } from 'next/navigation'
 
export async function NavPageRedirect(url: string) {
    redirect(url)
}