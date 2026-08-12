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
    trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
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
    trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
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
    trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco"
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
    trailer: "https://www.youtube.com/watch?v=bLvqoHBptjg"
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
    trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0"
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
    trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8"
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
    trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c"
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
    trailer: "https://www.youtube.com/watch?v=kVrqfYjkTdQ"
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
    trailer: "https://www.youtube.com/watch?v=zAGVQLHvwOY"
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
    trailer: "https://www.youtube.com/watch?v=HDWylEQSwFo"
  },

  {
    anio: 2014,
    capitulos: null,
    duracion: 130,
    genero: ["Acción", "Aventura", "Ciencia ficción"],
    imagen: "https://image.tmdb.org/t/p/w500/5JU9ytZJyR3zmClGmVm9q4xZ.jpg",
    nombre: "Guardians of the Galaxy",
    reputacion: 8.0,
    temporadas: null,
    tipo: "pelicula",
    trailer: "https://www.youtube.com/watch?v=d96cjJhvlMA"
  },

  {
    anio: 2001,
    capitulos: null,
    duracion: 178,
    genero: ["Aventura", "Fantasía", "Drama"],
    imagen: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkbln0.jpg",
    nombre: "The Lord of the Rings: The Fellowship of the Ring",
    reputacion: 8.9,
    temporadas: null,
    tipo: "pelicula",
    trailer: "https://www.youtube.com/watch?v=V75dMMIW2B4"
  },

  {
    anio: 2003,
    capitulos: null,
    duracion: 201,
    genero: ["Aventura", "Fantasía", "Acción"],
    imagen: "https://image.tmdb.org/t/p/w500/5iV5S3Q6GZ6Y.jpg",
    nombre: "The Lord of the Rings: The Return of the King",
    reputacion: 9.0,
    temporadas: null,
    tipo: "pelicula",
    trailer: "https://www.youtube.com/watch?v=r5X-hFf6Bwo"
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
    trailer: "https://www.youtube.com/watch?v=JcpWXaA2qeg"
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
    trailer: "https://www.youtube.com/watch?v=5PSNL1qE6VY"
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
    trailer: "https://www.youtube.com/watch?v=uYPbbksJxIg"
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
    trailer: "https://www.youtube.com/watch?v=g4Hbz2jLxvQ"
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
    trailer: "https://www.youtube.com/watch?v=Ki4haFrqSrw"
  },

  {
    anio: 2020,
    capitulos: null,
    duracion: 107,
    genero: ["Animación", "Aventura", "Comedia"],
    imagen: "https://image.tmdb.org/t/p/w500/4m1Au3YkjqsxF8iwQy0QxY.jpg",
    nombre: "Soul",
    reputacion: 8.2,
    temporadas: null,
    tipo: "pelicula",
    trailer: "https://www.youtube.com/watch?v=xOsLIiBStEs"
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
    trailer: "https://www.youtube.com/watch?v=hEJnMQG9ev8"
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
    trailer: "https://www.youtube.com/watch?v=tFMo3UJ4B4g"
  },

  // =========================
  // SERIES
  // =========================

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
    trailer: "https://www.youtube.com/watch?v=HhesaQXLuRY"
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
    trailer: "https://www.youtube.com/watch?v=KPLWWIOCOOQ"
  },

  {
    anio: 2016,
    capitulos: 34,
    duracion: null,
    genero: ["Ciencia ficción", "Drama", "Misterio"],
    imagen: "https://image.tmdb.org/t/p/w500/x2LSRK2Cn.jpg",
    nombre: "Stranger Things",
    reputacion: 8.6,
    temporadas: 4,
    tipo: "serie",
    trailer: "https://www.youtube.com/watch?v=b9EkMc79ZSU"
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
    trailer: "https://www.youtube.com/watch?v=M1bhOaLV4FU"
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
    trailer: "https://www.youtube.com/watch?v=oVzVdvGIC7U"
  },

  {
    anio: 2019,
    capitulos: 16,
    duracion: null,
    genero: ["Drama", "Comedia", "Romance"],
    imagen: "https://image.tmdb.org/t/p/w500/6X.jpg",
    nombre: "Sex Education",
    reputacion: 8.2,
    temporadas: 4,
    tipo: "serie",
    trailer: "https://www.youtube.com/watch?v=GpI3FZQqM5Q"
  },

  {
    anio: 2016,
    capitulos: 34,
    duracion: null,
    genero: ["Drama", "Crimen", "Biografía"],
    imagen: "https://image.tmdb.org/t/p/w500/7W.jpg",
    nombre: "Narcos",
    reputacion: 8.8,
    temporadas: 3,
    tipo: "serie",
    trailer: "https://www.youtube.com/watch?v=U7elNhHwgBU"
  },

  {
    anio: 2020,
    capitulos: 20,
    duracion: null,
    genero: ["Drama", "Romance", "Comedia"],
    imagen: "https://image.tmdb.org/t/p/w500/8X.jpg",
    nombre: "Bridgerton",
    reputacion: 7.8,
    temporadas: 3,
    tipo: "serie",
    trailer: "https://www.youtube.com/watch?v=gpv7ayf_tyE"
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
    trailer: "https://www.youtube.com/watch?v=rrwycJ08PSA"
  },

  {
    anio: 2022,
    capitulos: 18,
    duracion: null,
    genero: ["Ciencia ficción", "Drama", "Acción"],
    imagen: "https://image.tmdb.org/t/p/w500/10X.jpg",
    nombre: "The Last of Us",
    reputacion: 8.8,
    temporadas: 2,
    tipo: "serie",
    trailer: "https://www.youtube.com/watch?v=uLtkt8BonwM"
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
    trailer: "https://www.youtube.com/watch?v=IuS5huqOND4"
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
    trailer: "https://www.youtube.com/watch?v=5hAXVqrljbs"
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
    trailer: "https://www.youtube.com/watch?v=HN4oydykJFc"
  },

  {
    anio: 2015,
    capitulos: 40,
    duracion: null,
    genero: ["Drama", "Ciencia ficción", "Thriller"],
    imagen: "https://image.tmdb.org/t/p/w500/14X.jpg",
    nombre: "Mr. Robot",
    reputacion: 8.5,
    temporadas: 4,
    tipo: "serie",
    trailer: "https://www.youtube.com/watch?v=xIBiJ_SzJTA"
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
    trailer: "https://www.youtube.com/watch?v=s9APLXM9Ei8"
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
    trailer: "https://www.youtube.com/watch?v=dzj1hJ8x6Yk"
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
    trailer: "https://www.youtube.com/watch?v=lIY6zFL95hE"
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
    trailer: "https://www.youtube.com/watch?v=0DAmWHxeoKw"
  },

  {
    anio: 2021,
    capitulos: 18,
    duracion: null,
    genero: ["Drama", "Acción", "Aventura"],
    imagen: "https://image.tmdb.org/t/p/w500/19X.jpg",
    nombre: "Arcane",
    reputacion: 9.0,
    temporadas: 2,
    tipo: "serie",
    trailer: "https://www.youtube.com/watch?v=fXmAurh012ms"
  },

  {
    anio: 2022,
    capitulos: 16,
    duracion: null,
    genero: ["Drama", "Misterio", "Thriller"],
    imagen: "https://image.tmdb.org/t/p/w500/20X.jpg",
    nombre: "Severance",
    reputacion: 8.7,
    temporadas: 2,
    tipo: "serie",
    trailer: "https://www.youtube.com/watch?v=xEQP4VVuyrY"
  }
];
export default contenido;