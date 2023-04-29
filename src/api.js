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

    static async login(username, password){
        try{
        const res = await axios({
            method:"post",
            url:`${BASE_URL}/auth/token`,
            data: {username,password}
        })
        console.log("what is login res", res);
        return res;
        }catch(e){
            console.log(e)
        }
    }

    static async getAllBlogs(){
        const res = await axios({
            method:"get",
            url:`${BASE_URL}/blog`,
        })
        console.log("what is login res", res);
        return res;
    }
}

export default siteApi;