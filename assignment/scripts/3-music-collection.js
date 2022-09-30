console.log('***** Music Collection *****')

const collection = [];

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
addToCollection('Freudian', 'Daniel Caesar', 2017);
addToCollection('Songs in the Key of Life', 'Stevie Wonder', 1976);
addToCollection('Carrie and Lowell', 'Sufjan Stevens', 2015);
addToCollection('The White Album', 'The Beatles', 1968);
addToCollection('Late Registration', 'Kanye West', 2005)

console.log(collection);

function showCollection(array) {
    console.log(array.length);
    for (let album of array) {
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`)
    }
}

showCollection(collection);

function findByArtist(artist) {
    const results = [];
    for (let album of collection) {
        if (album.artist === artist) {
            results.push(album)
        }
    }
    return results
}

console.log(findByArtist('The Beatles'));
console.log(findByArtist('Daniel Caesar'));

//--------------- STRETCH -------------------


// search function
//take an input in the form of an object.

//clone collection object?

//take first value in the search input and compare to each corresponding value in the cloned collection object
//(if the search value is empty, skip it)
//if the values do not match, remove that element from the cloned object

//repeat for all keys

//return cloned collection object

const search1 = {
    title: 'Sgt. Pepper\'s Lonely Hearts Club Band',
    artist: 'The Beatles',
    yearPublished: 1967
}



// function search(searchInput) {
//     //check that there are search object is not empty
//     let populatedInputs = 0
//     for (let property in searchInput) {
//         if (property) {
//             populatedInputs++
//         }
//     }
//     if (populatedInputs === 0) {
//         return collection
//     } else {

//         const searchOutput = [];
//         console.log(Object.keys(searchInput))
//         for (let property in searchInput) {
//             console.log(`----- search criterion: ${property}: ${searchInput[property]} -----`);
//             for (let album of searchOutput) {
//                 console.log(`checking ${property} against:`, album);
//                 console.log(`album ${property}:`, album[property]);
//                 if (searchInput[property] !== album[property]) {
//                     console.log('properties do not match');
//                     searchOutput.splice(searchOutput.indexOf(album) + 1, 0);
//                     console.log(searchOutput);
//                 } else {
//                     console.log('properties match!')
//                 }
//             }
//         }
//         return searchOutput;
//     }
// }

function search(searchInput) {
    //check that there are search object is not empty
    let populatedInputs = 0
    for (let property in searchInput) {
        if (property) {
            populatedInputs++
        }
    }
    if (populatedInputs === 0) {
        return collection
    } else {

        const searchOutput = [];
        console.log(Object.keys(searchInput))
        for (let property in searchInput) {
            

            console.log(`----- search criterion: ${property}: ${searchInput[property]} -----`);
            for (let album of searchOutput) {
                console.log(`checking ${property} against:`, album);
                console.log(`album ${property}:`, album[property]);
                if (searchInput[property] !== album[property]) {
                    console.log('properties do not match');
                    searchOutput.splice(searchOutput.indexOf(album) + 1, 0);
                    console.log(searchOutput);
                } else {
                    console.log('properties match!')
                }
            }
        }
        return searchOutput;
    }
}



