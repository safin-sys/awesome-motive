import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async () => {
        const response = await fetch('http://localhost:2903/')
        const posts = await response.json()
        return posts
    }
)

export const createPost = createAsyncThunk(
    'posts/createPost',
    async (post) => {
        const response = await fetch('http://localhost:2903/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        const newPost = await response.json()
        return newPost
    }
)

export const createComment = createAsyncThunk(
    'posts/createComment',
    async ({ id, comment }) => {
        const response = await fetch(`http://localhost:2903/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
        const newComment = await response.json()
        return newComment
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    extraReducers: {
        [getPosts.fulfilled]: (state, action) => {
            return action.payload
        },
        [createPost.fulfilled]: (state, action) => {
            state.unshift(action.payload)
        },
        [createComment.fulfilled]: (state, action) => {
            const post = state.find(post => post.id === action.payload.id)
            const index = state.indexOf(post)
            state[index] = action.payload
        }
    }
})

export default postsSlice.reducer