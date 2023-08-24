import axios from "axios";

//Just send the GET URL and will work for all direct GET Mapping URL Parameters needs to be passed in  the URL
const FetchJobTypes = async (URL) => {
  const res = await axios.get(URL);
  return res;
};

export default FetchJobTypes;
