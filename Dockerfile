FROM node:19.8.1-alpine
# ENV NODE_ENV=production
ENV MONGO_URI=mongodb+srv://sourav:LmidkVcph4eiKtna@clustertaskmanagerapi.u9b4imf.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority&appName=Clustertaskmanagerapi
WORKDIR /app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# COPY ["package.json", "package-lock.json*", "./"]
COPY . /app

# RUN npm install --production --silent && mv node_modules ../
RUN npm install
EXPOSE 3000
# CMD ["npm", "dev"]
CMD node app.js
