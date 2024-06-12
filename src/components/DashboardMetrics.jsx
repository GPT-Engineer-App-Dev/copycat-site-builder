import { Box, SimpleGrid, Text, useColorModeValue, Flex, VStack, HStack } from "@chakra-ui/react";
import { Line } from 'react-chartjs-2';
import { FaDatabase, FaCubes, FaChartLine, FaServer } from "react-icons/fa";
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const dataTemplate = (label) => ({
  labels: ['Apr 5', 'Apr 7', 'Apr 9', 'Apr 11', 'Apr 13', 'Apr 15', 'Apr 17', 'Apr 19', 'Apr 21', 'Apr 23', 'Apr 25', 'Apr 27', 'Apr 29', 'May 1', 'May 3'],
  datasets: [
    {
      label: label,
      data: Array.from({ length: 15 }, () => Math.floor(Math.random() * 100)),
      fill: false,
      backgroundColor: '#3182ce',
      borderColor: '#3182ce',
      tension: 0.1,
    },
  ],
});

const DashboardMetrics = () => {
  const boxBg = useColorModeValue("gray.700", "gray.900");
  const textColor = useColorModeValue("gray.400", "gray.500");

  return (
    <Box p={5} bg={boxBg} borderRadius="md" shadow="md">
      <Text fontSize="lg" mb={5} color="white">Billable Metrics</Text>
      <Text fontSize="sm" mb={5} color={textColor}>
        These metrics are estimates (updated every 24 hours) and are not an accurate reflection of your bill
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} mb={5}>
        <Box bg="gray.800" p={5} borderRadius="md">
          <HStack spacing={3}>
            <FaDatabase size="24px" color="white" />
            <Text fontSize="2xl" color="white">93.82GB</Text>
            <Text fontSize="sm" color={textColor}>current</Text>
          </HStack>
          <Line data={dataTemplate('Bytes stored')} />
        </Box>
        <Box bg="gray.800" p={5} borderRadius="md">
          <HStack spacing={3}>
            <FaCubes size="24px" color="white" />
            <Text fontSize="2xl" color="white">52K</Text>
            <Text fontSize="sm" color={textColor}>current</Text>
          </HStack>
          <Line data={dataTemplate('Object count')} />
        </Box>
        <Box bg="gray.800" p={5} borderRadius="md">
          <HStack spacing={3}>
            <FaChartLine size="24px" color="white" />
            <Text fontSize="2xl" color="white">92.1GB</Text>
            <Text fontSize="sm" color={textColor}>total</Text>
          </HStack>
          <Line data={dataTemplate('Bandwidth sent')} />
        </Box>
        <Box bg="gray.800" p={5} borderRadius="md">
          <HStack spacing={3}>
            <FaServer size="24px" color="white" />
            <Text fontSize="2xl" color="white">73K</Text>
            <Text fontSize="sm" color={textColor}>total</Text>
          </HStack>
          <Line data={dataTemplate('Requests')} />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default DashboardMetrics;