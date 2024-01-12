import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Code,
  Container,
  Divider,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useCallback, useState } from "react";
import List from "./List";
import Layout from "../../Layout";

export default function UseCallbackExample() {
  const [text, setText] = useState("");
  const [resourceType, setResourceType] = useState("");

  const getItems = useCallback(
    async (number) => {
      console.log("getItems is being called");
      console.log(number);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${resourceType}`
      );
      const json = await response.json();
      return json;
    },
    [resourceType]
  );

  return (
    <Layout>
      <Card width="5xl">
        <CardHeader>
          <Text as="h1">React - useCallback</Text>
          <Stack direction="row">
            <Code>
              usa-se também para otimizar performance similar ao useMemo, porem
              o useCallback armazena a funcao em memoria enquanto o useMemo
              armazena o retorno da funcao guarda uma funcao em memoria e ela so
              é recriada se algum dos itens especificado nela for alterado
              Quando usar? Sempre que tiver uma funcao que estiver sendo passada
              como prop e essa funcao tem algum processamento pesado e que se
              executado sempre que o componente renderizado na tela, podera
              causar problema de performance
            </Code>
          </Stack>
        </CardHeader>
        <CardBody>
          <Stack direction="column">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button onClick={() => setResourceType("posts")}>Posts</Button>
            <Button onClick={() => setResourceType("comments")}>
              Comments
            </Button>
            <Button onClick={() => setResourceType("todos")}>Todos</Button>
          </Stack>
        </CardBody>
        <CardFooter>
          <Stack>
            <List getItems={getItems} />
          </Stack>
        </CardFooter>
      </Card>
    </Layout>
  );
}
