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

  @media (min-width: 850px) {
    width: 800px;
    margin: 0 auto;
  }
`;

const Index = ({ data }) => (
  <Layout>
    <Head pageTitle={data.homeJson.title} />
    <BoxContainer>
      <HighlightBox>
        <div
          dangerouslySetInnerHTML={{
            __html: data.homeJson.content.childMarkdownRemark.html,
          }}
        />
      </HighlightBox>
    </BoxContainer>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomeQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
