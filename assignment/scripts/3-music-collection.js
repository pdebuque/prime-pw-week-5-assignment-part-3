console.log('***** Music Collection *****')

// I got tired of manually creating test searches in the console.log and vscode, so I brought in jquery to make searches on the DOM

$(document).ready(readyNow);

function readyNow() {
    console.log('jquery ready');
    $('#makeSearchButton').on('click', searchFromDom);
}

const collection = [];

function addToCollection(title, artist, yearPublished, tracks) {
    const newRecord = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks
    }
    collection.push(newRecord);
    return newRecord
}

// not sure what the instruction "Console.log each album as added using the returned value." means

addToCollection('Sgt. Pepper\'s Lonely Hearts Club Band', 'The Beatles', 1967, [
    //durations in seconds, not as a string 
    {
        trackName: 'Sgt. Pepper\'s Lonely Hearts Club Band',
        duration: 122
    },
    {
        trackName: 'With a Little Help from My Friends',
        duration: 164
    },
    {
        trackName: 'Lucy in the Sky with Diamonds',
        duration: 204
    },
    {
        trackName: 'Getting Better',
        duration: 168
    },
    {
        trackName: 'Fixing a Hole',
        duration: 157
    },
    {
        trackName: 'She\'s Leaving Home',
        duration: 215
    },
    {
        trackName: 'Being for the Benefit of Mr. Kite!',
        duration: 158
    },
    {
        trackName: 'Within You Without You',
        duration: 305
    },
    {
        trackName: 'When I\'m Sixty-Four',
        duration: 158
    },
    {
        trackName: 'Lovely Rita',
        duration: 162
    },
    {
        trackName: 'Good Morning Good Morning',
        duration: 160
    },
    {
        trackName: 'Sgt. Pepper\’s Lonely Hearts Club Band (Reprise)',
        duration: 79
    },
    {
        trackName: 'A Day in the Life',
        duration: 334
    }
]

);
addToCollection('Freudian', 'Daniel Caesar', 2017, [
    {
        trackName: 'Get You',
        duration: 278
    },
    {
        trackName: 'Best Part',
        duration: 210
    },
    {
        trackName: 'Hold Me Down',
        duration: 231
    },
    {
        trackName: 'Neu Roses (Transgressor\'s Song)',
        duration: 182
    },
    {
        trackName: 'Loose',
        duration: 186
    },
    {
        trackName: 'We Find Love',
        duration: 255
    },
    {
        trackName: 'Blessed',
        duration: 241
    },
    {
        trackName: 'Take Me Away',
        duration: 226
    },
    {
        trackName: 'Transform',
        duration: 281
    },
    {
        trackName: 'Freudian',
        duration: 602
    }
]
);
addToCollection('Songs in the Key of Life', 'Stevie Wonder', 1976, [
    {
        trackName: 'Love\'s in Need of Love Today',
        duration: 426
    },
    {
        trackName: 'Have a Talk with God',
        duration: 162
    },
    {
        trackName: 'Village Ghetto Land',
        duration: 205
    },
    {
        trackName: 'Contusion',
        duration: 226
    },
    {
        trackName: 'Sir Duke',
        duration: 232
    },
    {
        trackName: 'I Wish',
        duration: 252
    },
    {
        trackName: 'Knocks Me Off My Feet',
        duration: 216
    },
    {
        trackName: 'Pasttime Paradise',
        duration: 237
    },
    {
        trackName: 'Summer Soft',
        duration: 254
    },
    {
        trackName: 'Ordinary Pain',
        duration: 376
    },
    {
        trackName: 'Isn\'t She Lovely',
        duration: 394
    },
    {
        trackName: 'Joy Inside My Tears',
        duration: 390
    },
    {
        trackName: 'Black Man',
        duration: 507
    },
    {
        trackName: 'Nigicuela - Es Una Hisotira - I Am Singing',
        duration: 228
    },
    {
        trackName: 'If It\'s Magic',
        duration: 192
    },
    {
        trackName: 'As',
        duration: 428
    },
    {
        trackName: 'Another Star',
        duration: 508
    }
]

);
addToCollection('Carrie and Lowell', 'Sufjan Stevens', 2015, [
    {
        trackName: 'Death with Dignity',
        duration: 239
    },
    {
        trackName: 'Should Have Known Better',
        duration: 305
    },
    {
        trackName: 'All of Me Wants All of You',
        duration: 221
    },
    {
        trackName: 'Drawn to the Blood',
        duration: 196
    },
    {
        trackName: 'Eugene',
        duration: 146
    },
    {
        trackName: 'Fourth of July',
        duration: 279
    },
    {
        trackName: 'The Only Thing',
        duration: 194
    },
    {
        trackName: 'Carrie & Lowell',
        duration: 194
    },
    {
        trackName: 'John My Beloved',
        duration: 305
    },
    {
        trackName: 'No Shade in the Shadow of the Cross',
        duration: 160
    },
    {
        trackName: 'Blue Bucket of Gold',
        duration: 284
    }
]
);
addToCollection('Rubber Soul', 'The Beatles', 1965, [
    {
        trackName: 'I\'ve Just Seen a Face',
        duration: 127
    },
    {
        trackName: 'Norwegian Wood',
        duration: 125
    },
    {
        trackName: 'You Won\'t See Me',
        duration: 199
    },
    {
        trackName: 'Think for Yourself',
        duration: 138
    },
    {
        trackName: 'The Word',
        duration: 167
    },
    {
        trackName: 'Michelle',
        duration: 161
    },
    {
        trackName: 'It\'s Only Love',
        duration: 119
    },
    {
        trackName: 'Girl',
        duration: 149
    },
    {
        trackName: 'I\'m Looking Through You',
        duration: 150
    },
    {
        trackName: 'In My Life',
        duration: 147
    },
    {
        trackName: 'Wait',
        duration: 133
    },
    {
        trackName: 'Run for Your Life',
        duration: 145
    }
]
);
addToCollection('Late Registration', 'Kanye West', 2005, [
    {
        trackName: 'Wake Up Mr. West',
        duration: 41
    },
    {
        trackName: 'Heard \'em Say',
        duration: 204
    },
    {
        trackName: 'Touch the Sky',
        duration: 237
    },
    {
        trackName: 'Gold Digger',
        duration: 208
    },
    {
        trackName: 'Skit #1',
        duration: 34
    },
    {
        trackName: 'Drive Slow',
        duration: 273
    },
    {
        trackName: 'My Way Home',
        duration: 104
    },
    {
        trackName: 'Crack Music',
        duration: 271
    },
    {
        trackName: 'Roses',
        duration: 246
    },
    {
        trackName: 'Bring Me Down',
        duration: 199
    },
    {
        trackName: 'Addiction',
        duration: 267
    },
    {
        trackName: 'Skit #2',
        duration: 31
    },
    {
        trackName: 'Diamonds from Sierra Leone',
        duration: 233
    },
    {
        trackName: 'We Major',
        duration: 449
    },
    {
        trackName: 'Skit #3',
        duration: 24
    },
    {
        trackName: 'Hey Mama',
        duration: 305
    },
    {
        trackName: 'Celebration',
        duration: 198
    },
    {
        trackName: 'Skit #4',
        duration: 79
    }
]
);

