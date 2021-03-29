import styled from 'styled-components';

const Field = styled.form`
  margin: 8px 0;
  display: grid;
  grid-template-columns: ${props => {
    const width = props.width || new Array(props.cols).fill('1fr');
    return width.join(' ');
  }};
  grid-column-gap: 8px;
  align-items: center;
  @media screen and (max-width: 900px) {
    grid-template-columns: auto;
    grid-row-gap: 8px;
  }
`;

export default Field;
