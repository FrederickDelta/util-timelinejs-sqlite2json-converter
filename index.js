const sqlite3 = require('sqlite3').verbose()
const fs = require('fs')

let timelineObj
let eventsObj = []
let titleObj
let erasObj = []

let db = new sqlite3.Database('./timeline.sqlite', sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.error(err.message)
  }
  console.log('Sqlite database connected')
})

db.all('SELECT * FROM slides ORDER BY start_year ASC', (err, rows) => {
  if (err) {
    console.error(err.message)
  }

  rows.forEach((row) => {
    if (row.type === "title") {
      titleObj = getSlideObj(row)
    } else if (row.type === "era"){
      erasObj.push(getEraObj(row))
    } else {
      eventsObj.push(getSlideObj(row))
    }
  })

  timelineObj = {title: titleObj, eras: erasObj, events: eventsObj}
  if (timelineObj.title === undefined) {
    delete timelineObj.title
  }
  if (timelineObj.eras.length === 0) {
    delete timelineObj.eras
  }

  fs.writeFileSync('./timeline_out.json', JSON.stringify(timelineObj))
  console.log('Conversion succeed.')
})

db.close((err) => {
  if (err) {
    console.error(err.message)
  }
  console.log('Database connection closed.')
})

function formatTimelineObj(obj) {
  for (let propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName]
    }
  }
  if (Object.entries(obj).length === 0 && obj.constructor === Object) {
    return null
  } else {
    return obj
  }
}

function getSlideObj(row) {
  let slideObj = {
    start_date: getStartDateObj(row), 
    end_date: getEndDateObj(row), 
    text: getTextObj(row), 
    media: getMediaObj(row), 
    group: row.group,
    display_date: row.display_date,
    background: row.background
  }
  return formatTimelineObj(slideObj)
}

function getEraObj(row) {
  let eraObj = {
    start_date: getStartDateObj(row),
    end_date: getEndDateObj(row),
    text: getTextObj(row)
  }
  return formatTimelineObj(eraObj)
}

function getStartDateObj(row) {
  let startDateObj = {
    year: row.start_year,
    month: row.start_month,
    day: row.start_day
  }
  return formatTimelineObj(startDateObj)
}

function getEndDateObj(row) {
  let endDateObj = {
    year: row.end_year,
    month: row.end_month,
    day: row.end_day
  }
  return formatTimelineObj(endDateObj)
}

function getTextObj(row) {
  let textObj = {
    headline: row.headline,
    text: row.text
  }
  return formatTimelineObj(textObj)
}

function getMediaObj(row) {
  let mediaObj = {
    url: row.media_url,
    caption: row.media_caption,
    credit: row.media_credit,
    thumbnail: row.media_thumbnail
  }
  return formatTimelineObj(mediaObj)
}