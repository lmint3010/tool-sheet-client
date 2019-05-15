import React, { useState } from 'react'
import { Wrapper, Inputer, PageTitle, Options, Button } from './styled'

export default () => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = () => {
    console.log(inputValue)
  }

  const handleFormChange = ({ target }) => setInputValue(target.value)

  return (
    <Wrapper>
      <PageTitle>Smart translator</PageTitle>
      <Options>
        <Button onClick={handleSubmit}>Translate</Button>
      </Options>
      <Inputer placeholder="Enter something..." onChange={handleFormChange} />
    </Wrapper>
  )
}
