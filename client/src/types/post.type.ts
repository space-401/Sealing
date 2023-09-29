import { selectType } from './main.type';
import { SpacePostType } from '@type/space.type';

export type UserType = {
  userId: number;
  userName: string;
  imgUrl?: string;
};

export type TagType = {
  tagId: number;
  tagTitle: string;
};

export type PostType = {
  title: string;
  content: string;
  people: selectType[];
  tag: selectType[];
  place: {
    content: string;
    position: {
      lng: string;
      lat: string;
    };
  };
  imgs: File[];
  date: {
    startDate: Date | null;
    endDate: Date | null;
  };
};

export type FlipCardSize = 'small' | 'big';

export type SpaceInfoBackPropsType = {
  item: SpacePostType;
  size: FlipCardSize;
};

export type FlipType = {
  /**
   * 해당 이미지의 주소를 넣어주세요
   */
  imgUrl: string;
  onClick: () => void;
};