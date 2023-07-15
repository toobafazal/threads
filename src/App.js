import logo from './logo.svg';
import './App.css';
import Threads from './page/threads';
import { ChakraProvider } from '@chakra-ui/react'
import WorkSpace from './page/workSpace';
import Infobase from './page/infobase';

function App() {
  return (
    <>
      <ChakraProvider>
        {/* <Threads /> */}
        {/* <WorkSpace /> */}
        <Infobase />
      </ChakraProvider>
    </>
  );
}

export default App;
