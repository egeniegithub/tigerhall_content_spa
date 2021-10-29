import { useState, useRef } from "react";
import { Input } from "@chakra-ui/react";
import logo from "./animation/load.gif";
import "./App.css";
import { useQuery } from "@apollo/client";
import { getAllMessages } from "./gqlSchema/index.js";
import { BlogPostWithImage } from "./Component/cardInfo";

function App() {
  let { data, loading } = useQuery(getAllMessages);
  let loadingState = useState(false);
  let searchState = useState("");
  const inputEl = useRef("");
  const handleChange = (event) => {
    searchState[1](inputEl.current.value);
    loadingState[1](false);
  };
  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  if (data) {
    return (
      <>
          <div className="Main-Search">
            <div className="App">
              <div>
                <p className="searchHeading" style={{ color: "white" }}>
                  Search :{" "}
                </p>
                <Input
                  className="searchIcon"
                  style={{ width: "260px", height: "30px" }}
                  bg="#003238"
                  ref={inputEl}
                  border="white"
                  value={inputEl.current.value}
                  onChange={handleChange}
                  placeholder="Type Any Keyword"
                  size="md"
                  w="40"
                />
              </div>
            </div>
          </div>

          <div className="mainCard-Container">
            {data.contentCards.edges.map((obj, index) => {
              if (searchState[0] === "") {
                return (
                  <div key={index}>{<BlogPostWithImage data={obj} />}</div>
                );
              } else if (
                obj.name
                  .toLowerCase()
                  .includes(searchState[0].toLocaleLowerCase())
              ) {
                setTimeout(() => {
                  loadingState[1](true);
                }, 300);
                if (loadingState[0]) {
                  return (
                    <div key={index}>{<BlogPostWithImage data={obj} />}</div>
                  );
                } else {
                  return (
                    <>
                      <Loader />
                    </>
                  );
                }
              }
            })}
          </div>
      </>
    );
  }
}

const Loader = () => {
  return (
    <div>
      <div className="loader">
        <img src={logo} alt="loader" />
      </div>
    </div>
  );
};

export default App;
