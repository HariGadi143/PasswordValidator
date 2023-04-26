// Write your code here

import {useState} from 'react'
import {
  BackgroundContainer,
  PasswordCard,
  Heading,
  Paragraph,
  PasswordInput,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const getPasswordLength = event => {
    setPassword(event.target.value)
  }

  const errorMssg =
    password.length < 8 ? 'Your password must be at least 8 characters' : ''
  return (
    <BackgroundContainer>
      <PasswordCard>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <PasswordInput type="password" onChange={getPasswordLength} />
        <ErrorMessage>{errorMssg}</ErrorMessage>
      </PasswordCard>
    </BackgroundContainer>
  )
}

export default PasswordValidator
