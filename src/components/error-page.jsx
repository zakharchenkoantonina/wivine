import { Link, useRouteError } from "react-router-dom";
import Footer from "./footer";
import { Button, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
        <div id="error-page">
        <h1>Oops!</h1>
        <p>Cette page n'existe pas. Allez vers la page principale de la campagne</p>
        <p>Voter Dr. Wivine Ngandu</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
        <Link to={"/"}>
        <Button w={"full"} variant={"outline"} leftIcon={<ExternalLinkIcon />} >
              <Text>Page principale</Text>
        </Button>
        </Link>
        </div>
        <Footer/>
    </>
    
  );
}