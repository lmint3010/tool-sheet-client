import React, { useState } from 'react'
import { LanguageCode, ContentSearch, SearchForm, SubmitButton } from '../style'

export default React.memo(({ onSubmit }) => {
  const [language, setLanguage] = useState('DE')
  const [content, setContent] = useState('')

  const handleFormChange = setter => ({ target }) => {
    setter(target.value)
  }

  return (
    <SearchForm onSubmit={onSubmit(language, content)}>
      <LanguageCode
        placeholder="Enter language code"
        onChange={handleFormChange(setLanguage)}
        defaultValue={language}
        name="language_code"
      />
      <ContentSearch
        placeholder="Content search"
        name="search_content"
        value={content}
        onChange={handleFormChange(setContent)}
      />
      <SubmitButton showing={true} type="submit">
        Submit
      </SubmitButton>
    </SearchForm>
  )
})
