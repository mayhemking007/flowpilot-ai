import Fastify from "fastify";


interface RequestBody {
    username : string;
}

const fastify = Fastify({
    logger : true
});




fastify.post<{Body : RequestBody}>('/', (request, reply) => {
    const a = request.body.username;
    console.log(a);
});


const start = async() => {
    try{
        await fastify.listen({port : 3000}, () => console.log("Server started at port 3000"));
    }
    catch(e){
        fastify.log.error(e);
    }
}

start();
