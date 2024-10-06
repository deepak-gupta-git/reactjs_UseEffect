import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './App.css'
import { useState } from 'react';
import { Grid } from '@mui/material';

function App() {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch ("https://jsonplaceholder.typicode.com/users")
    console.log(response);
    setUsers(await response.json());
    // console.log(data);
  }

  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
   <div className="main">
          <h1 className=' text-center'>Lists Of Github Users</h1>
      <div className="container">
      <Grid container spacing={3}> {/* Use Material-UI Grid container */}
          {
            users.map((curEle) => (
              <Grid item xs={12} sm={6} md={4} key={curEle.id}>
            

        <Card className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1660798027105-5da8ad164e27?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {curEle.name}
          </Typography>
         <p>Email: {curEle.email}</p>
         <p>Username: {curEle.email}</p>
         <p>Address: {curEle.email}</p>
         <p>street: {curEle.address.street}</p>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
            ))
          }
        </Grid>
    
          </div>
     
        </div>

    </>
 
  )
}

export default App
