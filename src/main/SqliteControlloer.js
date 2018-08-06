var sqlite = require('sqlite3').verbose();

exports.message = 'Hello SQlite'

exports.getTables = function () {
  var db = new sqlite.Database('sample.db')
  var array = []
  db.serialize(function () {
    db.each("select name from sqlite_master where type='table';", function (row) {
      array.push(row.name)
    })
  })

  db.close()
  console.log(array)
  return array
}
