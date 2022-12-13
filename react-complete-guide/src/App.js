import ExpenseItem from "./components/Expenseltem";
import "./App.css";

function App() {
  const values = [
    { id: "1 ", title: "First Challenge", link: "youtube.com.br/lucckszim" },
    { id: "2", title: "Second Challenge", link: "youtube.com.br/felpsz" },
    {
      id: "3",
      title: "Third Challenge",
      link: "Youtube.com.br/spectroPlayer",
    },
  ];

  return (
    <div>
      <h2>Let´s get started!</h2>
      <ExpenseItem
        id={values[0].id}
        title={values[0].title}
        link={values[0].link}
      ></ExpenseItem>
      <ExpenseItem
        id={values[1].id}
        title={values[1].title}
        link={values[1].link}
      ></ExpenseItem>
      <ExpenseItem
        id={values[2].id}
        title={values[2].title}
        link={values[2].link}
      ></ExpenseItem>
    </div>
  );
}

export default App;
