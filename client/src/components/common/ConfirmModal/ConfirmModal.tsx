import React from 'react';
import { Box } from '@mui/material';
import S from '@components/common/ConfirmModal/style';

export type ConfirmModalType = {
  isPositiveModal: boolean;
  titleMessage: string;
  descriptionMessage?: string;
  ApproveMessage: string;
  closeMessage: string;
  AsyncAction: () => void;
  ModalClose: () => void;
  isOpen: boolean;
};

const ConfirmModal = React.forwardRef(
  (prop: ConfirmModalType, forwardRef: React.ForwardedRef<any>) => {
    const {
      AsyncAction,
      descriptionMessage,
      titleMessage,
      isPositiveModal,
      ApproveMessage,
      closeMessage,
      ModalClose,
    } = prop;

    const ApproveAction = () => {
      AsyncAction();
      ModalClose();
    };

    return (
      <Box tabIndex={-1} ref={forwardRef}>
        <S.Container>
          <S.TitleMessage>{titleMessage}</S.TitleMessage>
          {descriptionMessage && (
            <S.DescriptionMessage>{descriptionMessage}</S.DescriptionMessage>
          )}
          <S.ButtonGroup>
            <S.ApproveButton
              isPositiveModal={isPositiveModal}
              onClick={ApproveAction}
            >
              {ApproveMessage}
            </S.ApproveButton>
            <S.CloseButton onClick={ModalClose}>{closeMessage}</S.CloseButton>
          </S.ButtonGroup>
        </S.Container>
      </Box>
    );
  }
);

export default ConfirmModal;
