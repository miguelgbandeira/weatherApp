const api_key = "C8gNMDMriblvxpan6NVeR3jXgiqBdf2x";

async function getGif(searchTerm) {
  const gifObject = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${api_key}&s=${searchTerm}`
  );
  const gifJson = await gifObject.json();
  const gifUrl = gifJson.data.images.original.url;
  return gifUrl;
}

export { getGif };
