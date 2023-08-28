import SearchInput from "./Components/SearchInput/SearchInput";
import Container from "./Components/Container/Container";
import React, { useEffect, useState } from "react";
import ContantBlock from "./Components/ContantBlock/ContantBlock";
import axios from "axios";
import FoundJokes from "./Components/FoundJokes/FoundJokes";

function App() {
  const [jokes, setJokes] = useState([]);
  const [valueInput, setValueInput] = useState("chack");

  const getArticle = async () => {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/search?query=${valueInput}`
    );
    setJokes(response.data.result);
  };

  useEffect(() => {
    getArticle();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    getArticle();
  };

  return (
    <>
      <SearchInput
        handleSearch={handleSearch}
        value={valueInput}
        setValueInput={setValueInput}
      />
      <FoundJokes jokes={jokes} />
      <Container>
        {jokes.map((joke) => {
          return <ContantBlock joke={joke} key={joke.id} />;
        })}
      </Container>
    </>
  );
}

export default App;
