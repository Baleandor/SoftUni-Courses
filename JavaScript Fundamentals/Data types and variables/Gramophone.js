function gramo(band, album, song){

//one rotation = 2.5s
//song in seconds (albumName.length * bandName.length) * song.length / 2
// rotations = songLength * 2.5
// `The plate was rotated {rotations} times.`

let songLength = (album.length * band.length) * song.length / 2;
let rotations = Math.ceil(songLength / 2.5);
console.log(`The plate was rotated ${rotations} times.`)
}

gramo(`Black Sabbath`, `Paranoid`, `War Pigs`)