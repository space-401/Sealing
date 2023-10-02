import styled from 'styled-components';
import { flexCenter } from '@/styles/common';

const Wrapper = styled.div`
  width: 100%;
  ${flexCenter};
  flex-direction: column;
`;

const Img = styled.div`
  width: 623px;
  height: 181px;
  background-color: white;
  margin: 0 auto;
`;

const SpaceContainer = styled.div`
  ${flexCenter}
  border-radius: 20px;
  gap: 8px;
  padding-top: 100px;
  flex-wrap: wrap;
  position: relative;
`;

const Container = styled.div`
  border-radius: 40px;
  width: 100%;
  background: ${({ theme }) => theme.COLOR['gray-6']};
  padding-top: 100px;
  margin-bottom: 30px;
  min-height: calc(100vh - 120px);
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 160px;
  top: 30px;
`;

const AddBox = styled.div`
  ${flexCenter}
  width: 20rem;
  height: 20rem;
  border-radius: 20px;
  border: 1px solid #4e4f55;
  background: var(--grey-4, #5f5f5f);
`;
const S = { Wrapper, Container, Img, SpaceContainer, AddBox, ButtonContainer };

export default S;