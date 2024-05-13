module.exports = {
attributes: {
email: {
type: 'string',
required: true,
columnType: 'varchar(100)',
unique: true,
},
name: {
type: 'string',
required: true
},
password: {
type: 'string',
required: true
},
},
}