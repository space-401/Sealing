import styled, { css } from 'styled-components';
import { flexCenter } from '@/styles/common';

const Wrapper = styled.div<{ width?: string }>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.COLOR.white};
`;

const GridWrapper = styled.div`
  width: 50%;
  margin-left: 4rem;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-18']};

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 60px 60px 60px 60px 60px 212px 60px 60px;
  grid-gap: ${({ theme }) => theme.SPACING['gap-24']};
  grid-template-areas: 'spacename spacename' 'title1 input1' 'title2 input2' 'title3 input3' 'title4 input4' 'title5 input5' 'title6 input6' 'button1 button2';
`;

const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 60px;
  justify-content: space-evenly;
`;

const PhotoBox = styled.img`
  width: 348px;
  height: 348px;
  border-radius: 20px;
`;

const PhotoText = styled.button`
  background-color: ${({ theme }) => theme.COLOR['gray-2']};
  color: ${({ theme }) => theme.COLOR.black};

  border-radius: 4px;
  width: 53px;
  height: 22px;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-12']};
  ${flexCenter}
`;

const Label = styled.label<{ number: number; required: boolean }>`
  padding: 5px;
  grid-area: ${({ number }) => `title${number}`};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-18']};
  display: flex;
  ${({ required }) =>
    required &&
    css`
      &::after {
        content: '(필수)';
        color: ${({ theme }) => theme.COLOR.orange};
        padding-left: 0.5rem;
        padding-top: 0.2rem;
        font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
      }
    `}
`;

const InputContainer = styled.div<{ number: number }>`
  grid-area: ${({ number }) => `input${number}`};
`;

const EmptyContainer = styled.div`
  grid-area: 'button1';
`;

const ButtonContainer = styled.div`
  grid-area: 'button2';
  margin-left: auto;
`;

const SpaceInfoContainer = styled.div`
  grid-area: spacename;
  display: flex;
  align-items: center;
  div {
    padding-left: 20px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  width: 70px;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  margin-top: 5px;
`;

const SelectedImgContainer = styled.img`
  border-radius: 10px;
`;

const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MapInputContainer = styled.div``;

const SearchIconBox = styled.div`
  position: absolute;
`;

const MapContainer = styled.div`
  cursor: pointer !important;
`;

const S = {
  Wrapper,
  GridWrapper,
  PhotoContainer,
  PhotoWrapper,
  PhotoText,
  Label,
  InputContainer,
  ButtonContainer,
  SpaceInfoContainer,
  FlexContainer,
  IconContainer,
  EmptyContainer,
  SelectedImgContainer,
  PhotoBox,
  MapInputContainer,
  SearchIconBox,
  MapContainer,
};
export default S;
