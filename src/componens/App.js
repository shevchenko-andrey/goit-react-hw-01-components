import { Profile } from './Profile/Profile';
import data from '../user.json';
function App() {
  return (
    <Profile
      key={data.username}
      username={data.username}
      tag={data.tag}
      location={data.location}
      avatar={data.avatar}
      stats={data.stats}
    ></Profile>
  );
}

export default App;
