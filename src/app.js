// Tela de Login do FiberManager
const App = {
  data: {
    email: '',
    senha: '',
    lembrar: false
  },

  // Função de login
  handleLogin(event) {
    event.preventDefault()
    
    if (this.data.email && this.data.senha) {
      alert(`Bem-vindo ao FiberManager! 🚀\n\nEmail: ${this.data.email}`)
      // Aqui depois vamos redirecionar para o Dashboard
    } else {
      alert('Por favor, preencha todos os campos!')
    }
  },

  // Alternar modo escuro
  toggleDarkMode() {
    document.documentElement.classList.toggle('dark')
  },

  // Renderizar a tela
  render() {
    return `
      <div class="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 transition-colors duration-300">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md p-8 transition-colors duration-300">
          
          <!-- Botão Modo Escuro -->
          <div class="flex justify-end mb-4">
            <button onclick="app.toggleDarkMode()" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <span class="text-xl">🌙</span>
            </button>
          </div>

          <!-- Logo -->
          <div class="text-center mb-8">
            <div class="text-6xl mb-3">🔷</div>
            <h1 class="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              FiberManager
            </h1>
            <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm">
              Gerenciamento de Bobinas de Fibra Óptica
            </p>
          </div>

          <!-- Formulário de Login -->
          <form onsubmit="app.handleLogin(event)" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                📧 E-mail
              </label>
              <input
                type="email"
                onchange="app.data.email = this.value"
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition-colors"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                🔒 Senha
              </label>
              <input
                type="password"
                onchange="app.data.senha = this.value"
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition-colors"
                placeholder="••••••••"
                required
              />
            </div>

            <div class="flex items-center justify-between">
              <label class="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <input 
                  type="checkbox" 
                  onchange="app.data.lembrar = this.checked"
                  class="mr-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                Lembrar-me
              </label>
              <a href="#" class="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                Esqueci a senha?
              </a>
            </div>

            <button
              type="submit"
              class="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
            >
              Entrar no Sistema
            </button>
          </form>

          <!-- Versão -->
          <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
            <p class="text-xs text-gray-500 dark:text-gray-400">
              © 2026 FiberManager - Versão 1.0.0
            </p>
          </div>
        </div>
      </div>
    `
  }
}

// Iniciar o app
document.getElementById('root').innerHTML = app.render()
