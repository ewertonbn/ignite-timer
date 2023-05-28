import { ButtonContainer, ButtonVariant } from './Button.style'

interface buttonProps {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary' }: buttonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
