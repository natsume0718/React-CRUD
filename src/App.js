import { TodoList } from "./components/TodoList";
import { Row, Col } from "antd";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={8} />
        <Col span={8}>
          <TodoList />
        </Col>
        <Col span={8} />
      </Row>
    </div>
  );
}

export default App;
