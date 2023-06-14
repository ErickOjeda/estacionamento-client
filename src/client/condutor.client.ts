import { Veiculo } from "@/model/veiculo";
import axios, { AxiosInstance } from "axios";

export class VeiculoClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/veiculo',
            headers: { 'Content-type': 'application/json' }
        });
    }

    public async findById(id: number): Promise<Veiculo> {
        try {
            return (await this.axiosClient.get<Veiculo>(`/${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async listAll(): Promise<Veiculo[]> {
        try {
            return (await this.axiosClient.get<Veiculo[]>(`/listar`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(veiculo: Veiculo): Promise<void> {
        try {
            return (await this.axiosClient.post('/', veiculo)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async editar(veiculo: Veiculo): Promise<Veiculo> {
        try {
            return (await this.axiosClient.put(`/${veiculo.id}`, veiculo)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async deletar(id: number): Promise<string> {
        try {
            return (await this.axiosClient.delete<string>(`/${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

} 