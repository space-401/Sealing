import S from '@components/Create/CreateSelectBox/components/style';
import { ReactComponent } from '@assets/svg/trash.svg';
import { TagType } from '@/types/post.type';

type TagListProps = {
  onDeleteTag: () => void;
  item: TagType;
};
const TagList = ({ onDeleteTag, item }: TagListProps) => {
  return (
    <S.TagGroup>
      <S.TagTitle>{item.tagTitle}</S.TagTitle>
      <S.DeleteButton>
        <ReactComponent onClick={onDeleteTag} />
      </S.DeleteButton>
    </S.TagGroup>
  );
};

export default TagList;
