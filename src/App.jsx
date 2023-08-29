import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDebounce } from "@uidotdev/usehooks";
import FoundJokes from "./Components/FoundJokes/FoundJokes";
import ContantBlock from "./Components/ContantBlock/ContantBlock";
import SearchInput from "./Components/SearchInput/SearchInput";
import Container from "./Components/Container/Container";

function App() {
  const [jokes, setJokes] = useState([]);
  const [valueInput, setValueInput] = useState("");
  const debouncedSearchTerm = useDebounce(valueInput, 400);
  console.log(jokes);
  const getArticle = async () => {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/search?query=${valueInput}`
    );
    setJokes(response.data.result);
  };

  useEffect(() => {
    if (valueInput.length >= 3) {
      getArticle();
    }
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
