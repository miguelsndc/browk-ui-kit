import { Button } from '..';
import { Wrapper, IconWrapper, ButtonContainer, InfoContainer } from './styles';

import { ReactComponent as SuccessIcon } from '../../assets/checked.svg';
import { ReactComponent as WarningIcon } from '../../assets/info.svg';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';

export type NotificationTypes = 'success' | 'error' | 'info';

type NotificationProps = {
  type: NotificationTypes;
  head?: string;
  onHelp?: () => void;
  onDismiss?: () => void;
  description?: string;
  shouldHaveHelpButton?: boolean;
  shouldHaveDismissButton?: boolean;
};

export default function Notification({
  head,
  type,
  onHelp,
  onDismiss,
  description,
  shouldHaveHelpButton,
  shouldHaveDismissButton,
}: NotificationProps) {
  const hasButtons = !!shouldHaveDismissButton || !!shouldHaveHelpButton;

  return (
    <Wrapper>
      <InfoContainer shouldCenterContent={Boolean(!head && description)}>
        <div>
          {head && <h2>{head}</h2>}
          {description && <p>{description}</p>}
        </div>
        <IconWrapper type={type}>
          {type === 'error' && <CloseIcon />}
          {type === 'success' && <SuccessIcon />}
          {type === 'info' && <WarningIcon />}
        </IconWrapper>
      </InfoContainer>
      {hasButtons && (
        <ButtonContainer>
          {shouldHaveDismissButton && (
            <Button variant='secondary' onClick={onDismiss}>
              Close
            </Button>
          )}
          {shouldHaveHelpButton && (
            <Button variant='flat' onClick={onHelp}>
              Help
            </Button>
          )}
        </ButtonContainer>
      )}
    </Wrapper>
  );
}
