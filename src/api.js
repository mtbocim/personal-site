import axios from "axios";

// axios.defaults.withCredentials = true;

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class siteApi {
    static async counter() {
        let res = await axios({
            method:"post",
            url:`${BASE_URL}/counter`,
            withCredentials:true
        })
        return res;
    }
}

export default siteApi;