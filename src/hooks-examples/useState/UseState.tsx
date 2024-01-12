import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Code,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import Layout from "../../Layout";

export default function UseState() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Card width="5xl">
        <CardHeader>
          <h1>React - useState</h1>
          <Stack direction="row">
            <Code>
              Armazenar estado de um componente funcional. Quando o estado é
              alterado renderiza o componente (altera valor no elemento).
            </Code>
          </Stack>
        </CardHeader>
        <CardBody>
          <Stack>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={() => setCount((count) => count + 1)}
            >
              Count
            </Button>
          </Stack>
        </CardBody>
        <CardFooter>
          <Stack>
            <label>Count is {count}</label>
          </Stack>
        </CardFooter>
      </Card>
    </Layout>
  );
}
