
import './App.css';
import Post from "./Pages/Posts"

function App() {
  return (
    <div>
        <Post
          avatar={'https://i.postimg.cc/6qtzRpRk/IMG-20230413-170805-149.jpg'}
          name={'Rabe Ahmed'}
          time={'10 minutes ago'}

          caption={'eady announce `img` tags as an image. You don’t need to use the words `image`, `photo,'}
          image={'https://i.postimg.cc/6qtzRpRk/IMG-20230413-170805-149.jpg'}
        />
    </div>
  );
}

export default App;
