import S from '@pages/MyPage/style';
import KSkeleton from '@components/common/Skeleton';
import AccountManagementSkeleton from '@pages/MyPage/Skeleton/AccountManagement.skeleton';

const MyPageSkeleton = () => {
  return (
    <S.MyPageWrapper>
      <S.Wrapper>
        <S.NavGroup>
          <S.NavButton select={false}>
            <KSkeleton variant={'rounded'} width={16} height={16} />
            <S.NavSpan>
              <KSkeleton variant={'rounded'} width={48} height={16} />
            </S.NavSpan>
          </S.NavButton>
          <S.NavButton select={false}>
            <KSkeleton variant={'rounded'} width={16} height={16} />
            <S.NavSpan>
              <KSkeleton variant={'rounded'} width={34} height={16} />
            </S.NavSpan>
          </S.NavButton>
          <S.NavButton select={false}>
            <KSkeleton variant={'rounded'} width={16} height={16} />
            <S.NavSpan>
              <KSkeleton variant={'rounded'} width={48} height={16} />
            </S.NavSpan>
          </S.NavButton>
        </S.NavGroup>
      </S.Wrapper>
      <S.Container>
        <AccountManagementSkeleton />
      </S.Container>
    </S.MyPageWrapper>
  );
};

export default MyPageSkeleton;
