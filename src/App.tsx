import { PetContextProvider } from './contexts/PetContext';

import Header from './components/Header/Header';
import Pets from './components/Pets/Pets';


const App = () => {
    return (
      <PetContextProvider>

          <Header /> 
          <Pets /> 
          
      </PetContextProvider>
    )
}

export default App
