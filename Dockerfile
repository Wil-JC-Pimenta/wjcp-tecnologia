# Use uma imagem base com Node.js
FROM node:16

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código
COPY . .

# Compila o aplicativo para produção
RUN npm run build

# Instala o serve para servir o aplicativo
RUN npm install -g serve

# Expõe a porta que o aplicativo usará
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["serve", "-s", "build", "-l", "3000"]
