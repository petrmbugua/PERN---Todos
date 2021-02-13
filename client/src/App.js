import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';

const App = () => {
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState('[]');

  const addTodo = () => {
    axios
      .post('http://localhost:5000/todos', {
        description: description,
      })
      .then(() => {
        setTodos([...todos, { description: description }]);
      });
  };

  const getTodos = () => {
    axios.get('http://localhost:5000/todos').then((res) => {
      setTodos(res.data);
    });
  };

  return (
    <Container>
      <Form>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter todo'
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Form.Group>

        <Button onClick={addTodo} variant='primary' type='submit'>
          Add Todo
        </Button>
      </Form>
    </Container>
  );
};

export default App;
