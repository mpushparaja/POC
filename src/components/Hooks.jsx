import React, { useEffect, useState } from "react";

const array = [
  { key: "1", type: "planet", value: "Tatooine" },
  { key: "2", type: "planet", value: "Alderaan" },
  { key: "3", type: "starship", value: "Death Star" },
  { key: "4", type: "starship", value: "CR90 corvette" },
  { key: "5", type: "starship", value: "Star Destroyer" },
  { key: "6", type: "person", value: "Luke Skywalker" },
  { key: "7", type: "person", value: "Darth Vader" },
  { key: "8", type: "person", value: "Leia Organa" },
];

export default function Hooks() {
  const [data, setData] = useState(null);
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState("");
  const [filteredArray, setFilteredArray] = useState(array);

  const [bacon, setBacon] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
  };

  const inputTypeHandler = (e) => {
    setInputType(e.target.value);
  };

  // API use case
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://reqres.in/api/users/2");
      const data = await response.json();
      console.log(data);
      setData(data);
    };
    fetchData();
  }, []);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  // form valid use case

  useEffect(() => {
    if (input.length < 5 || /\d/.test(input)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [input]);

  // live filtering use case
  useEffect(() => {
    setFilteredArray(() => {
      const newArray = array
        .filter((item) => item.value.includes(inputValue))
        .filter((item) => item.type.includes(inputType));
      return newArray;
    });
  }, [inputValue, inputType]);

  // Prepare array to be rendered
  const listItems = filteredArray.map((item) => (
    <>
      <tr>
        <td style={{ border: "1px solid lightgray", padding: "0 1rem" }}>
          {item.type}
        </td>
        <td style={{ border: "1px solid lightgray", padding: "0 1rem" }}>
          {" "}
          {item.value}
        </td>
      </tr>
    </>
  ));

  //Update paragraph based fetch api call
  const submitHandler = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    const response = await fetch(
      `https://baconipsum.com/api/?type=all-meat&paras=${e.target.paragraphs.value}&start-with-lorem=1`
    );
    const data = await response.json();
    setIsLoading(false);
    setBacon(data);
  };

  const BaconParagraphs = (props) => {
    console.log(props);
    const [baconParagraphText, setBaconParagraphText] = useState([]);

    useEffect(() => {
      setBaconParagraphText(
        props.chopBacon.map((piece) => <p key={Math.random()}>{piece}</p>)
      );
    }, [props.chopBacon]); // Props

    return (
      <>
        <p>Number of paragraphs: {baconParagraphText.length}</p>
        {baconParagraphText}
      </>
    );
  };

  return (
    <div>
      Use effect scenarios
      <h3>1.Api call</h3>
      <pre>{JSON.stringify(data, null, "\t")}</pre>
      <h3>2. Running on state change: validating input field</h3>
      <form>
        <label htmlFor="input">
          Write something (more than 5 non numerical characters is a valid
          input)
        </label>
        <br />
        <input
          type="text"
          id="input"
          autoComplete="off"
          onChange={inputHandler}
          style={{ height: "1.5rem", width: "20rem", marginTop: "1rem" }}
        />
      </form>
      <p>
        <span
          style={
            isValid
              ? { backgroundColor: "lightgreen", padding: ".5rem" }
              : { backgroundColor: "lightpink", padding: ".5rem" }
          }
        >
          {isValid ? "Valid input" : "Input not valid"}
        </span>
      </p>
      <h3>3.Running on state change: live filtering</h3>
      <form
        style={{
          maxWidth: "23rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <label htmlFor="input-type">
            Filter by <b>type</b>
          </label>
          <br />
          <input
            type="text"
            id="input-type"
            autoComplete="off"
            onChange={inputTypeHandler}
            style={{ height: "1.5rem", width: "10rem", marginTop: "1rem" }}
          />
        </div>
        <div>
          <label htmlFor="input-value">
            Filter by <b>value</b>
          </label>
          <br />
          <input
            type="text"
            id="input-value"
            autoComplete="off"
            onChange={inputValueHandler}
            style={{ height: "1.5rem", width: "10rem", marginTop: "1rem" }}
          />
        </div>
      </form>
      <br />
      <table
        style={{ width: "20rem", border: "1px solid gray", padding: "0 1rem" }}
      >
        <tr>
          <th>Type</th>
          <th>Value</th>
        </tr>
        {listItems}
      </table>
      <h3>
        4.Running on props change: update paragraph list on fetched API data
        update
      </h3>
      <form onSubmit={submitHandler}>
        <label
          htmlFor="paragraphs"
          style={{ display: "block", marginBottom: "1rem" }}
        >
          How many paragraphs of "Bacon ipsum" do you want?
        </label>
        <select id="paragraphs" name="paragraphs">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <input
          type="submit"
          value="Show me the bacon!"
          style={{ marginLeft: "1rem" }}
        />{" "}
        {isLoading && <span>Getting paragraphs... </span>}
      </form>
      <BaconParagraphs chopBacon={bacon} />
    </div>
  );
}
