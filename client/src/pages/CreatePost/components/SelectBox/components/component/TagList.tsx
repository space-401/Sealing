import type { TagListProps } from '@type/main.type';
import S from '@pages/CreatePost/components/SelectBox/components/style';
import { ReactComponent } from '@assets/svg/trash.svg';

const TagList = (props: TagListProps) => {
  const { Item } = props;
  return (
    <S.TagGroup>
      <S.TagTitle>{Item.tag_title}</S.TagTitle>
      <S.DeleteButton>
        <ReactComponent />
      </S.DeleteButton>
    </S.TagGroup>
  );
};

export default TagList;
