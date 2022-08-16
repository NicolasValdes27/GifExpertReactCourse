export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=G53D0ADEBjX3eJuefqWNAMKtSw1FLuP6&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    console.log(data)

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized.url
    }));

    return gifs;
}