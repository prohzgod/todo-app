import TodoList from "./components/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";

function App() {
  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Textfield
        name="add-todo"
        placeholder="Thêm việc cần làm..."
        elemAfterInput={
          <Button isDisabled={true} appearance="primary">
            Thêm
          </Button>
        }
        css={{ padding: "2px 4px 2px" }}
      ></Textfield>
      <TodoList />
    </>
  );
}

export default App;
