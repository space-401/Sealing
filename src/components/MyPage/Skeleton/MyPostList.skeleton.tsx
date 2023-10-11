import { A, B } from '@components/MyPage/style';
import OneTableListSkeleton from '@components/MyPage/Skeleton/OneTableList.skeleton';

const MyPostListSkeleton = () => {
  return (
    <>
      <B.BTable>
        <thead>
          <tr>
            <td>제목</td>
            <td>작성자</td>
            <td>함께한 친구</td>
          </tr>
        </thead>
        <tbody>
          <OneTableListSkeleton iconBox={true} />
          <OneTableListSkeleton iconBox={true} />
          <OneTableListSkeleton iconBox={true} />
          <OneTableListSkeleton iconBox={true} />
          <OneTableListSkeleton iconBox={true} />
          <OneTableListSkeleton iconBox={true} />
          <OneTableListSkeleton iconBox={true} />
        </tbody>
      </B.BTable>
      <A.PaginationBox></A.PaginationBox>
    </>
  );
};

export default MyPostListSkeleton;