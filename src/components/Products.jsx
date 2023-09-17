import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Carousel from './Carousel';
import Parse from 'parse';
import {useHistory} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Products = (props) => {
  
  
const id = props.match.params.id;


  const [index, setIndex] = React.useState(0);
  const user = Parse.User.current();
  const [data,setData]=React.useState({
    results:[],count:0
  });
  const [count,setCount] = React.useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const history = useHistory();
  React.useEffect(()=>{
    const process = async()=>{
      try{
const query = new Parse.Query('Cart');
query.withCount();
query.equalTo('user',user);
const records = await query.find();
console.log(records);

await setData(records);
console.log(records)

      }
      catch(err){
alert(err.message)
      }
      
      
    }
    process();
  },[])
  
  
      
  return (
    <div className='container' >
      < ShoppingBasketIcon style={{color:'red', position:'absolute', right:'60px',top:'0'}}/>
    
  
      <small style={{color:'white', position:'absolute', right:'68px',top:'3px'}}>{count}</small>
      <div className='label'>

      </div>
      <div className='carousel'>
<Carousel/>

      </div>
        <Grid container spacing={2}>
          <Grid item xs={4}>
         <Item>

     {data.results.length>0 && data.results.map((item)=>{
      return <div key={item.id} className='flex-pro'>
         <Box sx={{ flexGrow: 1 }}>
      
       
          
          <Card sx={{ maxWidth: 300 }} className='card' >
       <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={item.get('url')}
          alt="green iguana"
        />
        <CardContent style={{textAlign:'center'}}>
          <Typography gutterBottom variant="h5" component="div">
            {item.get('price')}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {item.get('description')}
            

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={`/product/${item.id}`}>
        <Button size="lg" color="primary"style={{width:'100%'}} onClick={()=>{
          setCount((prev)=>{
            return prev + 1;
          })
        }}>
         Add to cart
        </Button>
        </a>
      </CardActions>
      </Card>
          
        
        
       
      
    </Box>
   
      </div>
     })}
     
    
     </Item>
    </Grid>
   
     </Grid>
    </div>
  )
}

export default Products


