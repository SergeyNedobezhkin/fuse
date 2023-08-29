import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FoundJokes from "./Components/FoundJokes/FoundJokes";
import ContantBlock from "./Components/ContantBlock/ContantBlock";
import SearchInput from "./Components/SearchInput/SearchInput";
import Container from "./Components/Container/Container";
import { axiosJokes } from "./slice/jokeSlice";

function App() {
  const dispatch = useDispatch();
  const [valueInput, setValueInput] = useState("");
  const jokes = useSelector((state) => state.jokes.jokes);

  useEffect(() => {
    if (valueInput.length >= 3) {
      dispatch(axiosJokes(valueInput));
    }
  }, [dispatch, , valueInput]);

  return (
    <>
      <SearchInput valueInput={valueInput} setValueInput={setValueInput} />
      <FoundJokes jokes={jokes} />
      <Container>
        {jokes.map((joke) => {
          return (
            <a key={joke.id} href={joke.url}>
              <ContantBlock joke={joke} />
            </a>
          );
        })}
      </Container>
    </>
  );
}

export default App;
