import * as genresAPI from "./fakeGenreService";

const movies=[
    {
    _id: "abcd1",
    title: "Terminator",
    genre: {
        _id: "abcd",
        name: "Action",
    },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:28:04:28.809Z"
},
{
    _id: "abcd2",
    title: "Die Hard",
    genre: {
        _id: "abcd",
        name: "Action",
    },
    numberInStock: 6,
    dailyRentalRate: 2.5
},
{
    _id: "abcd",
    title: "Terminator",
    genre: {
        _id: "abcd",
        name: "Action",
    },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:28:04:28.809Z"
},
{
    _id: "abcd3",
    title: "Die Hard",
    genre: {
        _id: "abcd",
        name: "Action",
    },
    numberInStock: 6,
    dailyRentalRate: 2.5
},
{
    _id: "abcd4",
    title: "Terminator",
    genre: {
        _id: "abcd",
        name: "Action",
    },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:28:04:28.809Z"
},
{
    _id: "abcd5",
    title: "Die Hard",
    genre: {
        _id: "abcd",
        name: "Action",
    },
    numberInStock: 6,
    dailyRentalRate: 2.5
}
];

export function getMovies(){
    return movies;
}

export function getMovie(id){
    return movies.find(m=>m._id===id);
}