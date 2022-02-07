import { Box } from "@chakra-ui/react";
import Layout from "src/components/Layout";
import Footer from "src/components/Footer";

import { getAllTechnologies, getAllSeries } from "src/lib/dato-cms";

function Home() {
  return (
    <Layout>
      <Box pb={10}>
        <Footer />
      </Box>
    </Layout>
  );
}

export default Home;

export const getStaticProps = async () => {
  const technologies = await getAllTechnologies();
  const series = await getAllSeries();

  return {
    props: {
      technologies,
      series,
    },
    revalidate: 120,
  };
};
