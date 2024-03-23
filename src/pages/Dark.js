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
  const youtubeLink = 'https://www.youtube.com/watch?v=ESEUoa-mz2c';
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
              backgroundImage: 'url(https://wallpapers.com/images/hd/dark-netflix-juehpnog0ja6xveu.jpg)',
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
                  Watch teaser 
                  <YouTubeIcon sx={{ marginLeft: '5px',color:'red' }} />
                </Typography>
                
              </a>
              <p>
              In 2019, a small German town is set on a frantic hunt searching for two missing children 
              while their sins and secrets are exposed among the four families, along with their past and
              present intertwined. This mind-bending thrill ride takes you on a journey to witness our 
              existing world in a whole new perspective.
              </p>
              <br />
              <br />
              <h2 style={{ color: 'grey' }}> Release Date: 1 December 2017 </h2>
              <br />
              <h2 style={{ color: 'grey' }}>No.of seasons: 3 </h2><br/>
              <h2 style={{ color: 'grey' }}>Genre: Thriller </h2><br/>


              <h2 style={{ color: 'grey' }}>Director: Baran bo Odar</h2><br/>

             <h2 style={{ color: 'maroon' }}>Cast</h2><p><br></br>
             Louis Hoffman(Jonas khanwald)<br></br>
             Lisa Vicari(Martha Nielson)<br></br>
             Karoline Eichhorn(Charlotte Doppler)<br></br>
             Jördis Triebel(Katharina Nielsen)<br></br>
             Andreas Pietschmann(The Stranger)<br></br>
             Maja Schöne(Hannah khanwald)</p>
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