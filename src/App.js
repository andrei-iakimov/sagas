import React, {useState, useEffect} from 'react';
import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import * as types from './redux/actionTypes';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function App() {
  const [search, setSerach] = useState("");
  const [query, setQuery] = useState("chicken");
  //const [spacing, setSpacing] = React.useState(2);

  //since root reducer is registered with data key we give state.data
  const {recipies} = useSelector(state => state.data);
  console.log(recipies);

  const updateSearch = () => {
    setQuery(search);
    setSerach("");
  };

  let dispatch = useDispatch();

  useEffect(() =>{
    dispatch({type: types.FETCH_RECIPE_START, payload: query});
  }, [query]);
  return (
    <div className="App">
      <h2>Recipe App</h2>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Standard" variant="standard" type='text' value={search} onChange={(e) => setSerach(e.target.value)} />
      <Button className='search-btn' variant="outlined" onClick={updateSearch}>Search</Button>
    </Box>
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={2}>
                {recipies && recipies.hits && recipies.hits.map((value) => (
                  <Grid key={value} item>
                    <Paper sx={{ height: 140, width: 100 }} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
        </Grid>
    
    </div>
  );
}

export default App;
