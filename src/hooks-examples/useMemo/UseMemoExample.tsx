import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Code,
  Stack,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import Layout from "../../Layout";

export default function UseMemoExample() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => {
      return count + 1;
    });
  };

  const decrement = () => {
    setCount((count) => {
      return count - 1;
    });
  };

  // function de exemplo onde o processo eh demorado slowFunction()
  // useMemo is used to memoize a value. It is similar to useCallback, but it is used to memoize a value instead of a function.
  // só chama a funcao quando o valor de count mudar e nao os demais elementos da tela por exemplo o elemento theme
  const isEven = useMemo(() => {
    console.log("memoizing...");
    let i = 0;
    // while (i < 2000000000) i++; //delay
    return count % 2 === 0;
  }, [count]);

  return (
    <Layout>
      <Card width="5xl">
        <CardHeader>
          <h1>React - useMemo</h1>
          <Stack>
            <Code>
              otimizar performance da aplicação, quando há um problema de
              performance no projeto se possui uma slow function, aplica-se o
              useMemo essa function somente executa se o valor dela for alterado
              tomar cuidado pois armazena na memoria, deve saber qndo utlizar
            </Code>
          </Stack>
        </CardHeader>
        <CardBody>
          <Stack direction="column">
            <h2>Par ou Impar</h2>
            <h2>Count: {count}</h2>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
          </Stack>
        </CardBody>
        <CardFooter>
          <Stack>
            <h3>Par/Impar: {isEven ? "Par" : "Impar"}</h3>
          </Stack>
        </CardFooter>
      </Card>
    </Layout>
  );
}
