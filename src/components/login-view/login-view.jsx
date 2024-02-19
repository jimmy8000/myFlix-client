import { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userName = localStorage.getItem("userName");
  const token = localStorage.getItem("token");

  useEffect(() => {

    if (!userName || !token) {
      return;
    };

    fetch("https://jimmys-flix-bfa74c78fd67.herokuapp.com/users/" + userName, {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + token },
    })
    .then((response) => response.json())
    .then(data => {
      onLoggedIn(data, token);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password
    };

    fetch("https://jimmys-flix-bfa74c78fd67.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        if (data.user) {
          localStorage.setItem("userName", data.user.Username);
          localStorage.setItem("token", data.token);
          onLoggedIn(data.user, data.token);
        } else {
          alert("No such user");
        }
      })
      .catch(e => {
        console.error("Login error: ", e);
      });
  };

if (userName && token) {
  return;
}

  return (
    <Container className="mt-5">
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </Form.Group>
        
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
