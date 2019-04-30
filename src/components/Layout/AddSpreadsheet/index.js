import React from 'react'
import isEmpty from '../../../validation/isEmpty'
import moment from 'moment'
import { Error } from '../../../themes/styled_comp/InputGroup'
import '../style.css'
import '../../../assets/icons/all.min.css'
import {
  List,
  CardWrapper,
  CardOptions,
  Card,
  Cardtitle,
  Cardcontent,
  UpdateBy,
  Author,
  Option,
  Path,
  Title,
  Subtitle,
  Form,
  Input2,
  SubmitBtn2,
  TotalDocs,
  Heart,
} from './styled'

// Components
import Spinner from '../Spinner'
import FloatVerify from '../../../containers/FloatVerify'

// Stateless Component AddSpreadsheet
export default ({
  user,
  list,
  filter,
  onChange,
  onSubmit,
  onFilter,
  errors,
  onDelete,
  onFetch,
  spreadsheetLoading,
  spreadsheetFetching,
  spreadsheetSync,
  spreadsheetLike,
  displayVerify,
}) => {
  // Initial List Spreadsheet
  let listSpreadsheet = <Spinner color="#2196f3" />
  let totalDocuments = 0
  let newList = list.filter(e => e.alias.toLowerCase().includes(filter))
  if (!spreadsheetLoading) {
    listSpreadsheet = (
      <List>
        {newList.map((spreadsheet, index) => {
          totalDocuments += spreadsheet.totalEnglishDocs
          return (
            <CardWrapper key={index}>
              <Card>
                <Cardtitle href={spreadsheet.spreadsheetUrl} target="_blank">
                  {spreadsheet.alias}
                  <TotalDocs>{spreadsheet.totalEnglishDocs}</TotalDocs>
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
                <Heart
                  className={`fas fa-heart-circle ${
                    spreadsheet.userLiked &&
                    spreadsheet.userLiked.includes(user._id)
                      ? 'active'
                      : ''
                  }`}
                  onClick={() => spreadsheetLike(spreadsheet._id)}
                />
              </CardOptions>
            </CardWrapper>
          )
        })}
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
        <Title>
          Spreadsheet List{' '}
          <span style={{ color: 'dodgerblue', marginLeft: '4px' }}>
            {totalDocuments}
          </span>
        </Title>
        <Subtitle>List of existed Google Spreadsheet</Subtitle>
        <Input2 onChange={onFilter} placeholder="Filter" name="filter" />
        {listSpreadsheet}
      </Path>

      <FloatVerify display={displayVerify} />
    </>
  )
}
