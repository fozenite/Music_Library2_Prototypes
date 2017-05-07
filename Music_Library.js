var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  var shortPath = library.playlists;
  for(playlistName in shortPath)
  {
    var shortPath2 = shortPath[playlistName];
    console.log(shortPath2.id + ": " + shortPath2.name + " - " + shortPath2.tracks.length + " tracks");
  }

}


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  var shortPath = library.tracks;
  for(trackName in shortPath)
  {
    var shortPath2 = shortPath[trackName];
    console.log(shortPath2.id + ": " + shortPath2.name + " by " + shortPath2.artist + " (" + shortPath2.album + ")");
  }

}


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {

     var shortPathPlaylists = library.playlists;
     var shortPathTracks    = library.tracks;
     var shortPathPlayLists2 = shortPathPlaylists[playlistId];
     console.log(shortPathPlayLists2.id + ": " + shortPathPlayLists2.name + " - " + shortPathPlayLists2.tracks.length + " tracks");

     var shortPathTracksLookUp = shortPathPlayLists2.tracks;

    for(trackName in shortPathTracksLookUp){
      var shortPathTracksLookUp2 = shortPathTracks[shortPathTracksLookUp[trackName]];
        console.log(shortPathTracksLookUp2.id + ": " + shortPathTracksLookUp2.name + " by " + shortPathTracksLookUp2.artist + " (" + shortPathTracksLookUp2.album + ")");
    }



}


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

  var shortPathPlaylists = library.playlists[playlistId].tracks;
  shortPathPlaylists.push(trackId);

}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {

  // 'Stan'  'Eminem'  'Track'
  var newTrackId = 't' + uid();

  library.tracks.newTrackId = {
                   id: newTrackId,
                   name: name,
                   artist: artist,
                   album: album

  };
}


// adds a playlist to the library

var addPlaylist = function (name) {
  var newPlaylistId = 'p' + uid();
  library.playlists.newPlaylistId = {
                                    id: newPlaylistId,
                                    name: name,
                                    tracks: []
  };


}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}



//printPlaylist('p01');
//addTrackToPlaylist('t03', 'p01');
//printPlaylists();
//addTrack('Stan', 'Eminem', 'Encore');
//printTracks();

// addPlaylist('ChillMusic');
// printPlaylists();