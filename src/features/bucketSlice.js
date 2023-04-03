import { createSlice, nanoid, } from '@reduxjs/toolkit'

const initialState = {
    buckets: [
        {
            id: nanoid(),
            name: "Environment",
            cards: [
                {
                    id: nanoid(),
                    title: "Mr.Beast",
                    link: "https://youtube.com/embed/cV2gBU6hKfY"
                }
            ]
        },
        {
            id: nanoid(),
            name: "Lectures",
            cards: [
                {
                    id: nanoid(),
                    title: "Apna College",
                    link: "https://youtube.com/embed/z9bZufPHFLU"
                }
            ]
        },
        {
            id: nanoid(),
            name: "Education",
            cards: [
                {
                    id: nanoid(),
                    title: "Dhruv Rathee",
                    link: "https://youtube.com/embed/hVvAkPbJwnw"
                },
                {
                    id: nanoid(),
                    title: "Bootcamp",
                    link: "https://youtube.com/embed/GQoQoJmmAuM"
                },
                {
                    id: nanoid(),
                    title: "Not Working",
                    link: "link3"
                },

            ]
        },
        {
            name: "Music",
            id: nanoid(),
            cards: [
                {
                    id: nanoid(),
                    title: "Blank Space",
                    link: "https://www.youtube.com/embed/e-ORhEE9VVg"
                },
                {
                    id: nanoid(),
                    title: "Night Changes",
                    link: "https://www.youtube.com/embed/syFZfO_wfMQ"
                },
            ]
        }

    ],
}

export const bucketSlice = createSlice({
    name: "buckets",
    initialState,
    reducers: {
        editBucketName: {
            reducer(state, action) {
                const { editedName, id } = action.payload
                const foundBucket = state.buckets.find(bucket => bucket.id === id)
                if (foundBucket) {
                    foundBucket.name = editedName
                }
            }
        },
        deleteBucket: {
            reducer(state, action) {
                const { index } = action.payload
                state.buckets.splice(index, 1);
            }
        },
        addBucket: {
            reducer(state, action) {
                state.buckets.unshift({
                    name: "new bucket",
                    id: nanoid(),
                    cards: [],
                    initialEdit: true,
                })
            }
        },
        addCard: {
            reducer(state, action) {
                const { bucketIndex, title, link } = action.payload;
                const newCard = {
                    id: nanoid(),
                    title,
                    link,
                }

                const foundBucket = state.buckets.find((bucket, index) => index === bucketIndex)
                foundBucket.cards.unshift(newCard)
            }
        },
        updateCard: {
            reducer(state, action) {
                const { title, link, bucketIndex, cardIndex } = action.payload
                const foundBucket = state.buckets.find((bucket, index) => index === bucketIndex)
                const foundCard = foundBucket.cards[cardIndex]
                foundCard.title = title;
                foundCard.link = link;
            }
        },
        deleteCard: {
            reducer(state, action) {
                const { bucketIndex, cardIndex } = action.payload
                console.log(action.payload, "deelele");
                state.buckets[bucketIndex].cards.splice(cardIndex, 1);
            }
        },
        toggleInitialEditValue: {
            reducer(state, action) {
                const { index } = action.payload
                const val = state.buckets[index].initialEdit
                if (val !== undefined) {
                    state.buckets[index].initialEdit = false;
                }
            }
        }
    }
})

export const allBuckets = (state) => state.buckets.buckets
export const { editBucketName, addCard, updateCard, deleteBucket, addBucket, deleteCard, toggleInitialEditValue } = bucketSlice.actions

export default bucketSlice.reducer
