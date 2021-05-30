import styled from "styled-components";

function SubscribeNow() {
  return <Subscribe>Subscribe</Subscribe>;
}

const Subscribe = styled.section`
  background-color: #0063e5;
  font-size: 12px;
  padding: 10px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background-color: #0483ee;
  }
`;
export default SubscribeNow;
