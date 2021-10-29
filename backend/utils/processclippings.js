const fs = require('fs')
const createCSV = (sampleFile) => {

    const clippings = sampleFile.data.toString();
    console.log(clippings)
    const regex = /[«\w]+.*/gi
    const cuttings = clippings.match(regex)

    const array = []
    for(let i = 0; i < cuttings.length; i+= 3){
        const text =  `"${cuttings[i]}"`
        const book = cuttings[i + 1]
        const date = cuttings[i + 2]
        array.push({
            text,
            book,
            date,
        })
    }

    const csvString = [
        ...array.map(item => [
            item.text,
            item.book,
            item.date
            
        ])
    ]
     .map(e => e.join(","))
     .join("\n")

     return csvString
}

module.exports = createCSV