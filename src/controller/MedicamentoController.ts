import Medicamento from "../model/Medicamento.js";
import type { Request, Response } from "express";

class MedicamentoController extends Medicamento {

    static async todos(req: Request, res: Response): Promise<Response> {
        try {
            const listaMedicamentos: Array<Medicamento> | null = await Medicamento.listarMedicamento();
            return res.status(200).json(listaMedicamentos);
        } catch (error) {
            console.error(`Erro ao consultar modelo. ${error}`);
            return res.status(500).json({ mensagem: "Não foi possivel acessar a lista de medicamentos." });
        }

    }
}

export default MedicamentoController;