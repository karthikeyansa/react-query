import {useState, useEffect} from "react";
import {fetchUrl} from "../helpers/HelperFunction";

function AppOne() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setdata] = useState([]);

  useEffect(()=>{
    const fetchData = async() => {
      setIsLoading(true);
      try{
        const responseData = await fetchUrl();
        setdata(responseData);
        setIsLoading(false);
      } catch(err){
        setIsLoading(false);
        setIsError(true);
        console.log(err);
      }
    }
    fetchData();
  }, [])

  if(isLoading) return (<h1>loading...</h1>);
  if(isError) return (<h1>Error...</h1>);
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <ul>
        {data && data.map((user)=>(
            <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      </div>
  );
}

export default AppOne;