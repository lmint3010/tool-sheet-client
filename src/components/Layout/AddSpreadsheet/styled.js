import styled from 'styled-components'
import theme from '../../../themes'
// UI Components
import { Input } from '../../../themes/styled_comp/InputGroup'
import { SubmitBtn } from '../../../themes/styled_comp/Form'

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin: 10px 0;
  color: ${theme.color.text.dark};
`

export const Subtitle = styled.p`
  font-size: 13px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 20px;
  color: ${theme.color.text.grayLight};
`

export const Form = styled.form`
  display: flex;
  max-width: 50vw;
`

export const SubmitBtn2 = styled(SubmitBtn)`
  border-radius: 2px;
  border: none;
`

export const Input2 = styled(Input)`
  border-color: rgba(135, 150, 165, 0.15);
  min-width: ${props => (props.width ? props.width : '30%')};
  margin-right: 8px;
`

export const Path = styled.div`
  margin-bottom: 40px;
`

export const List = styled.div`
  display: flex;
  padding: 6px 0;
  width: 100%;
  flex-wrap: wrap;
`

export const Card = styled.div`
  text-align: center;
  background-color: white;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 12px 10px;
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const Cardtitle = styled.a`
  margin-bottom: 0.4rem;
  text-decoration: none;
  color: ${theme.color.text.main};
  font-weight: 700;
  font-size: ${theme.fontSize.text};
  text-transform: uppercase;
`

export const Cardcontent = styled(Cardtitle)`
  color: ${theme.color.text.gray}
  margin: 12px 0;
  text-transform: none;
  font-weight: 500;
  font-size: ${theme.fontSize.sub_text};
`

export const UpdateBy = styled.div`
  font-size: ${theme.fontSize.small_text_1};
  color: ${theme.color.text.grayLight};
  font-weight: 500;
`

export const Author = styled.span`
  // text-transform: capitalize;
  // font-weight: 500;
`

export const CardWrapper = styled.div`
  display: flex;
  padding: 16px;
  margin: 8px 16px 8px 0;
  border-radius: 4px
  box-shadow: ${theme.color.boxShadow.box};
  display: flex;
  flex-direction: column;
  background-color: white;
  flex-grow: 1;
  align-items: center;
`

export const CardOptions = styled.div`
  display: flex;
  padding-top: 12px;
`

export const Option = styled.button`
  &:hover {
    background-color: ${theme.color.background.hover};
    color: ${theme.color.text.main};
  }
  cursor: pointer;
  outline: none;
  transform-origin: 0% 50%;
  padding: 6px 20px;
  flex-grow: 1;
  margin: 0 6px;
  border-radius: 4px;
  border: 1px solid transparent;
  font-size: 14px;
  transition: 160ms ease-out;
  background-color: white;
  color: dodgerblue;
`
