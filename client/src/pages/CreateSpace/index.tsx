import FullScreenModal from '@/layout/FullScreenModal/FullScreenModal';
import S from '@pages/CreateSpace/style';
import InputBox from '@/components/common/InputBox';
import BasicButton from '@/components/common/BasicButton';
import TextAreaBox from '@/components/common/TextAreaBox';
import { ReactComponent as PhotoIcon } from '@assets/svg/photoIcon.svg';
import BasicBox from '@/components/common/BasicBox';
import { ReactComponent as QuestionIcon } from '@assets/svg/QuestionIcon.svg';
import { useState, useRef } from 'react';
import { usePhotoModalStore, useSelectIconModalStore } from '@/store/modal';
import ImgEditModal from '@/components/Create/ImageEditModal/ImageEditModal';
import { ImageType } from '@/types/image.type';
import CharacterCounter from '@/components/Create/CharacterCounter';
import { theme } from '@/styles/theme/theme';
import useInputs from '@/hooks/common/useInputs';
import SelectIconModal from '@/components/Create/SelectIconModal';
import { ImageArrType } from '@/types/image.type';
// import useValidate from '@/hooks/common/useValidate';

const CreateSpace = () => {
  //이미지 저장하는 곳
  const [imageArr, setImageArr] = useState<ImageArrType>({
    images: [],
    cropImages: [],
    convertedImages: [],
  });
  //현재 편집 모달이 열려있는지
  const { ModalOpen: PhotoModalOpen, isOpen: isPhotoModalOpen } =
    usePhotoModalStore();
  const {
    ModalOpen: IconModalOpen,
    ModalClose: IconModalClose,
    isOpen: isIconModalOpen,
  } = useSelectIconModalStore();

  const inputRef = useRef<HTMLInputElement>(null);

  //인풋 관리
  const { values, onChange } = useInputs({
    title: '',
    content: '',
    password: '',
  });
  const { title, content, password } = values;

  //유효성 검사
  // const error = useValidate(password);
  //파일 변경 함수
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    if (!files) return;
    //여러개의 파일을 하나씩 순회하여 읽어오기
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === 'string') {
        const newObj: ImageType = {
          id: 1,
          img: result,
        };
        setImageArr((prev: ImageArrType) => ({ ...prev, images: [newObj] }));
      }
    };
    reader.readAsDataURL(files[0]);
  };

  //자식 inputRef 요소를 클릭하는 함수
  const onClickImgEditModal = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
    PhotoModalOpen();
    IconModalClose();
  };

  //스페이스 생성하기
  const onSubmit = () => {
    // console.log('에러', error);
  };
  return (
    <FullScreenModal
      isTitle={true}
      title="스페이스 설정하기"
      detail="우리만을 위한 스페이스를 새로 만들어요."
    >
      {/*사진 편집 모달*/}
      {isPhotoModalOpen && (
        <ImgEditModal imageArr={imageArr} setImageArr={setImageArr} />
      )}
      {/*아이콘 선택 모달*/}
      {isIconModalOpen && (
        <SelectIconModal
          modalClose={IconModalClose}
          isOpen={isIconModalOpen}
          onClickImgEditModal={onClickImgEditModal}
        />
      )}
      <S.Wrapper>
        {/*아이콘 지정 인풋*/}
        <S.TitleContainer number={1} required={true}>
          <div>스페이스 아이콘</div>
        </S.TitleContainer>
        {imageArr.images.length == 0 ? (
          <S.InputContainer number={1} onClick={IconModalOpen}>
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={(e) => {
                handleFileChange(e);
              }}
              ref={inputRef}
            />
            <BasicBox width={160} borderradius={10}>
              <PhotoIcon />
            </BasicBox>
            <S.EditButton>편집하기</S.EditButton>
          </S.InputContainer>
        ) : (
          <S.InputContainer number={1} onClick={onClickImgEditModal}>
            <BasicBox
              backgroundImage={imageArr.cropImages[0]}
              width={160}
              borderradius={10}
              color="grey"
              onClick={PhotoModalOpen}
            />
            <S.EditButton>편집하기</S.EditButton>
          </S.InputContainer>
        )}

        {/*이름 지정 인풋*/}
        <S.TitleContainer number={2} required={true}>
          <div>스페이스 명 </div>
        </S.TitleContainer>
        <S.InputContainer number={2}>
          <InputBox
            readonly={false}
            height={60}
            width={628}
            placeholder="16자 이내의 제목을 입력해 주세요."
            type="text"
            maxLength={16}
            children={
              <CharacterCounter
                color={theme.COLOR['gray-3']}
                currentNum={title.length}
                maxNum={16}
              />
            }
            paddingLeft={65}
            onChange={onChange}
            name="title"
          />
        </S.InputContainer>

        {/*설명 지정 인풋*/}
        <S.TitleContainer number={3} required={false}>
          <div>스페이스 설명</div>
        </S.TitleContainer>
        <S.InputContainer number={3}>
          <TextAreaBox
            height={160}
            placeholder="스페이스 설명 입력"
            maxLength={100}
            onChange={onChange}
            name="content"
            children={
              <CharacterCounter
                color={theme.COLOR['gray-3']}
                currentNum={content.length}
                maxNum={100}
              />
            }
          />
        </S.InputContainer>

        {/*비밀번호 지정 인풋*/}
        <S.FlexContainer>
          <S.TitleContainer number={4} required={true}>
            <div>스페이스 비밀번호</div>
          </S.TitleContainer>
          <QuestionIcon />
        </S.FlexContainer>
        <S.InputContainer number={4}>
          <InputBox
            readonly={false}
            height={60}
            type={'password'}
            placeholder="숫자 5자리를 입력해주세요"
            maxLength={5}
            onChange={onChange}
            name="password"
          />
        </S.InputContainer>
        {/*스페이스 생성 버튼*/}
        <S.ButtonContainer>
          <BasicButton
            children="스페이스 생성하기"
            onClick={onSubmit}
            width={160}
            height={47}
            disabled={
              !imageArr.convertedImages.length ||
              !title.length ||
              password.length < 5
            }
          />
        </S.ButtonContainer>
      </S.Wrapper>
    </FullScreenModal>
  );
};
export default CreateSpace;
