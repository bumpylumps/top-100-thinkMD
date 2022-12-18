// fetch album info from url

function getAlbums(){
    const url = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json'

    //request info from itunes
    fetch(url)
        //parse response as json()
        .then(res => res.json())
        //pass data to basic.html
        .then(data => {
            console.log(data)

           

            //loop through entry array from json promise
            data.feed.entry.forEach(x => {
                //console.log(x["im:name"].label);

                //create list nodes to store each album's data on
                let album = document.createElement("li");
                album.innerText = `${x["im:name"].label} - ${x["im:artist"].label}`;

                //add list node to album
                document.querySelector('.album-list').append(album);

            })

            
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}

getAlbums();
//feed.entry[0]["im:name"]