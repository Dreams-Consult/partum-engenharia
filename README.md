# Partum Engenharia - Website

Site institucional da Partum Engenharia, empresa especializada em projetos e construção de parques aquáticos e resorts.

## 🚀 Tecnologias

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool e dev server ultra-rápido
- **React Multi Carousel** - Biblioteca para carrosséis responsivos

## 📁 Estrutura do Projeto

```
src/
├── assets/           # Imagens, logos e recursos estáticos
├── components/       # Componentes React reutilizáveis
│   ├── AboutUs/     # Seção "Quem somos"
│   ├── Card/        # Componente de card genérico
│   ├── Contact/     # Seção de contato
│   ├── Home/        # Banner principal com carrossel
│   ├── Projects/    # Seção de projetos
│   ├── Testimonials/# Seção de depoimentos
│   └── TopBar/      # Barra de navegação fixa
├── constants/       # Constantes e configurações globais
├── App.tsx          # Componente principal
├── main.tsx         # Ponto de entrada da aplicação
├── index.css        # Estilos globais
└── App.css          # Estilos do componente App
```

## 🎨 Funcionalidades

- ✅ Design totalmente responsivo
- ✅ Carrossel automático na página inicial
- ✅ Navegação suave entre seções
- ✅ Botão flutuante de WhatsApp
- ✅ Barra de navegação fixa
- ✅ Animações e transições suaves

## 🛠️ Comandos

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Deploy para AWS S3
npm run deploy

# Lint
npm run lint
```

## 📦 Deploy

O projeto está configurado para deploy automático no AWS S3:

```bash
npm run deploy
```

## 🌐 Seções do Site

1. **Home** - Banner com carrossel apresentando a empresa
2. **Quem somos** - Informações sobre a empresa
3. **Depoimentos** - Por que escolher a Partum
4. **Projetos** - Galeria de projetos realizados
5. **Contato** - Formulário e informações de contato

## 📱 Contato

- **WhatsApp**: +55 17 99654-2563
- **Localização**: São José do Rio Preto - SP

## 🔧 Configurações

As configurações globais estão centralizadas em `src/constants/index.ts`:

- URLs de contato
- Configurações do carrossel
- Breakpoints responsivos

---

Desenvolvido por **Dreams Consult**
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
