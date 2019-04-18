import styled from 'styled-components'
import theme from '../../../themes'
// UI Components
import { TextArea, Input } from '../../../themes/styled_comp/InputGroup'
import { List, Card, Cardtitle, UpdateBy } from '../AddSpreadsheet/styled'
import { SubmitBtn } from '../../../themes/styled_comp/Form'

export const Title = styled.h1`
  font-size: ${theme.fontSize.header};
  font-weight: 500;
  margin: 10px 0;
  color: ${theme.color.text.dark};
`

export const Subtitle = styled.p`
  font-size: 13px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 20px;
  color: ${theme.color.text.grayLight};
`

export const Form = styled.form`
  display: flex;
  width: calc(100% - 16px);
  box-sizing: border-box;
`

export const SubmitBtn2 = styled(SubmitBtn)`
  border-radius: 2px;
  margin-top: 0.6rem;
  border: none;
  outline: none;
`

export const StyledTextArea = styled(TextArea)`
  border-color: rgba(50, 50, 50, 0.15);
  resize: none;
  height: 8rem;
`

export const Path = styled.div`
  margin-bottom: 20px;
`

export const ContentCard = styled(Card)`
  text-align: left;
  padding: 0.85rem;
  width: auto;
  margin-right: 16px;
  margin-bottom: 16px;
  box-shadow: ${theme.color.boxShadow.box};
  border-radius: 4px;
  box-sizing: border-box;
  flex-grow: 1;
`

export const CardDetails = styled(UpdateBy)`
  margin: 0 0 6px 0;
  text-transform: capitalize;
  font-style: normal;
`

export const LanguageCode = styled.span`
  color: dodgerblue;
`

export const FormStyled = styled(Form)`
  flex-direction: column;
`

export const InputStyled = styled(Input)`
  border-color: rgba(50, 50, 50, 0.15);
  margin-bottom: 0.6rem;
`

export const ListStyled = styled(List)`
  box-sizing: border-box;
  padding: 6px 0;
`

export const NoneResult = styled.div`
  font-size: 14px;
  color: ${theme.color.text.grayLight};
`

export const CardtitleStyled = styled(Cardtitle)`
  text-transform: none;
  justify-content: flex-start;
`

export const CardcontentStyled = styled.textarea`
  &:focus {
    border-color: dodgerblue;
  }
  font-weight: 400;
  font-size: 14px;
  resize: none;
  border-radius: 2px;
  color: ${theme.color.text.gray}
  margin-top: 12px;
  text-transform: none;
  font-size: 13px;
  box-sizing: border-box;
  padding: 6px 12px;
  min-height: 6rem;
  border: 1px dashed transparent;
  outline: none;
  transition: 140ms linear;
  padding-left: 2px;
`