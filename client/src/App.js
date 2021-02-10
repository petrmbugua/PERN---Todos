import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Table, Jumbotron, Form, Button } from 'react-bootstrap';

const App = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    axios
      .get('http://localhost:5000/todos')
      .then((res) => {
        const todos = res.data;
        setTodos(todos);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Jumbotron>
        <h1>Todos</h1>
        <p>CRUD</p>
      </Jumbotron>

      <Form className='py-3'>
        <Form.Group>
          <Form.Label>Todo</Form.Label>
          <Form.Control type='text' placeholder='Enter todo' />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Add
        </Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Description</th>
          </tr>
        </thead>
        {todos.map((item) => (
          <tbody key={item.todo_id}>
            <tr>
              <td>{item.todo_id}</td>
              <td>{item.description}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </Container>
  );
};

export default App;
