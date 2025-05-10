import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-signin-screen">
      <h1>Profile</h1>
      <Form.Control id="wd-username"
             placeholder="alice"
             className="mb-2"/>
      <Form.Control id="wd-password"
             placeholder="123" type="password"
             className="mb-2"/>
      <Form.Control id="wd-first-name"
             placeholder="Alice" 
             className="mb-2"/>
      <Form.Control id="wd-last-name"
             placeholder="Wonderland"
             className="mb-2"/>
      <Form.Control id="wd-dob"
             placeholder="2000-01-01" type="date"
             className="mb-2"/>
      <Form.Control id="wd-email"
             placeholder="alice@wonderland" 
             className="mb-2"/>
      <Form.Control id="wd-faculty"
             placeholder="User" 
             className="mb-2"/>
      <Link id="wd-signin-btn"
            to="/Kambaz/Account/Signin"
            className="btn btn-danger w-100 mb-2">
            Sign out </Link>
    </div> );}