import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo } from '../redux/CardFetch';
const PCard = () => {
  const dispatch = useDispatch();
  const [todos, setTodos] = useState([]);
  const data = useSelector(state => state.todo);
  
  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  useEffect(() => {
    setTodos(data.data);
  }, [data.data]);

  const handleDelete = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));

  };

  return (
    <>
      <div >
        {data.isLoading ? (
          <h1>Loading ...</h1>
        ) : (
          todos.map(todo => (
            <Card key={todo.id} sx={{ display: 'flex', flexDirection: 'row', marginBottom:"20px",marginTop:"10px" }}>
              <CardMedia
                sx={{ width: 130, height: 140 }}
                image="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                title="green iguana"
              />
              <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant='body1'>{todo.title}</Typography>
                <Typography sx={{marginRight:"50px"}} variant="body2" color="text.secondary">
                  {todo.body}
                </Typography>
              </CardContent>
           
                <Button  onClick={() => handleDelete(todo.id)} color="error">❌</Button>
              
            </Card>
          ))
        )}
      </div>
    </>
  );
}

export default PCard;
