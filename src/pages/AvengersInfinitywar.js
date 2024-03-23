import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from '../components/Layout/Layout';
import { Rating } from '@mui/material';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import YouTubeIcon from '@mui/icons-material/YouTube';
const defaultTheme = createTheme();

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const getLabelText = (value) => {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
};

const MovieDetails = () => {
  const [rating, setRating] = React.useState(0);
  const [comment, setComment] = React.useState('');

  const handleRatingChange = (newValue) => {
    setRating(newValue);
  };
  const youtubeLink = 'https://www.youtube.com/watch?v=QwievZ1Tx-8';
  return (
    <Layout>
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: '120vh', display: 'flex' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://wallpapers.com/images/hd/superheroes-of-avengers-infinity-war-4k-4yngzhbhqmtam73j.jpg)',
              backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
             backgroundSize:'cover',
              backgroundPosition: 'center',
              marginTop:'70px',
              marginBottom:'70px'
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={7} square  >
            <Typography sx={{padding: '20px'}}>
              <h1 style={{ color: 'brown' }}> Avengers:Infinity War</h1>
              <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                <Typography variant="body1" sx={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>
                  Watch trailer 
                  <YouTubeIcon sx={{ marginLeft: '5px',color:'red' }} />
                </Typography>
                
              </a>
              <p>
              Iron Man, Thor, the Hulk ,Captian America and the rest of the Avengers unite to battle their most powerful enemy yet 
               the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts 
               to inflict his twisted will on reality. The fate of the planet and existence itself has never been 
               more uncertain as everything the Avengers have fought for has led up to this moment.
              </p>
              <br />
              <br />
              <h2 style={{ color: 'grey' }}> Release Date: 27 April 2018 </h2>
              <br />
              <h2 style={{ color: 'grey' }}>Running time: 2h 29m </h2><br/>
              <h2 style={{ color: 'grey' }}>Genre: Action/Sci-fi </h2><br/>


              <h2 style={{ color: 'grey' }}>Director:Anthony and Joe Russo </h2><br/>

             <h2 style={{ color: 'maroon' }}>Cast</h2><p><br></br>
             Chris Evans(Captian America) <br></br>
             Robert Downey Jr (Iron man) <br></br>
             Scarlett Hohansson (Black widow) <br></br>
             Tom Holland (Spider Man) <br></br>
             Hosh Brolin(Thanos)<br></br>
             Chris Pratt(Star lord)<br></br>
             Zendaya(MJ) <br></br></p>
             Chris Hemsworth(Thor)<br></br>
             Gwyneth Paltrow(Pepper)<br></br>
             Mark Ruffalo(Hulk)<br></br>
             Elizibeth Olsen(Scarlet witch)
              <br />
             
              <br />
              <br />
              <Rating name="hover-feedback" value={rating} precision={0.5} getLabelText={getLabelText} onChange={handleRatingChange} /> <br/><br/>              <TextField
                id="outlined-multiline-static"
                label="Add a comment"
                multiline
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              
              sx={{marginRight:'50px', width: '70%' }}  
               InputProps={{
                  endAdornment: (
                    <SendIcon
                      style={{
                        cursor: 'pointer',
                        marginBottom: '80px',
                        position: 'relative',
                        bottom: '5px',
                      }}
                    />
                    
                  ),
                }}
              />
<ThumbUpIcon/>
<ThumbDownIcon
style={{
  marginLeft:'11px'
}}/>
            </Typography>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Layout>
  );
};

export default MovieDetails;