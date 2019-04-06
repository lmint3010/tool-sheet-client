import React from 'react'
import Spinner from '../Spinner/Spinner'
import {
  NoneResult,
  ListStyled,
  ContentCard,
  CardDetails,
  CardtitleStyled,
  CardcontentStyled,
  Path,
  Title,
  Subtitle,
  FormStyled,
  InputStyled,
  StyledTextArea,
  SubmitBtn2,
  LanguageCode,
} from './styled'

const searchUIComponent = ({
  onChange,
  onSubmit,
  searching,
  searchResults,
  searchOnCode,
}) => {
  // Check searching status and render list of results
  let resultsList = <Spinner />
  if (!searching) {
    let result = <NoneResult>No documents found...</NoneResult>
    resultsList = <ListStyled>{result}</ListStyled>
    if (searchResults && searchResults.length !== 0) {
      result = searchResults.map(({ translated, text, position }, index) => (
        <ContentCard key={index}>
          <CardDetails>{`${position} - ${searchOnCode}`}</CardDetails>
          <CardtitleStyled>{text}</CardtitleStyled>
          <CardcontentStyled defaultValue={translated} />
        </ContentCard>
      ))
      resultsList = <ListStyled>{result}</ListStyled>
    }
  }
  return (
    <>
      <Path>
        <Title>Search Translated Documents</Title>
        <Subtitle>
          Help you search translated content. If you can't find content? Please
          fetch spreadsheet again.
        </Subtitle>
        <FormStyled onSubmit={onSubmit}>
          <InputStyled
            required
            onChange={onChange}
            name="code"
            placeholder="Enter the language code you want to search"
          />
          <StyledTextArea
            required
            autocomplete={false}
            width="80%"
            name="content"
            placeholder="Search content"
            onChange={onChange}
          />
          <SubmitBtn2 type="submit" value="Search" />
        </FormStyled>
      </Path>

      <Path>
        <Title>
          Search Results for{' '}
          <LanguageCode>{searchOnCode || '...'}</LanguageCode>
        </Title>
        {resultsList}
      </Path>
    </>
  )
}

export default React.memo(searchUIComponent)
