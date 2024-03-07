async function tempo(request, response) {
    const apiSecret = process.env.POKE_API_SECRET
    const dynamicDate = new Date();

    const pokemonResponse = await fetch(`${apiSecret}`);
    const pokemonResponseJson = await pokemonResponse.json();
    const pokemonName = pokemonResponseJson.results[0].name;

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

    response.json({
        date: dynamicDate.toGMTString(),
        pokemonName: pokemonName
    })
} 

export default tempo;