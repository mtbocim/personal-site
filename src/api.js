import axios from "axios";

// axios.defaults.withCredentials = true;

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class siteApi {

    static token = localStorage.getItem("token");

    static async counter() {
        let res = await axios({
            method: "post",
            url: `${BASE_URL}/counter`,
            withCredentials: true
        })
        return res;
    }

    static async login(formData) {
        try {
            const res = await axios({
                method: "post",
                url: `${BASE_URL}/auth/token`,
                data: formData
            })
            console.log("what is login res", res);
            return res.data;
        } catch (err) {
            console.error("API Error:", err.response);
            if (err.response.data?.error === undefined) {
                err.response.data = { error: { message: "Unable to connect to server" } }

            }
            console.log("updated", err.response)
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async getAllBlogs() {
        const res = await axios({
            method: "get",
            url: `${BASE_URL}/blog`,
        })
        console.log("what is login res", res);
        return res;
    }
}

export default siteApi;

// const headers = { Authorization: `Bearer ${JoblyApi.token}` };