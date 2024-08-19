'use client';
import Image from "next/image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AvatarLogin } from "../components/Avatar";
import { GenericInputBox } from "../components/GenericInputBox";
import { SideNav } from "../components/SideNav";
import { useState } from "react";
import "./page.css";
import { useUser } from '../context/UserContext'

export default function Dashboard() {
  const { user } = useUser();
  return (
    <>
     {user ? (
        <Container fluid>
          <Row><SideNav /></Row>
        </Container>
      ) : (
        <button>Login</button>
       )}      
    </>
  );   
}
