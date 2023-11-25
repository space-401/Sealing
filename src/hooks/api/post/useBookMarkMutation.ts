import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { ApiResponseType, PostDetailType } from '@/types';
import { postBookMark } from '@/apis';
import type { AxiosError } from 'axios';
import { toastColorMessage } from '@/utils';

interface IPostInfo {
  postId: number;
}

export const UseBookMarkMutation = () => {
  const queryClient = useQueryClient();
  const { mutate: postBookMarkAction } = useMutation<
    ApiResponseType,
    AxiosError,
    IPostInfo
  >((postInfo) => postBookMark(postInfo.postId), {
    onMutate: async (postInfo) => {
      const prevInfo: PostDetailType = queryClient.getQueryData([
        'detail',
        postInfo.postId,
      ])!;
      await queryClient.cancelQueries(['detail', postInfo.postId]);
      queryClient.setQueriesData(['detail', postInfo.postId], {
        ...prevInfo,
        isBookMark: !prevInfo.isBookMark,
      });
    },
    onError: async (error, variables) => {
      toastColorMessage(error.message);
      await queryClient.invalidateQueries(['detail', variables.postId]);
    },
  });

  return { postBookMarkAction };
};
