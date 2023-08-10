
import './App.css';
import Post from "./Pages/Posts"

function App() {
  return (
    <div>
        <Post
          avatar={'https://i.postimg.cc/6qtzRpRk/IMG-20230413-170805-149.jpg'}
          name={'Rabe Ahmed'}
          time={'10 minutes ago'}

          caption={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
          image={'https://media.wired.com/photos/64790f5a0b67c709cbcaa9b5/master/w_2560%2Cc_limit/Spider-Man-Across-The-Spider-Verse-Monitor-Culture.jpg'}
        />

<Post
          avatar={'https://m.media-amazon.com/images/M/MV5BMjQzYjc0N2MtZmQzZC00ZmEzLWI5MDItMGNlOWJlMTMyZWU0XkEyXkFqcGdeQXVyMTEyNjA3MjMx._V1_UY140_CR30,0,140,140_.jpg'}
          name={'Robert Oppenheimer'}
          time={'16 hours ago'}

          caption={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
          image={'https://images.bauerhosting.com/empire/2022/07/oppenheimer-poster-crop.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill'}
        />

<Post
          avatar={'https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e1e3b25/_orig/pixomatic_1572877090227.png'}
          name={'Jason'}
          time={'43 seconds ago'}

          caption={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
          image={'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg'}
        />
    </div>
  );
}

export default App;
