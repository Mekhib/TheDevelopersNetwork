import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  mainsearch: function(query) {
    return axios.get("/mainsearch", { params: { q: query } });
  }
};
