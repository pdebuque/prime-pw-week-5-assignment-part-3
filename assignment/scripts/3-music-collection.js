console.log('***** Music Collection *****')

const collection=[array];

function addToCollection(title, artist, yearPublished) {
    const newRecord = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(newRecord);
    return newRecord
}