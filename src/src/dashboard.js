// Tela de Dashboard do FiberManager
const Dashboard = {
  // Dados do dashboard
  stats: {
    bobinasEstoque: 156,
    metrosDisponiveis: 12450,
    consumoDia: 320,
    consumoMes: 8750,
    estoqueBaixo: 8
  },

  // Últimas movimentações
  movimentacoes: [
    { id: 1, bobina: 'FIB-001', metros: 150, cliente: 'Cliente A', data: '09/07/2026 14:30' },
    { id: 2, bobina: 'FIB-005', metros: 80, cliente: 'Cliente B', data: '09/07/2026 11:15' },
    { id: 3, bobina: 'FIB-003', metros: 200, cliente: 'Cliente C', data: '08/07/2026 16:45' },
    { id: 4, bobina: 'FIB-008', metros: 45, cliente: 'Cliente D', data: '08/07/2026 09:20' },
    { id: 5, bobina: 'FIB-012', metros: 120, cliente: 'Cliente E', data: '07/07/2026 13:50' }
  ],

  // Renderizar o dashboard
  render() {
    return `
      <div class="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-6 transition-colors duration-300">
        
        <!-- Cabeçalho -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
              📊 Dashboard
            </h1>
            <p class="text-gray-500 dark:text-gray-400 text-sm">
              Bem-vindo(a) ao FiberManager! Aqui está o resumo do seu estoque.
            </p>
          </div>
          <div class="flex items-center gap-3 mt-3 md:mt-0">
            <button onclick="toggleDarkModeGlobal()" class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <span class="text-xl">🌙</span>
            </button>
            <button onclick="Dashboard.logout()" class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors text-sm">
              Sair
            </button>
          </div>
        </div>

        <!-- Cards de Estatísticas -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <!-- Card 1: Bobinas em Estoque -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 md:p-6 transition-colors">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">📦 Bobinas em Estoque</p>
                <p class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">${this.stats.bobinasEstoque}</p>
              </div>
              <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-2xl">
                📦
              </div>
            </div>
          </div>

          <!-- Card 2: Metros Disponíveis -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 md:p-6 transition-colors">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">📏 Metros Disponíveis</p>
                <p class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">${this.stats.metrosDisponiveis}m</p>
              </div>
              <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-2xl">
                📏
              </div>
            </div>
          </div>

          <!-- Card 3: Consumo do Dia -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 md:p-6 transition-colors">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">📉 Consumo do Dia</p>
                <p class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">${this.stats.consumoDia}m</p>
              </div>
              <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center text-2xl">
                📉
              </div>
            </div>
          </div>

          <!-- Card 4: Estoque Baixo -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 md:p-6 transition-colors">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">⚠️ Estoque Baixo</p>
                <p class="text-2xl md:text-3xl font-bold text-red-500">${this.stats.estoqueBaixo}</p>
              </div>
              <div class="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center text-2xl">
                ⚠️
              </div>
            </div>
          </div>
        </div>

        <!-- Gráfico e Lista -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Gráfico -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 md:p-6 transition-colors">
            <h2 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              📊 Consumo Mensal
            </h2>
            <div class="h-48 flex items-end gap-2">
              <div class="flex-1 flex flex-col items-center">
                <div class="w-full bg-blue-500 rounded-t" style="height: 60%"></div>
                <span class="text-xs text-gray-600 dark:text-gray-400 mt-1">Jan</span>
              </div>
              <div class="flex-1 flex flex-col items-center">
                <div class="w-full bg-blue-500 rounded-t" style="height: 75%"></div>
                <span class="text-xs text-gray-600 dark:text-gray-400 mt-1">Fev</span>
              </div>
              <div class="flex-1 flex flex-col items-center">
                <div class="w-full bg-blue-500 rounded-t" style="height: 45%"></div>
                <span class="text-xs text-gray-600 dark:text-gray-400 mt-1">Mar</span>
              </div>
              <div class="flex-1 flex flex-col items-center">
                <div class="w-full bg-blue-500 rounded-t" style="height: 80%"></div>
                <span class="text-xs text-gray-600 dark:text-gray-400 mt-1">Abr</span>
              </div>
              <div class="flex-1 flex flex-col items-center">
                <div class="w-full bg-blue-500 rounded-t" style="height: 55%"></div>
                <span class="text-xs text-gray-600 dark:text-gray-400 mt-1">Mai</span>
              </div>
              <div class="flex-1 flex flex-col items-center">
                <div class="w-full bg-blue-500 rounded-t" style="height: 90%"></div>
                <span class="text-xs text-gray-600 dark:text-gray-400 mt-1">Jun</span>
              </div>
              <div class="flex-1 flex flex-col items-center">
                <div class="w-full bg-indigo-500 rounded-t" style="height: 70%"></div>
                <span class="text-xs text-gray-600 dark:text-gray-400 mt-1">Jul</span>
              </div>
            </div>
          </div>

          <!-- Últimas Movimentações -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 md:p-6 transition-colors">
            <h2 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              📋 Últimas Movimentações
            </h2>
            <div class="space-y-3">
              ${this.movimentacoes.map(mov => `
                <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <p class="font-medium text-gray-800 dark:text-white text-sm">
                      ${mov.bobina}
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      ${mov.cliente} • ${mov.data}
                    </p>
                  </div>
                  <div class="text-right">
                    <p class="font-bold text-blue-600 dark:text-blue-400 text-sm">
                      ${mov.metros}m
                    </p>
                    <span class="text-xs text-gray-500 dark:text-gray-400">utilizados</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Rodapé -->
        <div class="mt-8 text-center text-xs text-gray-500 dark:text-gray-400">
          © 2026 FiberManager - Todos os direitos reservados
        </div>
      </div>
    `
  },

  // Função para sair
  logout() {
    if (confirm('Deseja realmente sair?')) {
      document.getElementById('root').innerHTML = app.render()
    }
  }
}

// Função para mostrar o Dashboard (GLOBAL)
window.showDashboard = function() {
  document.getElementById('root').innerHTML = Dashboard.render()
}

// Função global para alternar modo escuro
window.toggleDarkModeGlobal = function() {
  document.documentElement.classList.toggle('dark')
}
