import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Code,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect, SetStateAction } from "react";
import Layout from "../../Layout";

function UseEffectExample() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  //SYNC
  useEffect(() => {
    if (resourceType === "") return;
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}/1`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  }, [resourceType]);

  //ASYNC
  // useEffect(() => {
  //     const fetchResource = async () => {
  //         const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`);
  //         const responseJson = await response.json();

  //         setItems(responseJson);
  //     }
  //     fetchResource();
  // },[resourceType]);

  useEffect(() => {
    //ComponentDidMount - Somente quando o componente é renderizado pela primeira vez - Último parametro vazio []
    console.log("onMount");

    //ComponentWillUnmount quando componente é desmontado - tipo um dispose
    // exemplo de usabilidate seria fechar uma conexao
    return () => {
      console.log("onUnmount");
    };
  }, []);

  function changeResourceType(type: SetStateAction<string>): void {
    setResourceType(type);
  }

  function clearResourceType() {
    setResourceType("");
    setItems([]);
  }

  return (
    <Layout>
      <Card width="5xl">
        <CardHeader>
          <Text as="h1">React - useEffect</Text>
          <Stack>
            <Code>
              executar algo quando alguma coisa acontecer no componente, sendo
              possivel pegar todas mudancas do componente ou de apenas algum
              resource especifico Note: Eu precisei remover o React.StrictMode
              da Main.tsx para ver o userEffect comportando de modo correto, o
              React.StrictMode renderiza duas vezes em dev
            </Code>
          </Stack>
        </CardHeader>
        <CardBody>
          <Stack direction="row">
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={() => changeResourceType("posts")}
            >
              Posts
            </Button>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={() => changeResourceType("comments")}
            >
              Comments
            </Button>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={() => changeResourceType("todos")}
            >
              Todos
            </Button>
            <Button
              colorScheme="red"
              variant="outline"
              onClick={() => clearResourceType()}
            >
              Clear
            </Button>
          </Stack>
        </CardBody>
        <CardFooter>
          <Stack>
            <label>Resource Type: {resourceType}</label>
            {items.map((item) => (
              <p>{item?.id}</p>
            ))}
          </Stack>
        </CardFooter>
      </Card>
    </Layout>
  );
}
export default UseEffectExample;
