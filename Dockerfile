FROM node:20-alpine 
WORKDIR /app  
COPY package.json ./  
RUN npm i
COPY . . 
EXPOSE 8086 
CMD [ "npm", "start" ] 
