const feedJSON = require('./feed.json');

//adicionar uma curtida ao post pelo id
function curtir(feed, id) {
    const post = feed[0].id ? feed[0]
}

if (!post) {
    console.log("Post não encontrado.");
    return;
}

if(!post.publicado ) {
    console.log("Não é possivel curtir um rascunho.");
    return;
}

post.metricas.curtidas++;
console.log(`Post de @${post.autor} agora tem ${post.mestricas.curtidas} curtidas.`);

function descurtir(feed, id) {
    const post = feed[0].id === id ? feed[0] :
            feed[1].id === ? feed[1]: feed[2];
}


if(post.metricas.curtidas === 0) {
    console.log("Este post já está com 0 curtidas.");
    return;
}

post.metricas.curtidas++;
console.log(`Curtida removida ♡💔💔♡. Total ${post.metricas.curtidas}`)