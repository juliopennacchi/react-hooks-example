import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Code,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useReducer, useState } from "react";
import Layout from "../../Layout";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, { name: action.payload, isCompleted: false }],
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((item, index) =>
          index === action.payload
            ? { ...item, isCompleted: !item.isCompleted }
            : item
        ),
      };
    default:
      return state;
  }
};

function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, { counter: 0, tasks: [] });
  const [inputValue, setInputValue] = useState("");

  return (
    <Layout>
      <Card width="5xl">
        <CardHeader>
          <h1>React - useReducer</h1>
          <Stack>
            <Code>
              Também utilizado para armazenar estado de um componente porem de
              uma maneira diferente Usar o reducer quando o useState começar
              ficar muito , muito grande. Ou quando um valor de um useState
              depender de outro valor Guardar varias tarefas e mostrar na tela
            </Code>
          </Stack>
        </CardHeader>
        <CardBody>
          <Stack>
            <p>Gerenciar estados com reducer (assim como useState)</p>
            <p>{state.counter}</p>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={() => dispatch({ type: "INCREMENT" })}
            >
              {" "}
              Increment{" "}
            </Button>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={() => dispatch({ type: "DECREMENT" })}
            >
              {" "}
              Decrement{" "}
            </Button>
          </Stack>
          <Stack>
            <p>Armazenar Tasks com reducer</p>
            <Input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Add Task Here"
            />
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={() => {
                dispatch({ type: "ADD_TASK", payload: inputValue });
                setInputValue("");
              }}
            >
              {" "}
              Add Task{" "}
            </Button>
            <p></p>
            {state.tasks.map((task, index) => (
              <p
                key={index}
                onClick={() =>
                  dispatch({ type: "TOGGLE_TASK", payload: index })
                }
                style={{
                  textDecoration: task.isCompleted ? "line-through" : "none",
                }}
              >
                {task.name}
              </p>
            ))}
          </Stack>
        </CardBody>
      </Card>
    </Layout>
  );
}
export default UseReducerExample;
