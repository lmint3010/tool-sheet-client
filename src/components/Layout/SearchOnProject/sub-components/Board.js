import React from 'react'
import {
  Board,
  BoardRow,
  BoardSite,
  BoardEnglish,
  BoardTranslate,
  Sheetname,
  Sitename,
  BoardNotification,
  Noti,
} from '../style'

const BoardUI = ({ data, searchData }) => {
  console.log('Board rendered')

  const languageCode = searchData ? searchData.languageCode.toLowerCase() : 'de'
  const content = searchData ? searchData.content.toLowerCase() : ''
  const shorten = str => str.replace(/[\s\n]+/g, '').toLowerCase()
  const dataSearchResult = data.filter(e => {
    const translated = e.translated[languageCode]
      ? e.translated[languageCode]
      : ''
    return (
      shorten(translated).includes(shorten(content)) ||
      shorten(e.text).includes(shorten(content))
    )
  })

  const user_interface =
    content === '' ? (
      <Board>
        <BoardNotification>
          <Noti>
            <i className="far fa-tape" /> You can search for now
          </Noti>
        </BoardNotification>
      </Board>
    ) : dataSearchResult.length === 0 ? (
      <Board>
        <BoardNotification>
          <Noti>
            <i className="far fa-tape" /> No result found
          </Noti>
        </BoardNotification>
      </Board>
    ) : (
      <Board>
        {dataSearchResult.map((e, i) => {
          return (
            <BoardRow key={i}>
              <BoardSite>
                <Sitename>{languageCode}</Sitename>
                <Sitename>{e.site}</Sitename>
                <Sheetname>{e.sheet}</Sheetname>
              </BoardSite>
              <BoardEnglish readOnly value={e.text} />
              <BoardTranslate
                readOnly
                value={
                  e.translated[languageCode]
                    ? e.translated[languageCode]
                    : '...'
                }
              />
            </BoardRow>
          )
        })}
      </Board>
    )
  return user_interface
}

export default React.memo(BoardUI)
