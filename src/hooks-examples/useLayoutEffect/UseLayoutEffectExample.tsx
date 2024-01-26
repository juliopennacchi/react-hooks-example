import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Code,
  Square,
  Stack,
  Text
} from "@chakra-ui/react";
import Layout from "../../Layout";
import { useEffect, useLayoutEffect, useState } from "react";
import { PhoneIcon } from "@chakra-ui/icons";

export default function UseLayoutEffectExample() {
  const [squareSize, setSquareSize] = useState(20);
  const [squareSize2, setSquareSize2] = useState(20);
  const [alteraTamanho, setAlteraTamanho] = useState(false);

  useEffect(() => {
    console.log("Passou pelo use effect");
    setSquareSize((prev) => prev + 10 );
  }, [alteraTamanho]);

  useLayoutEffect(() => {
    console.log("Passou pelo use layout effect");
    setSquareSize2(squareSize2  + 10 );
  }, [alteraTamanho]);



  return (
    <Layout>
      <Card width="5xl">
        <CardHeader>
          <h1>React - useLayoutEffect</h1>
          <Stack>
            <Code>
              semelhante ao useEffect a diferença useEffect executa depois que o
              DOM estiver sido montado pelo React enquanto o useLayoutEffect
              executa antes que o DOM estiver sido montado pelo React
            </Code>
          </Stack>
        </CardHeader>
        <CardBody>
          <Stack>
            <Button onClick={() => setAlteraTamanho((prev) => !prev)}>Altera Tamanho</Button>
          </Stack>
          <Stack>
            <Square size={`${squareSize}px`} bg="tomato" color="white">
              <PhoneIcon />
            </Square>
            <Square size={`${squareSize2}px`} bg="tomato" color="white">
              <PhoneIcon />
            </Square>
          </Stack>
        </CardBody>
        <CardFooter>
          <Stack>
            <Text as="p">Note: ao inspecionar o codigo verá que logou primeiro pelo Use Layout Effect e depois pelo Use Effect</Text>
          </Stack>
        </CardFooter>
      </Card>
    </Layout>
  );
}
