import type { ApiResponseType } from '@type/response.type';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { deleteSpaceTag, DeleteSpaceTagType } from '@apis/space/deleteSpaceTag';
import { useQueryClient } from '@tanstack/react-query';

export const useTagDeleteMutation = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteTagAction } = useMutation<
    ApiResponseType,
    AxiosError,
    DeleteSpaceTagType
  >((deleteInfo) => deleteSpaceTag(deleteInfo), {
    onMutate: async (deleteInfo) => {
      const { spaceId, tagId } = deleteInfo;

      await queryClient.cancelQueries(['spaceTag', spaceId]);

      // const previousTags = queryClient.getQueryData(['spaceTag', spaceId]);
      queryClient.setQueryData(['spaceTag', spaceId], (prev: any) => {
        return prev.filter((tag: any) => tag.tagId !== tagId);
      });

      // return { previousTags };
    },
  });
  return { deleteTagAction };
};
