import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        game_name: "Game Name",
        game_genre: "Game Genre",
        game_rating: "Game Rating",
        game_image: "Game Image",
        
    },
    reducers: {
        chooseGameName: (state, action) => { state.game_name = action.payload},
        chooseGameGenre: (state, action) => { state.game_genre = action.payload},
        chooseGameRating: (state, action) => { state.game_rating = action.payload},
        chooseGameImage: (state, action) => { state.game_image = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseGameName, chooseGameGenre, chooseGameRating, chooseGameImage} = rootSlice.actions