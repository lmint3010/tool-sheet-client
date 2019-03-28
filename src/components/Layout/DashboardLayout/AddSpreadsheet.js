import React from 'react'
import styled from 'styled-components'
import color from '../../../themes/color'
import isEmpty from '../../../validation/isEmpty'
// Display time
import moment from 'moment'
// UI Components
import { Input, Error } from '../../../themes/styled_comp/InputGroup'
import { SubmitBtn } from '../../../themes/styled_comp/Form'
import '../../../assets/icons/all.min.css'
// Components
import Spinner from '../Spinner/Spinner'
import './style.css'

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
  border: none;
`

const Input2 = styled(Input)`
  border-color: rgba(135, 150, 165, 0.15);
  min-width: ${props => (props.width ? props.width : '30%')};
  margin-right: 8px;
`

const Path = styled.div`
  margin-bottom: 40px;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px;
  display: inline-block;
  width: 50%;
`

export const Card = styled.div`
  text-align: center;
  background-color: white;
  border-radius: 2px;
  padding: 12px 10px;
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const Cardtitle = styled.a`
  margin: 0;
  text-decoration: none;
  color: ${color.text.main};
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
`

export const Cardcontent = styled(Cardtitle)`
  color: ${color.text.gray}
  margin-top: 5px;
  text-transform: none;
  font-size: 13px;
`

export const UpdateBy = styled.div`
  margin-top: 10px;
  font-size: 12px;
  color: ${color.text.grayLight};
  font-weight: 600;
  font-style: italic;
`

const Author = styled.span`
  // text-transform: capitalize;
  // font-weight: 500;
`

const CardWrapper = styled.div`
  display: flex;
  margin: 16px;
  border: 1px solid dodgerblue;
  display: flex;
  align-items: center;
`

const CardOptions = styled.div`
  display: flex;
  flex-direction: column;
`

const Option = styled.button`
  &:hover {
    background-color: #116bff;
  }
  cursor: pointer;
  outline: none;
  transform-origin: 0% 50%;
  padding: 6px 26px;
  flex-grow: 1;
  border: 1px solid dodgerblue;
  font-size: 14px;
  transition: 160ms ease-out;
  background-color: #448bff;
  color: white;
`

// Stateless Component AddSpreadsheet
export default ({
  list,
  onChange,
  onSubmit,
  errors,
  onDelete,
  onFetch,
  spreadsheetLoading,
  spreadsheetFetching,
  spreadsheetSync,
}) => {
  // Initial List Spreadsheet
  let listSpreadsheet = <Spinner color="#2196f3" />
  if (!spreadsheetLoading) {
    listSpreadsheet = (
      <List>
        {list.map((spreadsheet, index) => (
          <CardWrapper key={index}>
            <Card>
              <Cardtitle href={spreadsheet.spreadsheetUrl} target="_blank">
                {spreadsheet.alias}
              </Cardtitle>
              <Cardcontent>{spreadsheet.title}</Cardcontent>
              <UpdateBy>
                {moment(spreadsheet.updated).fromNow()} by{' '}
                <Author>{spreadsheet.creator}</Author>
              </UpdateBy>
            </Card>
            <CardOptions>
              <Option onClick={() => onDelete(spreadsheet._id)}>
                <i className="far fa-trash" />
              </Option>
              <Option
                onClick={() => onFetch(spreadsheet.spreadsheetId)}
                className={
                  spreadsheetFetching.status &&
                  spreadsheetFetching.spreadsheetId !==
                    spreadsheet.spreadsheetId
                    ? 'disable-fetch'
                    : 'enable-fetch'
                }
                disabled={
                  spreadsheetFetching.status &&
                  spreadsheetFetching.spreadsheetId !==
                    spreadsheet.spreadsheetId
                    ? true
                    : false
                }>
                <span
                  className={
                    spreadsheetFetching.status &&
                    spreadsheetFetching.spreadsheetId ===
                      spreadsheet.spreadsheetId
                      ? 'spreadsheet-fetching'
                      : ''
                  }>
                  <i className="far fa-sync" />
                </span>
              </Option>
              <Option
                onClick={() =>
                  spreadsheetSync(spreadsheet.spreadsheetId, spreadsheet._id)
                }>
                <i className="far fa-pen-alt" />
              </Option>
            </CardOptions>
          </CardWrapper>
        ))}
      </List>
    )
  }

  return (
    <>
      <Path>
        <Title>New Spreadsheet</Title>
        <Subtitle>Add new Google Spreadsheet</Subtitle>
        <Form onSubmit={onSubmit}>
          <Input2
            onChange={onChange}
            placeholder="Enter Google Spreadsheet URL: docs.google.com/..."
            width="80%"
            name="sprsheetUri"
          />
          <Input2
            onChange={onChange}
            placeholder="Alias for Spreadsheet"
            name="alias"
          />
          <SubmitBtn2 type="submit" value="Submit" />
        </Form>
        {isEmpty(errors) ? null : <Error>{errors}</Error>}
      </Path>

      <Path>
        <Title>Spreadsheet List</Title>
        <Subtitle>List of existed Google Spreadsheet</Subtitle>
        {listSpreadsheet}
      </Path>
    </>
  )
}
