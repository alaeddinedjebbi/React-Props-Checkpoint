import './App.css';
import FullName from './components/Profile/fullName/FullName';
import Bio from './components/Profile/bio/Bio';
import Profession from './components/Profile/profession/Profession';

function App() {
   
  
  return (
    <div className="App">
      <FullName name={`ALAEDDINE DJEBBI`} />
      <Bio agence={`Golden Artkom`}/>
      <Profession mission={`d’architecture logicielle d’un projet`}/> 
      
    </div>
  );
}

export default App;
