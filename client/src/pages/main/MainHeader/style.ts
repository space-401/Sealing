import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-1']};
  width: 100%;
  height: 474px;
  border-radius: 40px;

  padding: 26px 40px 0 40px;
`;

const HeaderHeader = styled.section`
  line-height: 43px;
  display: flex;
  justify-content: flex-end;
`;

const UserCount = styled.span`
  margin: 0 26px 0 18.6px;
  color: ${({ theme }) => theme.COLOR.white};
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
  margin-top: 151px;
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
const MainInfo = styled.div``;
const MainTitle = styled.div`
  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY['IBM Plex Sans KR']};
  line-height: 0.8;
  font-size: 88px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-600']};
`;
const Description = styled.div`
  margin-top: 24px;
  font-family: ${({ theme }) => theme.FONT_FAMILY['IBM Plex Sans KR']};
  width: 37.625rem;
  line-height: 1.6rem;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
  overflow: auto;
  color: ${({ theme }) => theme.COLOR.white};
`;

const FilterState = styled.div`
  position: absolute;
  top: 380px;
  left: 50%;
  transform: translate(-50%, 50%);
  display: flex;
  gap: 24px;
  margin-top: 37px;

  svg {
    margin: 3px 2px;
  }
`;

const FilterGroup = styled.div``;

/**
 * @TODO
 * 해당 theme.COLOR['gray-6']은 임시로 넣어둔 색입니다 올바른 색상으로 변경해야합니다.
 */
const SelectButton = styled.div<{ $state: boolean }>`
  display: flex;
  color: ${({ $state, theme }) =>
    $state ? theme.COLOR.white : theme.COLOR['gray-6']};

  padding-bottom: ${({ $state }) => (!$state ? '11px' : '8px')};
  border-bottom: 3px solid
    ${({ $state, theme }) => ($state ? theme.COLOR.white : 'none')};
  cursor: pointer;
`;

const LeftEmpty = styled.div``;

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
  LeftEmpty,
};

export default S;