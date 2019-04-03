import React from 'react'
import styled from 'styled-components'
import color from '../../../themes/color'
// UI Components
import { TextArea, Input } from '../../../themes/styled_comp/InputGroup'
import {
  List,
  Card,
  Cardtitle,
  UpdateBy,
} from '../DashboardLayout/AddSpreadsheet'
import { SubmitBtn } from '../../../themes/styled_comp/Form'
import Spinner from '../../../components/Layout/Spinner/Spinner'

const Title = styled.h1`
  font-size: 18px;
  font-weight: 600;
  margin: 10px 0;
  color: ${color.text.dark};
`

const Subtitle = styled.p`
  font-size: 13px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 20px;
  color: ${color.text.grayLight};
`

const Form = styled.form`
  display: flex;
  max-width: 50vw;
`

const SubmitBtn2 = styled(SubmitBtn)`
  border-radius: 2px;
  margin-top: 0.6rem;
  border: none;
  outline: none;
`

const StyledTextArea = styled(TextArea)`
  border-color: rgba(50, 50, 50, 0.15);
  resize: none;
  height: 8rem;
`

const Path = styled.div`
  margin-bottom: 20px;
`

const ContentCard = styled(Card)`
  text-align: left;
`

const CardDetails = styled(UpdateBy)`
  margin: 0 0 6px 0;
  text-transform: capitalize;
`

const LanguageCode = styled.span`
  color: dodgerblue;
`

const FormStyled = styled(Form)`
  flex-direction: column;
`

const InputStyled = styled(Input)`
  border-color: rgba(50, 50, 50, 0.15);
  margin-bottom: 0.6rem;
`

const ListStyled = styled(List)`
  width: 62%;
  box-sizing: border-box;
  padding: 6px 0;
`

const NoneResult = styled.div`
  font-size: 14px;
  color: ${color.text.grayLight};
`

const CardtitleStyled = styled(Cardtitle)`
  text-transform: none;
`

const CardcontentStyled = styled.textarea`
  &:focus {
    border-color: dodgerblue;
  }
  font-weight: 400;
  font-size: 14px;
  resize: none;
  border-radius: 2px;
  color: ${color.text.gray}
  margin-top: 12px;
  text-transform: none;
  font-size: 13px;
  box-sizing: border-box;
  padding: 6px 12px;
  min-height: 4rem;
  border: 1px dashed rgba(50, 50, 50, .15);
  outline: none;
`

export default ({ onChange, onSubmit, searching, searchResults, search }) => {
  // Check searching status and render list of results
  let resultsList = <Spinner />
  if (!searching) {
    let result = <NoneResult>No documents found...</NoneResult>
    resultsList = <ListStyled>{result}</ListStyled>
    if (searchResults && searchResults.length !== 0) {
      result = searchResults.map(({ site, sheet, code, content, english }) => (
        <ContentCard>
          <CardDetails>{`${site} - ${sheet} - ${code}`}</CardDetails>
          <CardtitleStyled>{english}</CardtitleStyled>
          <CardcontentStyled>{content}</CardcontentStyled>
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
          Search Results for <LanguageCode>{search.code || '...'}</LanguageCode>
        </Title>
        {resultsList}
      </Path>
    </>
  )
}
