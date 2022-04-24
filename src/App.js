import {QueryClientProvider, QueryClient} from "react-query";
import AppOne from "./components/AppOne";
import AppTwo from "./components/AppTwo";
import './App.css';

function App() {
  const queryClient = new QueryClient();
  return (
    <div style={{display:"flex"}}>
      <AppOne />
      <h1>&nbsp;VS&nbsp;</h1>
      <QueryClientProvider client={queryClient}>
        <AppTwo />
      </QueryClientProvider>
    </div>
  );
}

export default App;
