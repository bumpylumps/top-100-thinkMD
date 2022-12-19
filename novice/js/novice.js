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
                
                //pass album info to fresh list node - generate a span for name and artist
                //in order to ease access for styling
                album.innerHTML = '<span class="bold">' + `${x["im:name"].label}` + '</span>' + '<br>' + 
                '<span>' + ` ${x["im:artist"].label}` + '</span>';

                //add class to list node for styles
                album.classList.add('list-group-item'); 


                //add list node to album
                document.querySelector('ol').append(album);

            })
        })
         //grab errors
        .catch(err => {
            console.log(`error ${err}`)
        })
}

getAlbums();