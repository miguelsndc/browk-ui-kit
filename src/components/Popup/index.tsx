import { Wrapper, IconWrapper, Overlay } from './styles';
import { Button } from '../../components';

import { ReactComponent as SuccessIcon } from '../../assets/checked.svg';
import { ReactComponent as WarningIcon } from '../../assets/Union.svg';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';

export type PopupTypes = 'confirm' | 'confirm-cancel' | 'no-button';
export type PopupIcons = 'warning' | 'success' | 'error';

type PopupProps = {
  type: PopupTypes;
  icon: PopupIcons;
  head: string;
  description: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  onClose: () => void;
};

export default function Popup({
  description,
  head,
  icon,
  type,
  onCancel,
  onConfirm,
  onClose,
}: PopupProps) {
  function PopupButtons() {
    return (
      <div>
        {type === 'confirm-cancel' && (
          <>
            <Button variant='primary' onClick={onConfirm}>
              Proceed
            </Button>
            <Button variant='secondary' onClick={onCancel}>
              Cancel
            </Button>
          </>
        )}
        {type === 'confirm' && (
          <Button variant='primary' onClick={onConfirm}>
            Understood
          </Button>
        )}
      </div>
    );
  }

  return (
    <>
      <Overlay onClick={onClose}></Overlay>
      <Wrapper>
        <Button circle icon variant='primary' onClick={onClose}>
          <CloseIcon />
        </Button>
        <IconWrapper type={icon}>
          {icon === 'error' && <CloseIcon />}
          {icon === 'success' && <SuccessIcon />}
          {icon === 'warning' && <WarningIcon />}
        </IconWrapper>
        <h2>{head}</h2>
        <p>{description}</p>
        <div>
          <PopupButtons />
        </div>
      </Wrapper>
    </>
  );
}
