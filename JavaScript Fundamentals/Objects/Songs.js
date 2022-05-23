function winamp(input) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let numberOfSongs = input.shift();
    let printCommad = input.pop();
    let songList = [];
    //console.log(songList);

    for (let i=0; i < numberOfSongs; i++){
        let [type, name, time] = input[i].split('_');
        let song = new Song(type, name, time);
        songList.push(song);
    }

    if (printCommad === 'all'){
        songList.forEach ((i) => console.log(i.name));
    }else {
        let filtered = songList.filter((i) => i.type === printCommad);
        filtered.forEach((i) => console.log(i.name));
    }

}
winamp([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);