const contenido = [
  // =========================
  // PELÍCULAS
  // =========================

  
    {
      anio: 2014,
      capitulos: null,
      duracion: 169,
      genero: ["Ciencia ficción", "Drama", "Aventura"],
      imagen: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      nombre: "Interstellar",
      reputacion: 8.7,
      temporadas: null,
      tipo: "pelicula",
      trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
      director: "Christopher Nolan",
      sinopsis: "En un futuro donde la Tierra enfrenta una crisis ambiental, un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
      idioma: "Inglés"
    },

    {
      anio: 2008,
      capitulos: null,
      duracion: 152,
      genero: ["Acción", "Crimen", "Drama"],
      imagen: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      nombre: "The Dark Knight",
      reputacion: 9.0,
      temporadas: null,
      tipo: "pelicula",
      trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
      director: "Christopher Nolan",
      sinopsis: "Batman se enfrenta al Joker, un criminal impredecible que busca sumir a Gotham City en el caos y poner a prueba los límites del héroe.",
      idioma: "Inglés"
    },

    {
      anio: 1994,
      capitulos: null,
      duracion: 142,
      genero: ["Drama", "Crimen", "Romance"],
      imagen: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      nombre: "The Shawshank Redemption",
      reputacion: 9.3,
      temporadas: null,
      tipo: "pelicula",
      trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco",
      director: "Frank Darabont",
      sinopsis: "Un banquero condenado injustamente a cadena perpetua encuentra esperanza y amistad mientras intenta sobrevivir en una dura prisión.",
      idioma: "Inglés"
    },

    {
      anio: 1994,
      capitulos: null,
      duracion: 154,
      genero: ["Drama", "Crimen", "Comedia"],
      imagen: "https://image.tmdb.org/t/p/w500/qo1J1S5N1z5F5FQ8N3j4T8Z9.jpg",
      nombre: "Forrest Gump",
      reputacion: 8.8,
      temporadas: null,
      tipo: "pelicula",
      trailer: "https://www.youtube.com/watch?v=bLvqoHBptjg",
      director: "Robert Zemeckis",
      sinopsis: "Forrest Gump, un hombre de gran bondad y limitada comprensión del mundo, vive acontecimientos históricos mientras busca su lugar en la vida y en el amor.",
      idioma: "Inglés"
    },

    {
      anio: 2010,
      capitulos: null,
      duracion: 148,
      genero: ["Ciencia ficción", "Acción", "Thriller"],
      imagen: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
      nombre: "Inception",
      reputacion: 8.8,
      temporadas: null,
      tipo: "pelicula",
      trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
      director: "Christopher Nolan",
      sinopsis: "Un especialista en infiltrarse en los sueños recibe la misión de implantar una idea en la mente de un poderoso empresario.",
      idioma: "Inglés"
    },

    {
      anio: 1999,
      capitulos: null,
      duracion: 136,
      genero: ["Ciencia ficción", "Acción", "Drama"],
      imagen: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      nombre: "The Matrix",
      reputacion: 8.7,
      temporadas: null,
      tipo: "pelicula",
      trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
      director: "Lana Wachowski y Lilly Wachowski",
      sinopsis: "Un programador descubre que la realidad que conoce es una simulación creada por máquinas y se une a una rebelión para liberar a la humanidad.",
      idioma: "Inglés"
    },

    {
      anio: 2019,
      capitulos: null,
      duracion: 181,
      genero: ["Acción", "Ciencia ficción", "Aventura"],
      imagen: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
      nombre: "Avengers: Endgame",
      reputacion: 8.3,
      temporadas: null,
      tipo: "pelicula",
      trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      director: "Anthony Russo y Joe Russo",
      sinopsis: "Los Vengadores supervivientes intentan revertir las consecuencias del ataque de Thanos y recuperar a quienes desaparecieron.",
      idioma: "Inglés"
    },

    {
      anio: 1997,
      capitulos: null,
      duracion: 194,
      genero: ["Drama", "Romance", "Historia"],
      imagen: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
      nombre: "Titanic",
      reputacion: 8.0,
      temporadas: null,
      tipo: "pelicula",
      trailer: "https://www.youtube.com/watch?v=kVrqfYjkTdQ",
      director: "James Cameron",
      sinopsis: "Una joven de clase alta se enamora de un pasajero de tercera clase durante el viaje inaugural del Titanic, mientras el barco se aproxima a su trágico destino.",
      idioma: "Inglés"
    },

    {
      anio: 2019,
      capitulos: null,
      duracion: 122,
      genero: ["Drama", "Thriller", "Crimen"],
      imagen: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      nombre: "Joker",
      reputacion: 8.4,
      temporadas: null,
      tipo: "pelicula",
      trailer: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
      director: "Todd Phillips",
      sinopsis: "Arthur Fleck, un hombre marginado que trabaja como payaso, atraviesa una serie de acontecimientos que lo llevan a transformarse en el criminal conocido como Joker.",
      idioma: "Inglés"
    },

    {
      anio: 2000,
      capitulos: null,
      duracion: 113,
      genero: ["Drama", "Crimen", "Thriller"],
      imagen: "https://image.tmdb.org/t/p/w500/2TeqQTI7hZqJZ6QW5Jf7V2T0.jpg",
      nombre: "Memento",
      reputacion: 8.4,
      temporadas: null,
      tipo: "pelicula",
      trailer: "https://www.youtube.com/watch?v=HDWylEQSwFo",
      director: "Christopher Nolan",
      sinopsis: "Un hombre que no puede formar nuevos recuerdos intenta encontrar al responsable de la muerte de su esposa utilizando fotografías, notas y tatuajes.",
      idioma: "Inglés"
    },

    {
      anio: 2014,
      capitulos: null,
      duracion: 130,
      genero: ["Acción", "Aventura", "Ciencia ficción"],
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT176OKTfw1TSCGxyRF778pPNvcUJsbauM8aDnRmiZ571iO3O89",
      nombre: "Guardians of the Galaxy",
      reputacion: 8.0,
      temporadas: null,
      tipo: "pelicula",
      trailer: "https://www.youtube.com/watch?v=d96cjJhvlMA",
      director: "James Gunn",
      sinopsis: "Un grupo de inadaptados intergalácticos debe unir fuerzas para proteger una poderosa esfera de un enemigo que amenaza la galaxia.",
      idioma: "Inglés"
    },

    {
      anio: 2001,
      capitulos: null,
      duracion: 178,
      genero: ["Aventura", "Fantasía", "Drama"],
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmCc9ivhL7L9tkGdw32vdtnCBb3c5kQCx3FNNpWSYL0A&s=10.jpg",
      nombre: "The Lord of the Rings",
      reputacion: 8.9,
      temporadas: null,
      tipo: "pelicula",
      trailer: "https://www.youtube.com/watch?v=V75dMMIW2B4",
      director: "Peter Jackson",
      sinopsis: "Frodo Bolsón recibe la misión de destruir un poderoso anillo antes de que caiga en manos del Señor Oscuro Sauron.",
      idioma: "Inglés"
    },

    {
      anio: 2010,
      capitulos: null,
      duracion: 103,
      genero: ["Animación", "Aventura", "Comedia"],
      imagen: "https://image.tmdb.org/t/p/w500/4Yfp2wDv8K4.jpg",
      nombre: "Toy Story 3",
      reputacion: 8.3,
      temporadas: null,
      tipo: "pelicula",
      trailer: "https://www.youtube.com/watch?v=JcpWXaA2qeg",
      director: "Lee Unkrich",
      sinopsis: "Andy se prepara para ir a la universidad y sus juguetes terminan accidentalmente en una guardería donde deberán encontrar la forma de regresar a casa.",
      idioma: "Inglés"
    },

    {
      anio: 2009,
      capitulos: null,
      duracion: 162,
      genero: ["Ciencia ficción", "Aventura", "Acción"],
      imagen: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbb.jpg",
      nombre: "Avatar",
      reputacion: 7.9,
      temporadas: null,
      tipo: "pelicula",
      trailer: "https://www.youtube.com/watch?v=5PSNL1qE6VY",
      director: "James Cameron",
      sinopsis: "Un exmarine llega al planeta Pandora y se ve involucrado en el conflicto entre los humanos y los habitantes nativos del planeta.",
      idioma: "Inglés"
    },

    {
      anio: 2023,
      capitulos: null,
      duracion: 180,
      genero: ["Drama", "Historia", "Biografía"],
      imagen: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2.jpg",
      nombre: "Oppenheimer",
      reputacion: 8.6,
      temporadas: null,
      tipo: "pelicula",
      trailer: "https://www.youtube.com/watch?v=uYPbbksJxIg",
      director: "Christopher Nolan",
      sinopsis: "La historia del físico J. Robert Oppenheimer y su papel fundamental en el desarrollo de la primera bomba atómica durante la Segunda Guerra Mundial.",
      idioma: "Inglés"
    },

    {
      anio: 2018,
      capitulos: null,
      duracion: 134,
      genero: ["Acción", "Ciencia ficción", "Aventura"],
      imagen: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4.jpg",
      nombre: "Spider-Man: Into the Spider-Verse",
      reputacion: 8.4,
      temporadas: null,
      tipo: "pelicula",
      trailer: "https://www.youtube.com/watch?v=g4Hbz2jLxvQ",
      director: "Bob Persichetti, Peter Ramsey y Rodney Rothman",
      sinopsis: "Miles Morales se convierte en Spider-Man y descubre que existen diferentes versiones del héroe provenientes de distintos universos.",
      idioma: "Inglés"
    },

    {
      anio: 1999,
      capitulos: null,
      duracion: 139,
      genero: ["Drama", "Fantasía", "Crimen"],
      imagen: "https://image.tmdb.org/t/p/w500/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
      nombre: "The Green Mile",
      reputacion: 8.6,
      temporadas: null,
      tipo: "pelicula",
      trailer: "https://www.youtube.com/watch?v=Ki4haFrqSrw",
      director: "Frank Darabont",
      sinopsis: "Un guardia de prisión conoce a un enorme y misterioso prisionero que posee una capacidad extraordinaria para sanar a los demás.",
      idioma: "Inglés"
    },

    {
      anio: 2020,
      capitulos: null,
      duracion: 107,
      genero: ["Animación", "Aventura", "Comedia"],
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_WGglmsSQ0C2gmTU4iRmBOgUicXJxJnEyW-yVv9x1rL1y5sBtN1tOlA&s=10",
      nombre: "Soul",
      reputacion: 8.2,
      temporadas: null,
      tipo: "pelicula",
      trailer: "https://www.youtube.com/watch?v=xOsLIiBStEs",
      director: "Pete Docter",
      sinopsis: "Un músico de jazz tiene un accidente justo cuando está a punto de cumplir su sueño y comienza un viaje extraordinario para descubrir qué hace que la vida tenga sentido.",
      idioma: "Inglés"
    },

    {
      anio: 2015,
      capitulos: null,
      duracion: 118,
      genero: ["Acción", "Aventura", "Ciencia ficción"],
      imagen: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
      nombre: "Mad Max: Fury Road",
      reputacion: 8.1,
      temporadas: null,
      tipo: "pelicula",
      trailer: "https://www.youtube.com/watch?v=hEJnMQG9ev8",
      director: "George Miller",
      sinopsis: "En un mundo postapocalíptico dominado por la violencia, Max y Furiosa se unen para escapar de un tirano y buscar un lugar seguro.",
      idioma: "Inglés"
    },

    {
      anio: 2016,
      capitulos: null,
      duracion: 116,
      genero: ["Ciencia ficción", "Drama", "Misterio"],
      imagen: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",
      nombre: "Arrival",
      reputacion: 8.0,
      temporadas: null,
      tipo: "pelicula",
      trailer: "https://www.youtube.com/watch?v=tFMo3UJ4B4g",
      director: "Denis Villeneuve",
      sinopsis: "Una lingüista es reclutada para comunicarse con misteriosas criaturas extraterrestres que han llegado a la Tierra y descubrir sus verdaderas intenciones.",
      idioma: "Inglés"
    },

    //*****************************//
    //           SERIES            //
    //*****************************//
    {
      anio: 2008,
      capitulos: 62,
      duracion: null,
      genero: ["Drama", "Crimen", "Thriller"],
      imagen: "https://image.tmdb.org/t/p/w500/ztkUQFLlC4T2V8jY.jpg",
      nombre: "Breaking Bad",
      reputacion: 9.5,
      temporadas: 5,
      tipo: "serie",
      trailer: "https://www.youtube.com/watch?v=HhesaQXLuRY",
      director: "Vince Gilligan",
      sinopsis: "Un profesor de química diagnosticado con cáncer comienza a fabricar metanfetamina para asegurar el futuro económico de su familia, entrando progresivamente en el mundo criminal.",
      idioma: "Inglés"
    },

    {
      anio: 2011,
      capitulos: 73,
      duracion: null,
      genero: ["Drama", "Fantasía", "Acción"],
      imagen: "https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1.jpg",
      nombre: "Game of Thrones",
      reputacion: 9.2,
      temporadas: 8,
      tipo: "serie",
      trailer: "https://www.youtube.com/watch?v=KPLWWIOCOOQ",
      director: "David Benioff y D. B. Weiss",
      sinopsis: "Varias familias nobles luchan por controlar el Trono de Hierro mientras amenazas sobrenaturales comienzan a surgir más allá de las fronteras del reino.",
      idioma: "Inglés"
    },

    {
      anio: 2016,
      capitulos: 34,
      duracion: null,
      genero: ["Ciencia ficción", "Drama", "Misterio"],
      imagen: "https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTWGrLjDUXHyZZwVT2_kjTXOq8nF8IBgEL5Gp3i97xghSCY3z5nsAKDRMm5qmQ9KNUFFnbWufml7YIz9hVHDoBxpqsrKS_S-VS_5.jpg?r=94b",
      nombre: "Stranger Things",
      reputacion: 8.6,
      temporadas: 4,
      tipo: "serie",
      trailer: "https://www.youtube.com/watch?v=b9EkMc79ZSU",
      director: "Matt Duffer y Ross Duffer",
      sinopsis: "Un grupo de amigos descubre secretos sobrenaturales y experimentos gubernamentales después de la misteriosa desaparición de uno de ellos.",
      idioma: "Inglés"
    },

    {
      anio: 2019,
      capitulos: 25,
      duracion: null,
      genero: ["Drama", "Crimen", "Acción"],
      imagen: "https://image.tmdb.org/t/p/w500/5c5l.jpg",
      nombre: "The Boys",
      reputacion: 8.7,
      temporadas: 4,
      tipo: "serie",
      trailer: "https://www.youtube.com/watch?v=M1bhOaLV4FU",
      director: "Eric Kripke",
      sinopsis: "Un grupo de personas comunes se enfrenta a superhéroes corruptos que utilizan sus poderes para beneficio personal y político.",
      idioma: "Inglés"
    },

    {
      anio: 2013,
      capitulos: 63,
      duracion: null,
      genero: ["Drama", "Crimen", "Thriller"],
      imagen: "https://image.tmdb.org/t/p/w500/3Lz.jpg",
      nombre: "Peaky Blinders",
      reputacion: 8.8,
      temporadas: 6,
      tipo: "serie",
      trailer: "https://www.youtube.com/watch?v=oVzVdvGIC7U",
      director: "Steven Knight",
      sinopsis: "La familia Shelby dirige una poderosa organización criminal en Birmingham después de la Primera Guerra Mundial mientras intenta ampliar su influencia.",
      idioma: "Inglés"
    },

    {
      anio: 2019,
      capitulos: 16,
      duracion: null,
      genero: ["Drama", "Comedia", "Romance"],
      imagen: "https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABbxIrCRTnYRVIOiOiSA0oe6o2k0TJR9Dgn7_Kr-zAy2_vBpg24tMXFFeTcAwoxzlUCXj25FsTI2NgU8CF1djxK2YHNdC4Z9mi059.jpg?r=fe2.jpg",
      nombre: "Sex Education",
      reputacion: 8.2,
      temporadas: 4,
      tipo: "serie",
      trailer: "https://www.youtube.com/watch?v=GpI3FZQqM5Q",
      director: "Laurie Nunn",
      sinopsis: "Un adolescente comienza a ofrecer consejos sobre sexualidad a sus compañeros en el instituto, a pesar de su propia inexperiencia.",
      idioma: "Inglés"
    },

    {
      anio: 2016,
      capitulos: 34,
      duracion: null,
      genero: ["Drama", "Crimen", "Biografía"],
      imagen: "https://images.cdn1.buscalibre.com/fit-in/360x360/b2/fb/b2fb1833de712e1cd90e218c679054f6.jpg",
      nombre: "Narcos",
      reputacion: 8.8,
      temporadas: 3,
      tipo: "serie",
      trailer: "https://www.youtube.com/watch?v=U7elNhHwgBU",
      director: "Chris Brancato, Carlo Bernard y Doug Miro",
      sinopsis: "La serie relata el ascenso y caída de importantes narcotraficantes y la lucha de las autoridades contra los grandes carteles de la droga.",
      idioma: "Inglés"
    },

    {
      anio: 2020,
      capitulos: 20,
      duracion: null,
      genero: ["Drama", "Romance", "Comedia"],
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0RMI_5mt7E-L2Bdzf_5IURjDtzxldSunuXCNmwHTGsX4Xy5Zhe4JXhwM&s",
      nombre: "Bridgerton",
      reputacion: 7.8,
      temporadas: 3,
      tipo: "serie",
      trailer: "https://www.youtube.com/watch?v=gpv7ayf_tyE",
      director: "Chris Van Dusen",
      sinopsis: "La familia Bridgerton navega entre el amor, los secretos y las estrictas normas sociales de la alta sociedad londinense.",
      idioma: "Inglés"
    },

    {
      anio: 2017,
      capitulos: 46,
      duracion: null,
      genero: ["Drama", "Thriller", "Misterio"],
      imagen: "https://image.tmdb.org/t/p/w500/9X.jpg",
      nombre: "Dark",
      reputacion: 8.7,
      temporadas: 3,
      tipo: "serie",
      trailer: "https://www.youtube.com/watch?v=rrwycJ08PSA",
      director: "Baran bo Odar",
      sinopsis: "La desaparición de un niño revela secretos familiares y una misteriosa conexión entre distintas épocas de un pequeño pueblo alemán.",
      idioma: "Alemán"
    },

    {
      anio: 2022,
      capitulos: 18,
      duracion: null,
      genero: ["Ciencia ficción", "Drama", "Acción"],
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMAy_jcenAvm3dre9HjcKAZP5RcxiNqLzybqsJoI_ilw&s=10",
      nombre: "The Last of Us",
      reputacion: 8.8,
      temporadas: 2,
      tipo: "serie",
      trailer: "https://www.youtube.com/watch?v=uLtkt8BonwM",
      director: "Craig Mazin y Neil Druckmann",
      sinopsis: "Tras una pandemia que ha devastado la civilización, un hombre debe escoltar a una joven a través de un Estados Unidos peligroso y devastado.",
      idioma: "Inglés"
    },

    {
      anio: 2016,
      capitulos: 50,
      duracion: null,
      genero: ["Drama", "Ciencia ficción", "Thriller"],
      imagen: "https://image.tmdb.org/t/p/w500/11X.jpg",
      nombre: "Westworld",
      reputacion: 8.2,
      temporadas: 4,
      tipo: "serie",
      trailer: "https://www.youtube.com/watch?v=IuS5huqOND4",
      director: "Jonathan Nolan y Lisa Joy",
      sinopsis: "En un parque temático habitado por androides, los visitantes pueden vivir cualquier fantasía mientras los robots comienzan a cuestionar su propia existencia.",
      idioma: "Inglés"
    },

    {
      anio: 2017,
      capitulos: 40,
      duracion: null,
      genero: ["Drama", "Crimen", "Thriller"],
      imagen: "https://image.tmdb.org/t/p/w500/12X.jpg",
      nombre: "Ozark",
      reputacion: 8.5,
      temporadas: 4,
      tipo: "serie",
      trailer: "https://www.youtube.com/watch?v=5hAXVqrljbs",
      director: "Bill Dubuque y Mark Williams",
      sinopsis: "Un asesor financiero se traslada con su familia a los Ozarks y comienza a lavar dinero para un poderoso cartel de drogas.",
      idioma: "Inglés"
    },

    {
      anio: 2015,
      capitulos: 46,
      duracion: null,
      genero: ["Drama", "Crimen", "Thriller"],
      imagen: "https://image.tmdb.org/t/p/w500/13X.jpg",
      nombre: "Better Call Saul",
      reputacion: 9.0,
      temporadas: 6,
      tipo: "serie",
      trailer: "https://www.youtube.com/watch?v=HN4oydykJFc",
      director: "Vince Gilligan y Peter Gould",
      sinopsis: "Jimmy McGill intenta convertirse en un abogado respetable, pero sus decisiones lo llevan gradualmente a transformarse en el abogado criminal Saul Goodman.",
      idioma: "Inglés"
    },

    {
      anio: 2015,
      capitulos: 40,
      duracion: null,
      genero: ["Drama", "Ciencia ficción", "Thriller"],
      imagen: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11682476_b_v8_aa.jpg",
      nombre: "Mr. Robot",
      reputacion: 8.5,
      temporadas: 4,
      tipo: "serie",
      trailer: "https://www.youtube.com/watch?v=xIBiJ_SzJTA",
      director: "Sam Esmail",
      sinopsis: "Un joven experto en ciberseguridad y hacker es reclutado por un grupo clandestino que planea atacar el sistema financiero mundial.",
      idioma: "Inglés"
    },

    {
      anio: 2019,
      capitulos: 10,
      duracion: null,
      genero: ["Drama", "Historia", "Thriller"],
      imagen: "https://image.tmdb.org/t/p/w500/15X.jpg",
      nombre: "Chernobyl",
      reputacion: 9.3,
      temporadas: 1,
      tipo: "serie",
      trailer: "https://www.youtube.com/watch?v=s9APLXM9Ei8",
      director: "Johan Renck",
      sinopsis: "La miniserie reconstruye el desastre nuclear de Chernóbil y las consecuencias que tuvo para los trabajadores, los ciudadanos y las autoridades soviéticas.",
      idioma: "Inglés"
    },

    {
      anio: 2015,
      capitulos: 10,
      duracion: null,
      genero: ["Drama", "Crimen", "Thriller"],
      imagen: "https://image.tmdb.org/t/p/w500/16X.jpg",
      nombre: "Fargo",
      reputacion: 8.8,
      temporadas: 5,
      tipo: "serie",
      trailer: "https://www.youtube.com/watch?v=dzj1hJ8x6Yk",
      director: "Noah Hawley",
      sinopsis: "Una serie de historias criminales ambientadas en el frío Medio Oeste estadounidense, donde decisiones aparentemente pequeñas desencadenan consecuencias inesperadas.",
      idioma: "Inglés"
    },

    {
      anio: 2016,
      capitulos: 56,
      duracion: null,
      genero: ["Drama", "Crimen", "Acción"],
      imagen: "https://image.tmdb.org/t/p/w500/17X.jpg",
      nombre: "The Punisher",
      reputacion: 8.4,
      temporadas: 2,
      tipo: "serie",
      trailer: "https://www.youtube.com/watch?v=lIY6zFL95hE",
      director: "Steve Lightfoot",
      sinopsis: "Frank Castle busca vengarse de quienes asesinaron a su familia mientras se enfrenta a organizaciones criminales y conspiraciones militares.",
      idioma: "Inglés"
    },

    {
      anio: 2019,
      capitulos: 32,
      duracion: null,
      genero: ["Drama", "Comedia", "Crimen"],
      imagen: "https://image.tmdb.org/t/p/w500/18X.jpg",
      nombre: "The Umbrella Academy",
      reputacion: 7.9,
      temporadas: 4,
      tipo: "serie",
      trailer: "https://www.youtube.com/watch?v=0DAmWHxeoKw",
      director: "Steve Blackman",
      sinopsis: "Un grupo de hermanos adoptivos con poderes extraordinarios se reúne tras la muerte de su padre y descubre que debe impedir un apocalipsis.",
      idioma: "Inglés"
    },

    {
      anio: 2021,
      capitulos: 18,
      duracion: null,
      genero: ["Drama", "Acción", "Aventura"],
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReP8hHGZY0pN3TW-sIsb2OPDevMlSi_yMqC0VJEM2fLBOMSQDf6eXAzUM&s=10",
      nombre: "Arcane",
      reputacion: 9.0,
      temporadas: 2,
      tipo: "serie",
      trailer: "https://www.youtube.com/watch?v=fXmAurh012ms",
      director: "Christian Linke y Alex Yee",
      sinopsis: "Dos hermanas terminan enfrentadas en medio del conflicto entre la rica ciudad de Piltover y la peligrosa ciudad subterránea de Zaun.",
      idioma: "Inglés"
    },

    {
      anio: 2022,
      capitulos: 16,
      duracion: null,
      genero: ["Drama", "Misterio", "Thriller"],
      imagen: "https://www.instagram.com/p/DVo7Hn9Daur/",
      nombre: "Severance",
      reputacion: 8.7,
      temporadas: 2,
      tipo: "serie",
      trailer: "https://www.youtube.com/watch?v=xEQP4VVuyrY",
      director: "Dan Erickson",
      sinopsis: "Un grupo de empleados se somete a un procedimiento que separa sus recuerdos laborales de sus recuerdos personales, pero comienzan a cuestionar el verdadero propósito de la empresa.",
      idioma: "Inglés"
    }

];
export default contenido;