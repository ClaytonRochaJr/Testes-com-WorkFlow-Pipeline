const request = require('supertest')


test('Deve visualizar informações de cadastro, quando buscar por uma pessoa existente', async ()=> {
    // https://swapi.dev/api
    // /people/1
    const resposta = await request('https:swapi.dev/api').get('/people/1')
    expect(resposta.status).toBe(200);
    
    expect(resposta.body.films).toBeDefined();

    expect(resposta.body.vehicles.length).toBeGreaterThan(0);

    expect(resposta.body.name).toBe('Luke Skywalker');



});

test("Deve retornar uma lista de espécies", async () => {
    const response = await fetch("https://swapi.dev/api/species/");
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.results).toBeDefined();
    expect(Array.isArray(data.results)).toBe(true);
  });
  test("Deve retornar detalhes da espécie Wookiee", async () => {
    const response = await fetch("https://swapi.dev/api/species/3/");
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.name).toBe("Wookiee");
  });
  test("Deve retornar uma lista de veículos", async () => {
    const response = await fetch("https://swapi.dev/api/vehicles/");
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.results).toBeDefined();
    expect(Array.isArray(data.results)).toBe(true);
  });
  test("Deve retornar detalhes do veículo Sand Crawler", async () => {
    const response = await fetch("https://swapi.dev/api/vehicles/4/");
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.name).toBe("Sand Crawler");
  });
  test("Deve verificar que o número total de naves está definido", async () => {
    const response = await fetch("https://swapi.dev/api/starships/");
    const data = await response.json();
    expect(data.count).toBeDefined();
    expect(typeof data.count).toBe("number");
  });
  test("Deve retornar 404 para uma rota inexistente (jedi)", async () => {
    const response = await fetch("https://swapi.dev/api/jedi/");
    expect(response.status).toBe(404);
  });
  test("Deve retornar o diretor do filme Episode IV: George Lucas", async () => {
    const response = await fetch("https://swapi.dev/api/films/1/");
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.director).toBe("George Lucas");
  });
  test("Deve retornar o planeta natal de Leia Organa", async () => {
    const response = await fetch("https://swapi.dev/api/people/5/");
    const data = await response.json();
    const planetResponse = await fetch(data.homeworld);
    const planetData = await planetResponse.json();
    expect(planetResponse.status).toBe(200);
    expect(planetData.name).toBe("Alderaan");
  });
  test("Deve retornar o diretor do filme Episode IV: George Lucas", async () => {
    const response = await fetch("https://swapi.dev/api/films/1/");
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.director).toBe("George Lucas");
  });
  test("Deve retornar o tipo de terreno do planeta Endor", async () => {
    const response = await fetch("https://swapi.dev/api/planets/7/");
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.terrain).toBe("forests, mountains, lakes");
  });
  test("Não deve existir campo 'editor' nos dados do personagem Luke Skywalker", async () => {
    const response = await fetch("https://swapi.dev/api/people/1/");
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.editor).toBeUndefined();
  });
  test("Deve verificar que o número total de planetas é definido", async () => {
    const response = await fetch("https://swapi.dev/api/planets/");
    const data = await response.json();
    expect(data.count).toBeDefined();
    expect(typeof data.count).toBe("number");
  });
  test("Deve retornar uma lista de personagens", async () => {
    const response = await fetch("https://swapi.dev/api/people/");
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.results).toBeDefined();
    expect(Array.isArray(data.results)).toBe(true);
  });
  

test('Deve receber uma emnsagem de erro , quando buscar por uma pessoa inexistente', async () => {

});

