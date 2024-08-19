'use client';
import Image from "next/image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AvatarLogin } from "./components/Avatar";
import { GenericInputBox } from "./components/GenericInputBox";
import { PauseOnHover } from "./components/Toast";
import { ArrowRightRegular } from "@fluentui/react-icons";
// Import Services
import { LoginCheck } from "./services/LoginService"
import {
  Text,
  ButtonProps,
  useId,
  Button,
  Toaster,
  useToastController,
  ToastTitle,
  Toast,
} from "@fluentui/react-components";
import { useState } from "react";
import { useUser } from './context/UserContext';
import { useRouter } from 'next/navigation';
import "./page.css";

const RightPointerButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      appearance="transparent"
      icon={<ArrowRightRegular />}
      size="small"
    />
  );
};

export default function Home() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const { user, login, logout } = useUser();


  const handleClick = async () => {
    if (userName && password) {
      // await LoginCheck(userName, password);
      if (userName === 'admin' && password === 'admin123') {
        login({ userName: 'admin', password: '###' });
        router.push('/dashboard');
      } else {}
    } else {
      console.error("Please fill in both fields.");
    }
  };

  // Generate Toast Section
  const toasterId = useId("toaster");
  const { dispatchToast } = useToastController(toasterId);
  const notify = () =>
    console.log('1')
    dispatchToast(
      <Toast>
        <ToastTitle>Hover me!</ToastTitle>
      </Toast>,
      { pauseOnHover: true, intent: "info" }
    );

  return (
    <>
      <Container>
        <Row>
          <center>
            <Col md={12} className="AvatarCol">
              <AvatarLogin size={128} />
            </Col>
            <Col md={12} className="AvatarText">
              <Text size={900} weight="regular">Guest Login</Text>
            </Col>
            <Col md={12} className="AvatarText">
              <GenericInputBox
                placeholder="User Name"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <GenericInputBox
                contentAfter={<RightPointerButton onClick={handleClick} aria-label="Enter by voice" />}
                placeholder="Password"
                style={{ marginTop: '10px' }}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Toaster toasterId={toasterId} />
            </Col>
          </center>
        </Row>
      </Container>
      {/* <PauseOnHover /> */}
    </>
  );   
}
