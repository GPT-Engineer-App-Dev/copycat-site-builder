import { Container } from "@chakra-ui/react";
import DashboardMetrics from "../components/DashboardMetrics";

const Index = () => {
  return (
    <Container maxW="container.xl" centerContent>
      <DashboardMetrics />
    </Container>
  );
};

export default Index;