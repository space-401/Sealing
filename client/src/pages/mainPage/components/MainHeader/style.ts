import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-1']};
  width: 100%;
  height: 920px;
  border-radius: 30px 30px 0 0;
  background: ${({ theme }) => theme.COLOR['gray-7']};
  padding: 26px 40px 0 40px;
`;

const HeaderHeader = styled.section`
  line-height: 43px;
  display: flex;
  justify-content: flex-end;
`;

const UserCount = styled.span`
  margin: 0 26px 0 18.6px;
`;
const HeaderMain = styled.section`
  margin-top: 15.57px;
  display: flex;
  gap: 48px;
  overflow: hidden;
`;

const HeaderFooter = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 136px;
  align-items: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 9px;
`;
const Image = styled.div<{ img_url: string }>`
  background-image: url(${({ img_url }) => img_url});
  background-position: center;
  background-size: cover;
  width: 160px;
  height: 160px;
  border-radius: 25px;
`;
const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainTitle = styled.div`
  color: ${({ theme }) => theme.COLOR.white};
  font-size: 88px;
  line-height: 60px;
  font-weight: 600;
`;
const Description = styled.div`
  margin-top: 32px;
  width: 395px;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
  overflow: auto;
`;

const FilterState = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 37px;
  svg {
    margin: 3px 2px;
  }
`;

const FilterGroup = styled.div``;

const SelectButton = styled.div<{ $state: boolean }>`
  display: flex;
  color: ${({ $state, theme }) =>
    $state ? theme.COLOR.white : theme.COLOR['gray-8']};

  padding-bottom: ${({ $state }) => (!$state ? '11px' : '8px')};
  border-bottom: 3px solid
    ${({ $state, theme }) => ($state ? theme.COLOR.white : 'none')};
  cursor: pointer;
`;

const S = {
  Wrapper,
  HeaderHeader,
  HeaderMain,
  HeaderFooter,
  ButtonGroup,
  UserCount,
  Image,
  MainInfo,
  MainTitle,
  Description,
  FilterGroup,
  FilterState,
  SelectButton,
};

export default S;