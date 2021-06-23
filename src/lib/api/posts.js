import axios from 'axios';

export const postList = async (pageId) => {
  try {
    const res = await axios.get(`posts/page/${pageId}`);
    return res.data.postList;
  } catch (e) {
    if (e.response.data.length === 0) throw new Error(e);
    throw new Error(e.response.data);
  }
};
