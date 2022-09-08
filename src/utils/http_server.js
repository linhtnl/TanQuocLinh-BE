import axios from "axios";
const createConfig = (payload = '') => {
    let getConfig = {
        headers: {
            "Content-type": "Application/json",
            Authorization: "Bearer " + getAccessToken(),
        },
        cancelToken: cancelAxios.token,
        data: payload
    };
    return getConfig;
};

const multipartConfig = () => {
    let getConfig = {
        headers: {
            "Content-type": "multipart/form-data",
            Authorization: "Bearer " + getAccessToken(),
        },
    };
    return getConfig;
};

export const request = {
    get: (url) => axios.get(url, createConfig()),
    post: (url, data) => axios.post(url, data, createConfig()),
    put: (url, data) => axios.put(url, data, createConfig()),
    patch: (url, data) => axios.patch(url, data, createConfig()),
    delete: (url) => axios.delete(url, createConfig()),
    post_multipart: (url, data) =>
        axios.post(url, data, multipartConfig()),
    patch_multipart: (url, data) =>
        axios.patch(url, data, multipartConfig()),
};
