export interface Pedidos {
  id: number;
  codigo: string;
  dataCompra: string;
  produtos: string;
  clienteNome: string
  enderecoCep: string;
  total: number;
  status: string;
  metodoPagamento: string;
};