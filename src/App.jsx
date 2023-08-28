import SearchInput from "./Components/SearchInput/SearchInput";
import Container from "./Components/Container/Container";
import React, { useEffect, useState } from "react";
import ContantBlock from "./Components/ContantBlock/ContantBlock";
import axios from "axios";
import FoundJokes from "./Components/FoundJokes/FoundJokes";
import { useDebounce } from "@uidotdev/usehooks";

function App() {
  const [jokes, setJokes] = useState([]);
  const [valueInput, setValueInput] = useState("");
  const debouncedSearchTerm = useDebounce(valueInput, 500);

  const getArticle = async () => {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/search?query=${valueInput}`
    );
    setJokes(response.data.result);
  };

  useEffect(() => {
    getArticle();
  }, [debouncedSearchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    getArticle();
  };

  return (
    <>
      <SearchInput
        handleSearch={handleSearch}
        valueInput={valueInput}
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
