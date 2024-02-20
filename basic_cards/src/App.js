import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">
          Personal Digital Assistants
          </p>
        </div>
      </section>

      <div class="container">
        <div className="columns">
          <div className="column is-3">
            <ProfileCard
            title="Alexa"
            handle="@alexa69"
            image={AlexaImage}
            description="Alexa was created by amazon and helps you buy things" />
          </div>
          <div className="column is-3">
            <ProfileCard title="Cortanta"
            handle="@ilovechief"
            image={CortanaImage}
            description="Saves Master Chief" />
          </div>
          <div className="column is-3">
            <ProfileCard title="Siri"
            handle="@whatwasthat"
            image={SiriImage}
            description="Absoulute junk" />
          </div>
        </div>
      </div>



    </div>
  );
}
export default App;
