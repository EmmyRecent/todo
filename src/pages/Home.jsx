import InputArea from "../components/InputArea";
import Heading from "../components/Heading";
import ListItems from "../components/ListItems";
import Footer from "../components/Footer";
import { useState } from "react";

const Home = () => {
  const [list, setList] = useState([]);

  const addItem = (item, setInput) => {
    setList((prevValue) => {
      return [...prevValue, item];
    });

    setInput("");
  };

  const deleteItem = (item) => {
    setList((prevValue) => {
      return prevValue.filter((value) => {
        return value !== item;
      });
    });
  };

  return (
    <div>
      <div className="container">
        <Heading />
        <InputArea onAdd={addItem} />
        {list.map((item, index) => (
          <ListItems key={index} text={item} onDelete={deleteItem} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