console.log(collection);

function showCollection(array) {
    console.log(array.length);
    for (let album of array) {
        console.log(`--- ${album.title} by ${album.artist}, published in ${album.yearPublished} ---`);
        for (let track of album.tracks) {
            console.log(`${album.tracks.indexOf(track) + 1}. ${track.trackName}: ${track.duration}`)
        }
    }
}

showCollection(collection);

function findByArtist(artist) {
    const results = [];
    for (let album of collection) {
        if (album.artist.toLowerCase() === artist.toLowerCase()) {
            results.push(album)
        }
    }
    if (results.length === 0) {
        console.log('No results!')
    }
    return results
}

console.log('albums by The Beatles:', findByArtist('The beatles'));
console.log('albums by Daniel Caesar:', findByArtist('DANIel Caesar'));
console.log('albums by The Rolling Stones:', findByArtist('The Rolling Stones'))

// --------------- STRETCH ------------------- //


// search function
//take an input in the form of an object.

//clone collection object?

//take first value in the search input and compare to each corresponding value in the cloned collection object
//(if the search value is empty, skip it)
//if the values do not match, remove that element from the cloned object

//repeat for all keys

//return cloned collection object



// this first attempt was way too clunky

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
//             console.log(`----- search criterion: ${ property }: ${ searchInput[property]} ----- `);
//             for (let album of searchOutput) {
//                 console.log(`checking ${ property } against: `, album);
//                 console.log(`album ${ property }: `, album[property]);
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

// attempting to make a generic search function that can scale with added properties
// function search(searchInput) {
//     const searchOutput = [];

//     //use values arrays for easier iteration
//     const searchInputValues = Object.values(searchInput);
//     console.log(searchInputValues)

//     //loop 1: compare search input with each album in the collection
//     for (let album of collection) {
//         //loop 2: compare each property in the search with each property in the collection album being considered
//         const albumValues = Object.values(album);
//         let count = 0;
//         for (let i = 0; i < albumValues.length - 1; i++) {
//             console.log(album.title);
//             //each time the properties match exactly OR if there was no search input, count goes up by one
//             if (albumValues[i] === searchInputValues[i] || !searchInputValues[i]) {
//                 count++;
//                 console.log(`matching properties: ${count}`);
//             }
//             // separate process to handle track names. Super clunky.
//             // extract an array of track names for the given album.
//             const albumTracksArray = []
//             for (track of albumValues[3]) {
//                 albumTracksArray.push(track.trackName);
//             }
//             console.log(albumTracksArray)
//             if (albumTracksArray.some((element) => element = searchInputValues[3])) {
//                 count++
//             }
//         }
//         //if the number of matching properties equals the number of properties, push the album to output
//         if (count >= searchInputValues.length) {
//             console.log('it\'s a match!');
//             searchOutput.push(album)
//         }
//     }
//     return (searchOutput)
// }

