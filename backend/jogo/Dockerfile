# Especifica a imagem base
FROM openjdk:17-jdk-slim

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos necessários para dentro do container
COPY . .

# Expõe a porta 8080 para o host
EXPOSE 8080

# Define o comando que será executado quando o container for iniciado
CMD ["java", "-jar", "./target/jogo-0.0.1-SNAPSHOT.jar"]