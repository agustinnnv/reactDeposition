import './App.css';
import Deposition from './components/Deposition';



function App() {
  return (
    <div className="App">
      <div className="principal-container">
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Deposition
         name = 'Shawn Wang'
         country = 'Singapore'
         image = 'Shawn'
         load = 'Software Engineer'
         company = 'Amazon'
         deposition = "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
         />
         <Deposition 
        name = 'Sarah Chima'
        country = 'Nigeria'
        image = 'Sarah'
        load = 'Software Engineer'
        company = 'ChatDesk'
        deposition = "freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."

        />

        <Deposition 
        name = 'Emma Bostian'
        country = 'Sweden'
        image = 'Emma'
        load = 'Software Engineer'
        company = 'Facebook'
        deposition = "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."/>
         
      </div>
    </div>
  );
}

export default App;