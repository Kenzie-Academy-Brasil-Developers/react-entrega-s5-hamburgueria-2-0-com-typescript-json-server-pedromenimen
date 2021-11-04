import styled from "styled-components";

export const Box = styled.div`
  border-color: ${(props) => props.color};
  border: solid ${(props) => props.color} 2px;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  width: 240px;
  button {
    background-color: ${(props) => props.color};
  }
  button:hover {
    background-color: ${(props) => props.color};
  }
  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .price {
    color: #27AE60;
    font-weight: bold
  }
`;
