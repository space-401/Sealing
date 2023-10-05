import styled from 'styled-components';
import { flexCenter } from '@/styles/common';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLOR['gray-7']};
  min-height: 100vh;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: fit-content;
`;

const IconBox = styled.div<{ padding?: number }>`
  background-color: ${({ theme }) => theme.COLOR['gray-6']};
  height: inherit;
  width: 160px;
  border-radius: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  svg {
    cursor: pointer;
    padding-left: ${(props) => (props.padding ? props.padding : 0)}px;
  }
`;

const SpaceBox = styled.div`
  width: 100%;
  max-width: calc(100% - 360px);
  height: inherit;
  background-color: ${({ theme }) => theme.COLOR['gray-6']};
  ${flexCenter};
  border-radius: 15px;
`;

const Container = styled.div`
  margin: 10px 32px 8px 32px;
  width: 100%;
  height: 64px;
  max-width: 1856px;
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 30px;
`;
const SpaceIconBox = styled.div`
  display: flex;
  gap: 16px;
`;

const SpaceIcon = styled.div<{ img_url: string; isCurrentSpace: boolean }>`
  width: 40px;
  border-radius: 10px;
  aspect-ratio: 1/1;
  background-image: url(${({ img_url }) => img_url});
  cursor: pointer;
  background-size: cover;
  box-shadow: ${({ isCurrentSpace }) =>
    isCurrentSpace && ' 0px 0px 10px 2px #c2c2c2'};
`;

const ContentLayOut = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
`;

const S = {
  SpaceIcon,
  SpaceIconBox,
  HeaderWrapper,
  Wrapper,
  IconBox,
  SpaceBox,
  ContentWrapper,
  Container,
  ContentLayOut,
};

export default S;
