import { PlusCircle, Trophy, Users } from 'lucide-react';

export default function Dashboard() {
  // Mock de dados (serão substituídos pela conexão com o back-end em C# via Axios)
  const boloes = [
    { id: 1, nome: "Copa do Mundo 2026", participantes: 12, status: "Aberto" },
    { id: 2, nome: "Champions League", participantes: 8, status: "Em andamento" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Meus Bolões</h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          <PlusCircle size={20} /> Criar Novo Bolão
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {boloes.map((bolao) => (
          <div key={bolao.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
            <div className="flex justify-between items-start mb-4">
              <Trophy className="text-yellow-500" size={24} />
              <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-700 rounded-full">
                {bolao.status}
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2">{bolao.nome}</h3>
            <div className="flex items-center text-gray-600 text-sm">
              <Users size={16} className="mr-2" />
              {bolao.participantes} participantes
            </div>
            <button className="w-full mt-4 bg-gray-50 text-blue-600 py-2 rounded-md font-medium hover:bg-blue-50">
              Ver Detalhes
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
