import {useState} from 'react'
import {Container, Heading, CustomButton} from './styledComponents'

const Unlock = () => {
  const [status, setStatus] = useState(false)
  const onClickButton = () => {
    setStatus(status => !status)
  }
  const imageSrc = status
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const imageAlt = status ? 'unlock' : 'lock'
  const headingText = status
    ? 'Your Device is Unlocked'
    : 'Your Device is Locked'
  const buttonText = status ? 'Lock' : 'Unlock'
  return (
    <Container>
      <img src={imageSrc} alt={imageAlt} />
      <Heading>{headingText}</Heading>
      <CustomButton onClick={onClickButton}>{buttonText}</CustomButton>
    </Container>
  )
}

export default Unlock
