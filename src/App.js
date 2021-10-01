import { robots } from "./robots";
import CardList from "./components/CardList";
import { useEffect, useRef, useState } from "react";
function App() {
  const [field, setField] = useState();
  const [isFixed, setIsFixed] = useState(false);
  const [data, setData] = useState(robots);
  const inputRef = useRef(null);

  const inputChange = (event) => {
    setField(event.target.value);
    setData(
      robots.filter((robot) =>
        robot.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };
  useEffect(() => {
    const scrollInput = (event) => {
      event.target.scrollingElement.scrollTop >= inputRef?.current?.offsetTop
        ? setIsFixed(true)
        : setIsFixed(false);
    };
    window.addEventListener("scroll", scrollInput);
  }, []);

  return (
    <div className="container">
      <h1>RoboFriends</h1>
      <input
        type="text"
        value={field}
        onChange={inputChange}
        ref={inputRef}
        className={isFixed ? "fixed" : ""}
      />
      <CardList data={data} />
    </div>
  );
}

export default App;
