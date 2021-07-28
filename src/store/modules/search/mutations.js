export default {

    setSearchItems: (state, payload) => {

        const searchedItems = payload.searchItems;
        state.searchItems = searchedItems

    }

}