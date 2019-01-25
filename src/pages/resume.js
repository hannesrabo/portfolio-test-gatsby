import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import HighlightBox from 'components/highlight-box';
import Head from 'components/head';
import styled from 'styled-components';

const BoxContainer = styled.div`
  width: '100%';
  margin: 10px;
  padding-top: 50px;

  @media (min-width: 850px) {
    width: 800px;
    margin: 0 auto;
  }
`;

const Resume = ({ data }) => (
  <Layout>
    <Head pageTitle={data.resumeJson.title} />
    <BoxContainer>
      <HighlightBox>
        <div
          dangerouslySetInnerHTML={{
            __html: data.resumeJson.content.childMarkdownRemark.html,
          }}
        />
      </HighlightBox>
    </BoxContainer>
  </Layout>
);

Resume.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Resume;

export const query = graphql`
  query ResumeQuery {
    resumeJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
