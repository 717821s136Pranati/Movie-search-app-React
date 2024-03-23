//import poster from "../images/poster.jpg";
import inception from "../images/inception.jpg";
import okja from "../images/okja.jpg";
import avengers from"../images/avengers.jpg"
import jaibhim from"../images/jaibhim.jpg";
import interstellar from"../images/interstaller.jpg";
import barbie from"../images/barbie.jpg"
import kv from"../images/kv.jpg";
import opp from "../images/opp.jpg";
import looper from "../images/looper.jpg";
import { Link } from 'react-router-dom';

export const MenuList = [
  {
    name: (
      <Link to="/inception">Inception</Link>
    ),
    description:
      "Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with Emma Thomas, his wife. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets",
    image: inception,
    
  },
  {
    name:  (
      <Link to="/okja">Okja</Link>
    ),
    description:
      "Okja is a 2017 science-fantasy action-adventure film directed by Bong Joon-ho with a screenplay by Bong and Jon Ronson from a story by Bong. The film is about a young girl who raised a genetically modified super pig (the titular Okja), and, after she is taken to the United States, goes on a mission to rescue her from mistreatment at the hands of the meat industry",
    image: okja,
    
  },
  {
    name:  (
      <Link to="/avengersinfinitywar">Avengers Infinity war</Link>
    ),
    description:
      "Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to The Avengers (2012) and Avengers: Age of Ultron (2015), and the 19th film in the Marvel Cinematic Universe (MCU).",
    image: avengers,
    
  },
  {
    name: (
      <Link to="/jaibhim">Jai bhim</Link>
    ),
    description:
      "Jai Bhim is a 2021 Indian Tamil-language legal drama film directed by T. J. Gnanavel and produced by Jyothika and Suriya under 2D Entertainment. The film stars Suriya, Lijomol Jose and Manikandan with Rajisha Vijayan, Prakash Raj, Guru Somasundaram and Rao Ramesh others in supporting roles.",
    image: jaibhim,
    
  },
  {
    name: (
      <Link to="/kadaisivivasayi">Kadaisi Vivasayi</Link>
    ),
    description:
      "Kadaisi Vivasayi is a 2022 Indian Tamil-language drama film by M. Manikandan. It stars an 85-year-old farmer named Nallando and revolves around his life as a farmer.It won the Best Feature Film In Tamil, Special Mention for actor Nallandi at the 69th National Film Awards.",
    image: kv,
    
  },
 
  {
    name: (
      <Link to="/interstellar">Interstellar</Link>
    ),
    description:
      "Interstellar is a 2014 epic science fiction film co-written, directed, and produced by Christopher Nolan.Set in a dystopian future where humanity is embroiled in a catastrophic blight and famine, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humankind. ",
    image: interstellar,
   
  },
  {
    name: (
      <Link to="/barbie">Barbie</Link>
    ),
    description:
      " Barbie is a 2023 fantasy comedy film directed by Greta Gerwig from a screenplay she wrote with Noah Baumbach. Based on the eponymous fashion dolls by Mattel, it is the first live-action Barbie film after numerous computer-animated films and specials.  ",
    image: barbie,
   
  },
  {
    name: (
      <Link to="/oppenhiemer">Oppenhiemer</Link>
    ),
    description:
      "Oppenheimer is a 2023 epic biographical thriller film written and directed by Christopher Nolan.[8] It stars Cillian Murphy as J. Robert Oppenheimer, the American theoretical physicist credited with being the father of the atomic bomb for his role in the Manhattan Project—the World War II undertaking that developed the first nuclear weapons.",
    image: opp,
   
  },
  {
    name: (
      <Link to="/looper">Looper</Link>
    ),
    description:
      "Looper is a 2012 American science fiction action-thriller film written and directed by Rian Johnson, and produced by Ram Bergman and James D. Stern. It stars Bruce Willis, Joseph Gordon-Levitt, and Emily Blunt.The film received critical acclaim and was a box office success, grossing $176 million worldwide on a $30 million budget.",
    image: looper,
   
  },
];
