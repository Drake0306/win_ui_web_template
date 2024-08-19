'use server'
 
import { redirect } from 'next/navigation'

export async function LoginCheck(userName: string, password: string) {
    if (userName && password) {
        console.log("User Name:", userName);
        console.log("Password:", password);
        if (userName === 'admin' && password === 'admin123') {
          // redirect('/dashboard')
        } else {
          // notify()
        }
      } else {
        console.error("Please fill in both fields.");
      }
}