import axios from "axios";

// Generalised POST URL

const PostData = async (URL, item) => {
  try {
    let res = await axios.post(URL, item, { withCredentials: true });
    // console.log("Hello");
    if (res.data) {
      return res.data;
    } else {
      return "Session Expired";
    }
  } catch {
    return "Connection to Server Failed";
  }
};

export default PostData;
