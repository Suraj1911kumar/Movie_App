import axios from "axios";

const base_url = "https://api.themoviedb.org/3";

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDJiNTcwMmIzNzQ3ZjEwNTQxYjQ0ZTgzMGRhZGE5OCIsInN1YiI6IjY1YzMyMWYzOTYwMzMxMDE4NGI4Y2M3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EFGe4plNHjkzm8rnwV5GRN0i-g2-15k3Bxr6yQmxPIE";

const headers = {
    AUTHORIZATION: "bearer " + TMDB_TOKEN,
}

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(base_url + url, {
            headers,
            params
        })
        return data;
    } catch (err) {
        console.log(err)
    }
}