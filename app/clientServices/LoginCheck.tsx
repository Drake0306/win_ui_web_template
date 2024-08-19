// components/LoginCheck.tsx
"use client";

import { useUser } from '../context/UserContext';
import { useRouter } from 'next/navigation';

const LoginCheck = ({ userName, password }: { userName: string, password: string }) => {
  const { user, login, logout } = useUser();
  const router = useRouter();

  const handleLogin = () => {
    if (userName && password) {
      console.log("User Name:", userName);
      console.log("Password:", password);
      if (userName === 'admin' && password === 'admin123') {
        login({ userName: 'admin', password: '###' });
        router.push('/dashboard');
      } else {
        // Notify user of incorrect credentials
        console.error('Invalid credentials');
      }
    } else {
      console.error("Please fill in both fields.");
    }
  };

  return (
    <button onClick={handleLogin}>
      Login
    </button>
  );
};

export default LoginCheck;
