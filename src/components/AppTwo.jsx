import {useQuery} from "react-query";
import {fetchUrl} from "../helpers/HelperFunction";

function AppTwo() {
    const {isLoading, error, data} = useQuery("dogsData", fetchUrl);

    if(isLoading) return (<h1>loading...</h1>);
    if(error) return (<h1>Error...</h1>);
    return (
        <div className="App">
          <h1>React Query</h1>
          <ul>
            {data && data.map((user)=>(
                <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
    );
}

export default AppTwo;