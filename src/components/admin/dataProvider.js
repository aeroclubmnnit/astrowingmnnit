import simpleRestProvider from "ra-data-simple-rest";
import { fetchUtils } from "react-admin";
import { REACT_APP_SERVER } from "../../grobalVars";

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: "application/json" });
    }
    options.headers.set("Access-Control-Expose-Headers", "Content-Range");
    const token = localStorage.getItem("jwtToken");
    options.headers.set("Authorization", `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

export const dataProvider = simpleRestProvider(`${REACT_APP_SERVER}/api`, httpClient)