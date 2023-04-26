// Style your elements here

import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PasswordCard = styled.div`
  background-color: #383a4e;
  height: 50vh;
  width : 80vw
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  text-align: center; 
`
export const Heading = styled.h1`
  color: white;
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: bold;
`
export const Paragraph = styled.p`
  color: white;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
`
export const PasswordInput = styled.input`
  type: password;
  background-color: #edeeff;
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: bold;
  height: 50px;
  width: 300px;
  border-width: 0px;
  color: black;
`

export const ErrorMessage = styled.p`
  color: red;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
`
