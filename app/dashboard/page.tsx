"use client";
import React, { useState, useEffect } from "react";
import { ChevronRightRegular } from "@fluentui/react-icons";
import { useRouter } from 'next/navigation';
import { useUser } from "../context/UserContext";
import { CompundBTN } from "../components/CompundBTN";
import { LargeSpinner } from "../components/LargeSpinner";
import { SideNav } from "../components/SideNav";
import { DashboardCard } from "../components/DashboardCard";
import "../globals.css";
import "./page.css";

// #ForSideNav Start
import { makeStyles } from "@fluentui/react-components";
const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100vh",
  },
  sidebar: {},
  content: {
    flex: 1, // Take up the remaining space
    padding: "16px",
  },
  row: {
    display: "flex",
    padding: "0px",
    alignItems: "center", // Align items in the center vertically
    marginBottom: "16px", // Add space between the rows
  },
});
// #ForSideNav End

export default function Dashboard() {
  const styles = useStyles(); // For SideNav

  const [isLoading, setIsLoading] = useState(true);  // Loading state
  const router = useRouter();

  const redirect = (url: string) => {
    router.push(url);
  };

  const { user } = useUser();

  // LOADER START
  useEffect(() => {
    // Simulate a loading delay for demonstration purposes
    const timer = setTimeout(() => {
      setIsLoading(false);  // Set loading to false after component mounts
    }, 1000);  // Adjust this timeout as needed

    return () => clearTimeout(timer);  // Cleanup the timer on component unmount
  }, []);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LargeSpinner />
      </div>
    );
  }
  // LOADER END

  return (
    <>
      {user ? (
        <div className={styles.root}>
          <div className={styles.sidebar}>
            <SideNav />
          </div>
          <div className={styles.content}>
            {/* First Row */}
            <div className={styles.row}>
              <DashboardCard />
              <DashboardCard />
            </div>
            {/* Second Row */}
            <div className={styles.row}>
              <DashboardCard />
              <DashboardCard />
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto p-4 loginBTN">
          <div className="flex items-center justify-center h-screen">
            <center>
              <CompundBTN
                onClick={() => redirect('/')}
                icon={<ChevronRightRegular />}
                text="Login"
                SecondaryText="Login To continue"
              />
            </center>
          </div>
        </div>
      )}
    </>
  );
}
