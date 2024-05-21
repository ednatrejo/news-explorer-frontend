import { APIkey, parseCurrentDate, parsePreviousWeek } from "./constants";
import { processServerResponse } from "./utils";

export const getSearchResults = (keyword) => {
  return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=[7fdec80eb9d54c62ac61fd7872420ebd]
    `).then(processServerResponse);
};
