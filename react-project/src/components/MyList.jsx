import { useEffect, useState } from "react";

const myList = [
  // <h3 key="1" >Item 1</h3>,
  // <h3 key="2" >Item 2</h3>,
  // <h3 key="3" >Item 3</h3>,
  // <h3 key="4" >Item 4</h3>,
  // <h3 key="5" >Item 5</h3>,

  { id: "1", value: "Carro" },
  { id: "2", value: "Moto" },
  { id: "3", value: "Van" },
];

export default function MyList() {

  const [products, setProducts] = useState(myList);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search) {
      const newList = myList.filter((item) => {
        return item.value.toLowerCase().includes(search.toLowerCase());
      });
      setProducts(newList);
    } else {
      setProducts(myList);
    }
  }, [search]); // Segundo parâmetro do effect, significa q o primeiro acontece apenas se o segundo for alterado

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Here"
      ></input>
      
      {products.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.value}</h2>
          </div>
        );
      })}
      
    </div>
  );
}
