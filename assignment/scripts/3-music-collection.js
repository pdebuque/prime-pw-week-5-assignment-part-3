console.log('***** Music Collection *****')

const collection=[];

function addToCollection(title, artist, yearPublished) {
    const newRecord = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(newRecord);
    return newRecord
}

addToCollection('Sgt. Pepper\'s Lonely Hearts Club Band', 'The Beatles', 1967);
addToCollection('Freudian','Daniel Caesar', 2017);
addToCollection('Songs in the Key of Life','Stevie Wonder',1976);
addToCollection('Carrie and Lowell', 'Sufjan Stevens',2015);
addToCollection('The White Album', 'The Beatles', 1968);
addToCollection('Late Registration', 'Kanye West', 2005)

console.log(collection);