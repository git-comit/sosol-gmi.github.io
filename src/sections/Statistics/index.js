import React from "react"

import { Container, Row, Col } from "reusecore/Layout"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"

import statisticsImage1 from "assets/images/chart/token-chart-1.png"
import statisticsImage2 from "assets/images/chart/token-chart-2.png"

import StatisticsSectionWrapper from "./statistics.style"

const Statistics = () => {
  return (
    <StatisticsSectionWrapper>
      <Box className="statistics-wrapper">
        <Container>
          <Row>
            <Col className="md-6 sm-6">
              <Box className="statistics-image">
                <Heading as="h2">Funds Allocation</Heading>
                <img src={statisticsImage1} alt="cryptic statistics image" />
              </Box>
            </Col>
            <Col className="md-6 sm-6">
              <Box className="statistics-image">
                <Heading as="h2">Token Distribution</Heading>
                <img src={statisticsImage2} alt="cryptic statistics image" />
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </StatisticsSectionWrapper>
  )
}

export default Statistics
