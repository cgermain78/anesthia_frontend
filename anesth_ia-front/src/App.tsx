import ListGroup from "./components/ListGroup";



function App() {
    const handleSelectItem = (item:string) => {
      console.log(item);
    }
      const items = [
          "Tokyo",
      "Paris",
      "New York"
      ];


  return <div><ListGroup items = {items} heading = "Cities" onSelectItem={handleSelectItem}></ListGroup></div>
}

export default App;