import UserCard from "./components/UserCard"
import "./App.css"
import cullinan from "./assets/cullinan.webp"
import phantom from "./assets/RollsRoyce.webp"
import spectre from "./assets/spectre.webp"
import ghost from "./assets/ghost.webp"


function App() {
  return (
    <div className="container">
      <UserCard name = "Phantom" desc="The Rolls-Royce Phantom is a full-sized luxury saloon manufactured by Rolls-Royce Motor Cars. It is the eighth and current generation of the Rolls-Royce Phantom, debuting in 2017, and the second launched by Rolls-Royce under BMW ownership." img={phantom} style={{"background-color":"darkgoldenrod"}}/>
      <UserCard name="Cullinan" desc="The Rolls-Royce Cullinan is a full-sized luxury sport utility vehicle (SUV) manufactured by Rolls-Royce Motor Cars, the brand’s first all-wheel-drive vehicle. Named after the Cullinan Diamond, the largest gem-quality rough diamond ever discovered, the Cullinan sits above the Ghost and Phantom models in the Rolls-Royce lineup." img={cullinan} style={{"background-color":"darkgoldenrod"}}/>
      <UserCard name="Ghost" desc="The Rolls-Royce Ghost is a full-sized luxury car manufactured by Rolls-Royce Motor Cars. The name “Ghost” pays homage to the Silver Ghost, a car first produced in 1906. The production model was officially unveiled at the 2009 Frankfurt Motor Show." img={ghost} style={{"background-color":"darkgoldenrod"}}/>
      <UserCard name="Spectre" desc="The Rolls-Royce Spectre is a full-sized luxury electric grand tourer manufactured by Rolls-Royce Motor Cars. It was formally launched in 2023 and the first deliveries were made in the last quarter of that year. The Spectre marks Rolls-Royce’s entry into the electric vehicle market, with a plan to phase out gasoline-powered models and replace them entirely with EVs by 2030." img={spectre} style={{"background-color":"darkgoldenrod"}}/>
    </div>
  )
}

export default App
