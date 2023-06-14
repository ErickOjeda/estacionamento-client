import { Movimentacao } from "@/model/movimentacao";
import axios, { AxiosInstance } from "axios";

export class MovimentacaoClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/movimentacao',
            headers: { 'Content-type': 'application/json' }
        });
    }

    public async findById(id: number): Promise<Movimentacao> {
        try {
            return (await this.axiosClient.get<Movimentacao>(`/${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async listAll(): Promise<Movimentacao[]> {
        try {
            return (await this.axiosClient.get<Movimentacao[]>(`/listar`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(movimentacao: Movimentacao): Promise<void> {
        try {
            return (await this.axiosClient.post('/', movimentacao)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async editar(movimentacao: Movimentacao): Promise<Movimentacao> {
        try {
            return (await this.axiosClient.put(`/${movimentacao.id}`, movimentacao)).data
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