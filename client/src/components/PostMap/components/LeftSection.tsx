import { S } from '@components/PostMap/components/style';
import OnePostMapCard from '@components/PostMap/components/One-PostMapCard';
import { SpacePostType } from '@type/space.type';
import { Dispatch, SetStateAction } from 'react';

type LeftSectionPropType = {
  postList: SpacePostType[];
  isSelect: number;
  setIsSelect: Dispatch<SetStateAction<number>>;
};

const LeftSection = (props: LeftSectionPropType) => {
  const { setIsSelect, isSelect, postList } = props;
  return (
    <S.Wrapper>
      {postList.map((item) => (
        <OnePostMapCard
          key={item.post_id}
          post_title={item.post_title}
          post_description={item.users.map((item) => item.user_name).join(', ')}
          post_place={item.place_title}
          post_tags={item.place_tag}
          main_img_url={item.main_img_url}
          create_at={item.place_create_at}
          position={item.position}
          onClick={() => {
            setIsSelect(item.post_id);
          }}
          isSelect={isSelect === item.post_id}
        />
      ))}
    </S.Wrapper>
  );
};

export default LeftSection;