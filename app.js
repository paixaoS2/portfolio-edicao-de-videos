// Função para exibir vídeos com base na tag selecionada
function filterVideos(tag) {
    const videoList = document.getElementById("videoList");
    videoList.innerHTML = ""; // Limpar conteúdo existente

    // Filtrar vídeos com a tag selecionada
    const filteredVideos = tag === "Todos" ? videos : videos.filter(video => video.tags.includes(tag));

    // Verificar se há vídeos para exibir
    if (filteredVideos.length > 0) {
        filteredVideos.forEach(video => {
            displayVideo(video);
        });
    } else {
        displayNoVideos();
    }
}

// Função para criar e exibir um vídeo e descrição no contêiner
function displayVideo(video) {
    const videoList = document.getElementById("videoList");

    // Criar contêiner para cada vídeo
    const videoContainer = document.createElement("div");
    videoContainer.classList.add("video-container");

    // Criar iframe do vídeo
    const iframe = document.createElement("iframe");
    iframe.width = "100%";
    iframe.height = "300";
    iframe.src = video.url;
    iframe.title = "Vídeo do YouTube";
    iframe.frameBorder = "0";
    iframe.allowFullscreen = true;

    // Criar contêiner de descrição
    const description = document.createElement("div");
    description.classList.add("description");
    description.innerHTML = `<p>${video.description}</p>`;

    // Inserir iframe e descrição no contêiner de vídeo
    videoContainer.appendChild(iframe);
    videoContainer.appendChild(description);

    // Adicionar o contêiner de vídeo à lista
    videoList.appendChild(videoContainer);
}

// Função para exibir uma mensagem caso não haja vídeos na categoria
function displayNoVideos() {
    const videoList = document.getElementById("videoList");
    videoList.innerHTML = "<p>Nenhum vídeo disponível nesta categoria.</p>";
}

// Adicionar eventos aos botões para cada filtro
document.querySelectorAll(".square").forEach(button => {
    button.addEventListener("click", () => {
        const tag = button.textContent.trim();
        filterVideos(tag);
    });
});

// Exibir todos os vídeos por padrão ao carregar a página
filterVideos("Todos");

