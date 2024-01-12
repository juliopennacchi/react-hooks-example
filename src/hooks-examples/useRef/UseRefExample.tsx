import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Code,
  Container,
  Stack,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import Layout from "../../Layout";

function UseRefExample() {
  const [count, setCount] = useState(0);
  const ref = useRef(0);
  const ref2 = useRef(0);

  const inputRef = useRef<HTMLInputElement>();

  const handleCounteClick = () => {
    setCount(count + 1);
    alert("Count (useState) renderiza na tela");
  };

  const handleAlertClick = () => {
    alert(
      "Ref (useRef) é igual: " + ref.current + " porém não renderiza na tela"
    );
  };

  const handleAlertClick2 = () => {
    alert(
      "Ref2 (useRef) é igual: " + ref2.current + " porém não renderiza na tela"
    );
  };

  return (
    <Layout>
      <Card width="5xl">
        <CardHeader>
          <h1>React - useRef</h1>
          <Stack direction="row">
            <Code>
              Armazena um valor assim como useState mas quando componente é
              atualizado ele não renderiza novamente É possivel referenciar
              elementos html Também utilizado quando se deseja guardar o valor
              de um estado anterior (previews value)
            </Code>
          </Stack>
        </CardHeader>
        <CardBody>
          <Stack direction="row">
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={handleCounteClick}
            >
              State Count: {count}
            </Button>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={() => ref.current++}
            >
              Ref: {ref.current}
            </Button>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={handleAlertClick}
            >
              Alert Ref
            </Button>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={() => ref2.current++}
            >
              Ref2: {ref2.current}
            </Button>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={handleAlertClick2}
            >
              Alert Ref2
            </Button>
          </Stack>
        </CardBody>
        <CardFooter>
          <Stack>
            <h2>Ref Elements</h2>
            <input type="text" ref={inputRef} />
            <p></p>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={() => inputRef.current.focus()}
            >
              {" "}
              Focus on Input Using Ref{" "}
            </Button>
          </Stack>
        </CardFooter>
      </Card>
    </Layout>
  );
}
export default UseRefExample;
