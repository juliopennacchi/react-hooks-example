import { Card, CardBody, CardHeader, Code, Stack } from "@chakra-ui/react";
import Layout from "../../Layout";
import Message from "./Message";
import ThemeContextProvider from "./contexts/ThemeContext";

function UseContextExample() {
  return (
    <Layout>
      <Card width="5xl">
        <CardHeader>
          <h1>React - useContext</h1>
          <Stack>
            <Code>
              usado em conjunto com context api para passar props para uma
              arvore de componentes context tem um objeto com seus valores e
              açoes provider fica em volta de todos componentes que vamos querer
              acessar as props para o provider passar à eles
            </Code>
          </Stack>
        </CardHeader>
        <CardBody>
          <Stack>
            <ThemeContextProvider>
              <Message />
            </ThemeContextProvider>
          </Stack>
        </CardBody>
      </Card>
    </Layout>
  );
}
export default UseContextExample;
