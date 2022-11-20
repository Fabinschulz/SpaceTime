export type ModalProps = {
    disabled?: boolean;
    buttonText?: string;
    open: boolean;
    onClick?: () => void;
    onClose: () => void;
    title?: string;
    subtitle?: string;
    enableButton?: boolean;
    props: JSX.Element | JSX.Element[];
  };