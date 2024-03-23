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
  const youtubeLink = 'https://www.youtube.com/watch?v=AjCebKn4iic';
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
              backgroundImage: 'url(https://www.thenews.com.pk/assets/uploads/magazine/2017-07-01/213759_1_044529_mag.jpg)',
              backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
             backgroundSize:'cover',
              backgroundPosition: 'center',
              marginTop:'70px',
              marginBottom:'70px'
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={7} square  >
            <Typography sx={{padding: '20px'}}>
              <h1 style={{ color: 'brown' }}> Okja</h1>
              <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                <Typography variant="body1" sx={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>
                  Watch trailer 
                  <YouTubeIcon sx={{ marginLeft: '5px',color:'red' }} />
                </Typography>
                
              </a>
              <p>
              For 10 idyllic years, young Mija has been caretaker and constant companion to Okja - a massive animal
              and an even bigger friend - at her home in the mountains of South Korea. But that changes when family-owned,
              multinational conglomerate Mirando Corporation takes Okja for themselves and transports her to New York,
              where an image-obsessed and self-promoting CEO has big plans for Mija's dearest friend. With no particular 
              plan but single-minded in intent, Mija sets out on a rescue mission.
              </p>
              <br />
              <br />
              <h2 style={{ color: 'grey' }}> Release Date: 28 June 2017 </h2>
              <br />
              <h2 style={{ color: 'grey' }}>Running time:‧2 hours</h2><br/>
              <h2 style={{ color: 'grey' }}>Genre:‧ Action/Adventure </h2><br/>


              <h2 style={{ color: 'grey' }}>Director:Bong Joon-ho</h2><br/>

             <h2 style={{ color: 'maroon' }}>Cast</h2><p><br></br>
             Ahn Seo-hyun (Mija) <br></br>
             Tilda Swinton (Lucy Mirando) <br></br>
             Paul Dano (Jay) <br></br>
             Jake Gyllenhaal (Johnny Wilcox) <br></br>
             Byun Hee-bong(Hee Bong) <br></br></p>
             Lily Collins (Red)
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