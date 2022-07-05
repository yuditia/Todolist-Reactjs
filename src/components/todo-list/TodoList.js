import "./TodoList.css";

const Todolist = (props) => {
  console.log(props.datatodos);
  return (
    <ul>
      {props.datatodos.map((todo) => {
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </ul>
  );
};

export default Todolist;
