import dark from "../images/dark.jpg";
import pb from "../images/pb.jpg";
import eight from"../images/eight.jpg"
import got from"../images/got.jpg";
import bm from"../images/bm.jpg";
import mh from "../images/mh.jpg";
import b from "../images/b.jpg";
import sg from "../images/sg.jpg";
import cher from "../images/cher.jpg";
import { Link } from 'react-router-dom';
export const MenuList = [
  {
    name: (
      <Link to="/dark">Dark</Link>
    ),
    description:
      "Dark is a German science fiction thriller television series co-created by Baran bo Odar and Jantje Friese. It ran for three seasons from 2017 to 2020. The story follows characters from the fictional town of Winden, Germany, as they pursue the truth in the aftermath of a child's disappearance. ",
    image: dark,
    
  },
  {
    name:  (
      <Link to="/peakyblinders">Peaky Blinders</Link>
    ),
    description:
      "Peaky Blinders is a British period crime drama television series created by Steven Knight. Set in Birmingham, it follows the exploits of the Peaky Blinders crime gang in the direct aftermath of the First World War. The fictional gang is loosely based on a real urban youth gang of the same name who were active in the city from the 1880s to the 1910s.",
    image: pb,
    
  },
  {
    name:  (
      <Link to="/1899">1899</Link>
    ),
    description:
      "Avengers: 1899 is a multilingual German period mystery-science fiction television series created by Jantje Friese and Baran bo Odar. It premiered on Netflix in November 2022 and received generally favorable reviews. The series was cancelled in January 2023. As of January 2024 all 8 episodes of season 1 are available for viewing/streaming on Netflix.",
    image: eight,
    
  },
  {
    name: (
      <Link to="/gameofthrones">Game Of Thrones</Link>
    ),
    description:
      "Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire, a series of fantasy novels by George R. R. Martin, the first of which is A Game of Thrones",
    image: got,
    
  },
  {
    name: (
      <Link to="/blackmirror">Black Mirror</Link>
    ),
    description:
      "Black Mirror is a British anthology television series created by Charlie Brooker. Individual episodes explore a diversity of genres, but most are set in near-future dystopias with sci-fi technology—a type of speculative fiction. The series is inspired by The Twilight Zone and uses the themes of technology and media to comment on contemporary social issues.",
    image: bm,
    
  },
  {
    name: (
      <Link to="/monryhiest">Money Heist</Link>
    ),
    description:
     "Money Heist  is a Spanish heist crime drama television series created by Álex Pina. The series traces two long-prepared heists led by the Professor (Álvaro Morte), one on the Royal Mint of Spain, and one on the Bank of Spain, told from the perspective of one of the robbers, Tokyo",
    image: mh,
    
  },
  {
    name: (
      <Link to="/bridgreton">Bridgerton</Link>
    ),
    description:
     "Bridgerton is an American historical fiction-romance streaming television series created by Chris Van Dusen for Netflix. Based on the book series by Julia Quinn, it is Shondaland's first scripted show for Netflix.",
    image: b,
    
  },
  {
    name: (
      <Link to="/squidgame">Squid Game</Link>
    ),
    description:
     "Squid Game is a South Korean television series created by Hwang Dong-hyuk for Netflix.quid Game was released worldwide on September 17, 2021, to critical acclaim and international attention. It became Netflix's most-watched series and the most-watched program in 94 countries",
    image: sg,
    
  },
 
  {
    name: (
      <Link to="/chernobyl">Chernobyl</Link>
    ),
    description:
     "Chernobyl is a 2019 historical drama television miniseries that revolves around the Chernobyl disaster of 1986 and the cleanup efforts that followed. The series was created and written by Craig Mazin and directed by Johan Renck. It features an ensemble cast led by Jared Harris, Stellan Skarsgård, Emily Watson, and Paul Ritter.",
    image: cher,
    
  },
  
];