const search1 = {
    title: '',
    artist: '',
    yearPublished: '',
    tracks: 'wait'
}

function search(searchInput) {
    // use .includes and/or .filter to streamline
    console.log(searchInput);

    // searchOutput should be all elements of collection whose title, artist, and year match, and whose tracks matches one of the tracks in the album

    let searchOutput = collection.filter(album =>
        album.title.toLowerCase() === searchInput.title.toLowerCase() || !searchInput.title);

    searchOutput = searchOutput.filter(album =>
        album.artist.toLowerCase() === searchInput.artist.toLowerCase() || !searchInput.artist);

    searchOutput = searchOutput.filter(album =>
        album.yearPublished === Number(searchInput.yearPublished) || !searchInput.yearPublished);

    // special process for album tracks
    searchOutput = searchOutput.filter((album) => {
        // return only albums for whom there exists a track name that includes the searched track name
        // take the album tracks array and map it such that if the track name includes the input, the mapped entry is 1, otherwise 0.

        const albumMatchesMap = album.tracks.map((track) => {
            return !searchInput.tracks || track.trackName.toLowerCase() === searchInput.tracks.toLowerCase() ? 1 : 0;
        })
        // add up all elements of the array; if sum >0, the album passes the filter
        return albumMatchesMap.reduce((a, b) => a + b, 0)
    });

    return searchOutput;
}

// test: expect rubber soul
console.log('test: expect rubber soul', search(search1));

const search2 = {
    title: '',
    artist: 'beat',
    yearPublished: '',
    tracks: ''
}

// add an option for search contains rather than search equals
function searchContains(searchInput) {
    console.log(searchInput);

    // same as above, but with .includes rather than ===

    let searchOutput = collection.filter(album =>
        album.title.toLowerCase().includes(searchInput.title.toLowerCase()) || !searchInput.title);

    searchOutput = searchOutput.filter(album =>
        album.artist.toLowerCase().includes(searchInput.artist.toLowerCase()) || !searchInput.artist);

    searchOutput = searchOutput.filter(album =>
        album.yearPublished === Number(searchInput.yearPublished) || !searchInput.yearPublished);

    // special process for album tracks

    searchOutput = searchOutput.filter((album) => {

        const albumMatchesMap = album.tracks.map((track) => {
            return !searchInput.tracks || track.trackName.toLowerCase().includes(searchInput.tracks.toLowerCase()) ? 1 : 0;
        })
        // add up all elements of the array; if sum >0, the album passes the filter

        return albumMatchesMap.reduce((a, b) => a + b, 0)
    });

    return searchOutput;
}

// test: expect both beatles albums

console.log(searchContains(search2));

// future refactoring: using a count and comparing its value feels clunky. how can i eliminate it? fixed
// bug check: does the search work with weird types? yes
// better functionality: eliminate case sensitivity fixed
// better functionality: allow for results contain yes

function searchFromDom() {
    //if matching albums header doesn't exist, create it.

    if (!$('#matchHeader').html()) {
        $('.search').append(
            `<div id="resultsContent">
            <h3 id="matchHeader"> Matching Albums </h3>
            <ul id='matchList'>
            </ul>
            </div>`
        )
    }

    console.log('in searchFromDom')

    // take inputs from all four search fields
    // plug their values into a new object

    const newSearch = {
        title: $('#searchInputTitle').val(),
        artist: $('#searchInputArtist').val(),
        yearPublished: $('#searchInputYear').val(),
        tracks: $('#searchInputTrack').val()
    }

    // execute search function (above)
    // edit: depending on status of checkbox!

    const searchMatch = $('#searchContains').is(':checked') ? searchContains(newSearch) : search(newSearch);
    console.log(searchMatch);

    //clear any existing results from the DOM
    $('#matchList').html('');

    //append results to DOM
    for (result of searchMatch) {
        $('#matchList').append(`
            <li class='albumResult'> 
                ${result.title}, by ${result.artist}. Published ${result.yearPublished}.
            </li>
        `)
    }

    // if there are no matches, say so

    if (!$('#matchList').html()) {
        $('#matchList').append(`
            No results! Try again.
        `)
    }

    // clear values
    $('#searchInputTitle').val('');
    $('#searchInputArtist').val('');
    $('#searchInputYear').val('');
    $('#searchInputTrack').val('');
}

