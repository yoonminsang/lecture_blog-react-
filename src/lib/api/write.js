import axios from 'axios';

export const write = async (title, content) => {
  try {
    const res = await axios({
      method: 'post',
      url: 'posts/write',
      data: { title, content },
    });
    return res.data.id;
  } catch (e) {
    if (e.response.data.length === 0) throw new Error(e);
    throw new Error(e.response.data);
  }
};
