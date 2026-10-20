function songs(arr) {

    class Songs {

        constructor(type, name, time) {

            this.type = type;
            this.name = name;
            this.time = time;

        }
    }

    let numberOfSongs = arr.shift();
    let typeSongs = arr.pop();
    let songs = [];

    for (let i = 0; i < numberOfSongs; i++) {

        let [type, name, time] = arr[i].split('_');

        let song = new Songs(type, name, time);

        songs.push(song);

    }

    if (typeSongs === 'all') {

        songs.forEach((x) => console.log(x.name));

    } else {

        let filtered = songs.filter((x) => x.type === typeSongs);
        filtered.forEach((x) => console.log(x.name));

    }
}
songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
songs([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'listenLater']);
songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);