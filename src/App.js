import React,{useEffect, useState} from 'react';

import './App.css';

function App() {
  const [repos,setRepos]=useState([]);
  useEffect( () => {
  async function getReposit(){
  

      const respnse= await fetch("https://api.github.com/users/kiranhuma/repos")
       const data=await respnse.json();
       console.log(data);
       setRepos(data);
  }
 
  getReposit()

  //  "https"://api.github.com/users/muhammadmohsin/repos"
    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    // .then(response => response.json()) ////".then" mean promise
    // .then(json => {
    //   setdata(json);
  //  })

  },[])
  return (
   <div className="App">
     <h1>all repositroy</h1>
     <ul>
       {repos.map((repoObj, ind) => {
        return(<li key={ind}>{repoObj.name}
   
        </li>)
      })}
     </ul>
    </div>
  );
}

export default App;
