import axios from "axios";

const KEY = "";

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
const params = {
  part: "snippet",
  maxResults: 40,
  key: KEY,
  regionCode: "JP",
  type: "video",
};
export const fetchPopular = async () => {
  return await youtube.get("/videos", {
    params: {
      ...params,
      chart: "mostPopular",
    },
  });
};
export const fetchDetail = async (id) => {
  return await youtube.get("/videos", {
    params: {
      ...params,
      id,
    },
  });
};
