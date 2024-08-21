import Card from "./Card";
import './work.css'
export default function Work() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  return (
    <div className="App">
      {items.map((item, i) => (
        <Card key={i} text={item} index={i} />
      ))}
    </div>
  );
}
