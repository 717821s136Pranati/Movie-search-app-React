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
  const youtubeLink = 'https://www.youtube.com/watch?v=oVzVdvGIC7U';
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
              backgroundImage: 'url(https://wallpapers.com/images/hd/the-shelby-family-of-peaky-blinders-1vx091mjkqn323ua.jpg)',
              backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
             backgroundSize:'cover',
              backgroundPosition: 'center',
              marginTop:'70px',
              marginBottom:'70px'
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={7} square  >
            <Typography sx={{padding: '20px'}}>
              <h1 style={{ color: 'brown' }}> Dark </h1>
              <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                <Typography variant="body1" sx={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>
                  Watch trailer
                  <YouTubeIcon sx={{ marginLeft: '5px',color:'red' }} />
                </Typography>
                
              </a>
              <p>
              Peaky Blinders is a British period crime drama television series created by Steven Knight. 
              Set in Birmingham, it follows the exploits of the Peaky Blinders crime gang in the direct 
              aftermath of the First World War. The fictional gang is loosely based on a real urban youth 
              gang of the same name who were active in the city from the 1880s to the 1910s.
              </p>
              <br />
              <br />
              <h2 style={{ color: 'grey' }}> Release Date: 12 September 2013 </h2>
              <br />
              <h2 style={{ color: 'grey' }}>No.of seasons: 5 </h2><br/>
              <h2 style={{ color: 'grey' }}>Genre: Drama/Crime </h2><br/>
              <h2 style={{ color: 'grey' }}>Director: Steven Knight</h2><br/>
              <h2 style={{ color: 'maroon' }}>Cast</h2><p><br></br>

             Cilian Murphy(Thomas Shelby)<br></br>
             Paul Anderson(Arthur Shelby)<br></br>
             Helen McCrory(Polly gray)<br></br>
             Sophie Rundle(Ada Shelby)<br></br>
             Anabelle Wallis(Grace)<br></br>
             Joe cole(John Shelby)
             Finn Cole(Micheal gray)
             Tom Hardy(Alfie Solomons)</p>
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