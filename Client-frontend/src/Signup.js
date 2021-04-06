import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        // margin: theme.spacing(1),
        width: '90%',
      },
      Width: '90%',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 24,
      },
      pos: {
        marginBottom: 12,
      },
  }));

export default function Signup() {
  const classes = useStyles();
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const bull = <span className={classes.bullet}>•</span>;


  const onsubmit=()=>
  {
    //   console.log(name + email + password);
    fetch("http://localhost:3001/signup",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,
            password,
            email
        })
    })
    .then(res=>res.json())
    .then(data=>{
      if(!data.success)
      {
       alert(data.err);
       return;
     
      }
      console.log(data);
      alert(data.success);
    })
    .catch(err=>{
        console.log(err);
    })
  }
  return (
      <div >
    <Container maxWidth="sm">
    <Card className={classes.root}>
    <Container maxWidth="md">
    <div style={{margin:'auto'}}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Signup
        </Typography>
        <br />
        <form className={classes.root} noValidate autoComplete="off">
    <TextField id="standard-basic" label="name"  onChange={(e)=>setname(e.target.value)}/>
      <br />
      <TextField id="standard-basic" label="email"  onChange={(e)=>setemail(e.target.value)}/>
      <br />
      <TextField id="standard-basic" label="password"  onChange={(e)=>setpassword(e.target.value)}/>

    </form>
        <br />
      </CardContent>
      </div>
        <Button size="large" variant="primary" onClick={()=>onsubmit()}>submit</Button>
      </Container>
    </Card>
    </Container>
    </div>
  );
}
