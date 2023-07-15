import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'

export const getPost = createAsyncThunk('/getpost' , async ({id}) =>{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) =>
        res.json()
    )
})

export const getAllPost = createAsyncThunk('/getallpost' , async () =>{
    return fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) =>
        res.json()
    )
})

export const delPost = createAsyncThunk('/delpost' , async ({id}) =>{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{ method:"DELETE" })
    
    .then((res) =>
        res.json()
    )
})

const postSlice = createSlice({
    name:"post",
    initialState:{
        post:[],
        loading:false,
        error:null,
        edit:false,
    },
    extraReducers:{
        // get All Post
        [getAllPost.pending]: (state) =>{
            state.loading = true
        },
        [getAllPost.fulfilled]: (state,action) =>{
            state.loading = false;
            state.post=action.payload;
        },
        [getAllPost.rejected]: (state,action) =>{
            state.loading = false;
            state.post=action.payload;
        },
        // Get 1 Search Post
        [getPost.pending]: (state) =>{
            state.loading = true
        },
        [getPost.fulfilled]: (state,action) =>{
            state.loading = false;
            state.post=[action.payload];
        },
        [getPost.rejected]: (state,action) =>{
            state.loading = false;
            state.post=[action.payload];
        },
        // Delte Post
        [delPost.pending]: (state) =>{
            state.loading = true
        },
        [delPost.fulfilled]: (state,action) =>{
            state.loading = false;
            state.post=action.payload;
        },
        [delPost.rejected]: (state,action) =>{
            state.loading = false;
            state.post=action.payload;
        },
    }
})

export default postSlice.reducer;