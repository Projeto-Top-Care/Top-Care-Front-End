import { axiosAPI } from "../api";

export async function buscarFiliais() {
    const response = await axiosAPI.get("/filiais")
    return response.data;
}

export async function getFilial(id: string) {
    const response = await axiosAPI.get(`/filiais/${id}`);
    return response.data;
}  

export async function createFilial(filiais: any) {
    const response = await axiosAPI.post('/filiais', filiais);
    return response.data;
}

export async function updateFilial(id: string, filiais: any) {
    const response = await axiosAPI.patch(`/filiais/${id}`, filiais);
    return response.data;
}

export async function deleteFilial(id: string) {
    const response = await axiosAPI.delete(`/filiais/${id}`);
    return response.data;
}