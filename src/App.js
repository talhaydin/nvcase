import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import axios from 'axios';
import List from './Components/List/List';
import Filter from './Components/Filter/Filter';

function App() {
  const [people, setPeople]  = useState([]);
  const [searchValue, setSearchValue] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  
  const fetchData = () => {
    axios.get('https://5f7335deb63868001615f557.mockapi.io/list')
  .then(function (response) {
    setPeople(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
  }
  
  useEffect(()=>{ 
    fetchData();
  }, [])


  const handleFilterByJobTitle = () => {
    setPeople(people.filter(item => {
      if(jobTitle === ""){
        return item
      }
      else if (item.job.toLowerCase().includes(jobTitle.toLowerCase())){
         return item
      }
  }))

  }

  return (
    <div className="App">
     <SearchBar searchValue={searchValue} setsearchValue={setSearchValue} people={people} setPeople={setPeople}/>
     <div className="layout" id="layoutId">
     <Filter jobTitle={jobTitle} setJobTitle={setJobTitle} handleFilterByJobTitle={handleFilterByJobTitle}/>
     <div className="list"><List people={people} searchValue={searchValue} setsearchValue={setSearchValue}/></div>
    </div>
    </div>
  );
}

export default App;

