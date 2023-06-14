import { Configuracao } from "@/model/configuracao";
import axios, { AxiosInstance } from "axios";

export class ConfiguracaoClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/config',
            headers: { 'Content-type': 'application/json' }
        });
    }

    public async findById(id: number): Promise<Configuracao> {
        try {
            return (await this.axiosClient.get<Configuracao>(`/${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async listAll(): Promise<Configuracao[]> {
        try {
            return (await this.axiosClient.get<Configuracao[]>(`/listar`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(config: Configuracao): Promise<void> {
        try {
            return (await this.axiosClient.post('/', config)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async editar(config: Configuracao): Promise<Configuracao> {
        try {
            return (await this.axiosClient.put(`/${config.id}`, config)).data
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