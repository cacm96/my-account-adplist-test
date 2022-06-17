import styled from "styled-components";

export const InfoContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
`;

export const Label = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #35403b;
  margin: 0;
`;

export const Value = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #35403b;
  text-align: center;
  margin: 3px 0 0 0;
`;

export const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 10px auto;
`;
