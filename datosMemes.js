
const obtenerMemes = async () => {
    const memsContainer = document.getElementById("list-memes");
    const memeTemplate = document.getElementById("meme");
  
    const request = await fetch("https://api.imgflip.com/get_memes");
    const response = await request.json();
  
    try {
      const gifphyRequest = await fetch("https://api.giphy.com/v1/gifs/search?api_key=lerx9FDWD5PH78M207Cj95ac4KTt8G3v&q=cheese&limit=1");
      const gifphyResponse = await gifphyRequest.json();
      console.log("GIF de prueba (cheese):", gifphyResponse.data[0]?.url);
    } catch (error) {
      console.warn("No se pudo obtener GIF de Giphy:", error);
    }
  
    response.data.memes.slice(0, 8).forEach(meme => {
      const newMemeCard = memeTemplate.cloneNode(true);
      const img = newMemeCard.querySelector("img");
      img.src = meme.url;
      img.alt = meme.name;
  
      newMemeCard.removeAttribute("id");
      newMemeCard.style.display = "block";
  
      memsContainer.appendChild(newMemeCard);
    });
  
    memeTemplate.remove();
  };
  
  obtenerMemes();
  
