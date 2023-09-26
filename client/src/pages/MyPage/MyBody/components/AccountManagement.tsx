import { A } from '@pages/MyPage/MyBody/components/style';
import { AccountMock } from '@mocks/data/Account/AccountMock';
import React, { ReactElement } from 'react';
import { ReactComponent as KaKaoSvg } from '@assets/svg/api/kakao.svg';
import { ReactComponent as NaverSvg } from '@assets/svg/api/naver.svg';
import { ReactComponent as GoogleSvg } from '@assets/svg/api/google.svg';

export type AccountDataType = {
  loginState: '카카오톡' | '네이버' | 'Google';
  name: string;
  email: string;
};

const AccountManagement = () => {
  const { loginState, email, name } = AccountMock;

  let StateIcon: ReactElement;

  switch (loginState) {
    case '카카오톡':
      StateIcon = <KaKaoSvg />;
      break;
    case '네이버':
      StateIcon = <NaverSvg />;
      break;
    case 'Google':
      StateIcon = <GoogleSvg />;
      break;
  }
  return (
    <>
      <A.Title>회원정보</A.Title>
      <A.Description margin_top={16}>
        {loginState + '간편가입 회원입니다.'}
      </A.Description>
      <A.Bar margin_top={16} />
      <A.Description margin_top={40}>이름</A.Description>
      <A.NameBox margin_top={16}>
        <A.WhiteSpan>{name}</A.WhiteSpan>
      </A.NameBox>
      <A.Description margin_top={32}>이메일</A.Description>
      <A.IConBox margin_top={16}>
        {StateIcon}
        <A.WhiteSpan>{email}</A.WhiteSpan>
      </A.IConBox>
      <A.Bar margin_top={40} />
      <A.ButtonGroup>
        <A.Button>탈퇴하기</A.Button>
        <A.Button>로그아웃</A.Button>
      </A.ButtonGroup>
    </>
  );
};

export default AccountManagement;