import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 5px;
  background-color: #6ba390;
  box-shadow: 0 5px 10px 1px #aaa;
  padding: 40px 20px;

  p {
    margin-left: 7%;
  }

  h1 {
    text-align: center;
    font-family: 'Muli', sans-serif;
    padding-bottom: 8px;
    margin: 4px 7% 20px;
    border-bottom: 1px solid white;
    color: white;
    font-size: 30pt;
  }

  h2 {
    color: white;
    margin: 50px 7% 20px;
    font-size: 20pt;
  }

  li {
    padding-left: 7%;
    margin-bottom: 10px;

    p {
      display: inline;
      margin-left: 5px;
    }
  }

  li:before {
    padding-right: 20px;
    content: '•';
  }
`;
