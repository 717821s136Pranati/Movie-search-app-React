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
  const youtubeLink = 'https://www.youtube.com/watch?v=YoHD9XEInc0';
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
              backgroundImage: 'url(https://2.bp.blogspot.com/-isURWMkb12c/VCaR4cWK9GI/AAAAAAAADl8/Fbi7MYGFoNM/s1600/wallpaper3.jpg)',
              backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
             backgroundSize:'cover',
              backgroundPosition: 'center',
              marginTop:'70px',
              marginBottom:'70px'
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={7} square  >
            <Typography sx={{padding: '20px'}}>
              <h1 style={{ color: 'brown' }}> Inception</h1>
              <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                <Typography variant="body1" sx={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>
                  Watch trailer 
                  <YouTubeIcon sx={{ marginLeft: '5px',color:'red' }} />
                </Typography>
                
              </a>
              <p>
              Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams and steal their
              secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage 
              but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly 
              impossible task: Plant an idea in someone's mind. If he succeeds, it will be the perfect crime, but a dangerous
              enemy anticipates Cobb's every move.
              </p>
              <br />
              <br />
              <h2 style={{ color: 'grey' }}> Release Date: July 16, 2010 </h2>
              <br />
              <h2 style={{ color: 'grey' }}>Running time:‧ ‧ 2h 28m </h2><br/>
              <h2 style={{ color: 'grey' }}>Genre:‧ Sci-fi/Action </h2><br/>


              <h2 style={{ color: 'grey' }}>Director:Christopher Nolan</h2><br/>

             <h2 style={{ color: 'maroon' }}>Cast</h2><p><br></br>
             Leonardo DiCaprio(Cobb)<br></br>
             Joseph Gorden-Leviett(Arthur)<br></br>
             Cilian Murphy(Fischer)<br></br>
             Tom Hardy(Esmes)<br></br>
             Elliot Page(Ariadne)<br></br></p>
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