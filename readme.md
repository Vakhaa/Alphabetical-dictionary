# <mark  style="background-color: #FFFF00">Alphabetical Dictionary</mark>: Explore Words, Meanings, and More

---

## :eyes: Overview

The Alphabetical Dictionary is a comprehensive reference tool organized alphabetically, providing definitions, meanings, and explanations of words and terms.

This project consists of two applications: the client and the server.

The client is a Single Page Application (SPA) built with the React library and TypeScript. It utilizes technologies and libraries such as SWR[^4] for data fetching, Chakra UI for UI components, and Docker for containerization.

The server application is a REST API implemented with Express and TypeScript. It integrates with various technologies and APIs including OpenAI for word suggestions, Unsplash for images, dictionaryapi.dev for word definitions, Swagger for API documentation, MailResend for email notifications, Axios for HTTP requests, and Docker for containerization.

This project was created utilizing such technologies:

- :white_check_mark: [Express.js](https://expressjs.com)
- :white_check_mark: [React](https://react.dev/)
- :white_check_mark: [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- :white_check_mark: [Chakra UI](https://axios-http.com/docs/intro)
- :white_check_mark: [Axios](https://axios-http.com/docs/intro)
- :white_check_mark: [SWR](https://swr.vercel.app)
- :white_check_mark: [Docker](https://docs.docker.com)
- :white_check_mark: [Postman](https://google.com "Do it!")
- :white_check_mark: [Swagger](https://swagger.io/solutions/api-documentation/)
- :white_check_mark: [OpenAI](https://openai.com/product)
- :white_check_mark: [Unsplash](https://unsplash.com/developers)
- :white_check_mark: [Free Dictionary Api](https://dictionaryapi.dev)
- :white_check_mark: [MailerSend](https://www.mailersend.com)
- ~~Unit Test~~
- **...**

---

## :clipboard: Table of Contents

- [:eyes: Overview](#eyes-overview)
- [:floppy_disk: Quick Start](#floppy_disk-quick-start)
- [:art: Screenshots](#art-screenshots)
- [:warning: Let's talk](#warning-lets-talk)
  - [Why use Open AI?](#why-use-open-ai)
  - [Rest API](#rest-api)
  - [Single page application](#single-page-application)
  - [Typescript](#typescript)
  - [Middleware](#middleware)
  - [Swagger](#swagger)
  - [Docker](#docker)
  - [Free Dictionary API](#free-dictionary-api)
  - [Unsplash](#unsplash)
  - [Deploy](#deploy)
- [:rocket: Features](#rocket-features)
- [:card_file_box: Last 5 Update](#card_file_box-last-5-update)
- [:link: Footnotes](#link-footnotes)

---

## :floppy_disk: Quick Start

1. Take the project from the Github repository and install the dependencies:

```powershell
cd client
```

```npm
npm i
```

- Same steps for the server

```powershell
cd server
```

```npm
npm i
```

2. For the development client, run this command from the directory <u>clinet</u>:

```npm
npm start
```

- For the development server, run this command from the directory <u>server</u>:

```npm
npm run dev
```

3. For production in the both directories, run this command:

```npm
npm run build
```

- or build and run docker container for the <u>client</u>:

```docker
docker build -t <image-name> .
docker run -dp 3000:80 <image-name>
```

- or build and run docker container for the <u>server</u>:

```docker
docker build -t <image-name> .
docker run -dp 5000:5000 <image-name>
```

4. Open `http://localhost:3000` in your browser to see the client
or open `http://localhost:5000/api-docs` in your browser to see the server endpoints

5. Client: [alphabetical-dictionary.onrender.com](https://alphabetical-dictionary.onrender.com)
Server: [alphabetical-dictionary-server.onrender.com](https://alphabetical-dictionary-server.onrender.com)
Endpoints: [alphabetical-dictionary-server.onrender.com/api-docs](https://alphabetical-dictionary-server.onrender.com/api-docs)

---

## :art: Screenshots

1. You can choose any letter and get a random word:
![random-word-without-context](https://github.com/Vakhaa/Alphabetical-dictionary/assets/61117394/708731db-6b5a-468b-bfdd-146c6264e599)

2. In the filters, you can set the difficulty level and context for random words:
![filters_context_food](https://github.com/Vakhaa/Alphabetical-dictionary/assets/61117394/6edf22eb-4756-48e7-b075-1b7020bbe937)

3. Random word for the letter "k" with the context "food":
![random-word-without-context](https://github.com/Vakhaa/Alphabetical-dictionary/assets/61117394/afe029b5-2091-4785-af3e-472f70932845)

4. You could search for a specific word:
![search-word](https://github.com/Vakhaa/Alphabetical-dictionary/assets/61117394/72b807eb-404e-49a5-b8b8-47b91cde25c0)

5. You can get the contacts, suggestion form form and q&a by clicking on the footer:
![contacts](https://github.com/Vakhaa/Alphabetical-dictionary/assets/61117394/0f6b9eae-3382-4dd8-bebe-791acb5064cf)

6. Suggestion form:
![suggestion](https://github.com/Vakhaa/NodeJs_Sandbox_For_Fun/assets/61117394/7d160fea-6bea-4690-945d-0025de6fb2a5)

7. Q&a:
![q_a](https://github.com/Vakhaa/Alphabetical-dictionary/assets/61117394/2429f956-01ca-479e-aed6-52873cd3a923)

8. Responsive design for the phone:
![mob_letter](https://github.com/Vakhaa/Alphabetical-dictionary/assets/61117394/f6ae66ce-7ce3-4d0b-9dba-8bb4e75e30d1)

9. Another example:
![mob_word_banana](https://github.com/Vakhaa/Alphabetical-dictionary/assets/61117394/af033f3a-92c0-44e3-a3ff-67763fa665b5)

10. Open Api:  
![openapi](https://github.com/Vakhaa/Alphabetical-dictionary/assets/61117394/01fb53f6-857f-44cc-b864-f4eba03f8a16)

11. Open Api Request:  
![openapi_endpoint](https://github.com/Vakhaa/Alphabetical-dictionary/assets/61117394/a9b26cf1-07cf-4a2a-8a06-6519285310da)

12. Open Api Schema:  
![openapi_schema](https://github.com/Vakhaa/Alphabetical-dictionary/assets/61117394/18eb0a8a-1ebe-453b-8fe3-42b64408c3a3)

13. Postman:  
![postman](https://github.com/Vakhaa/NodeJs_Sandbox_For_Fun/assets/61117394/090515d5-dd57-4cca-b740-6471390a36f3)

---

## :warning: Let's talk

### Why use Open AI?

*OpenAI* is used to generate random words based on complexity, context, and the first letter. By utilizing OpenAI, the application can provide users with diverse and contextually relevant word suggestions, enhancing the overall user experience and engagement.

### Rest API

REST API is a good choice for web server for several reasons:

- Simplicity: RESTful architecture is based on simple HTTP methods and resource URIs, making it easy to understand and implement.

- Scalability: RESTful APIs are stateless, which means that they can handle a large number of requests simultaneously, making them highly scalable.

- Flexibility: RESTful APIs are platform-agnostic, which means that they can be accessed from any device or programming language that supports HTTP.

- Maintainability: RESTful APIs are self-documenting, which means that developers can easily understand how to use them and make changes as needed.

- Standardization: RESTful APIs follow a standardized set of principles, making them easy to integrate with other systems and applications.

The REST API serves is implemented using *Express.js* and *TypeScript*, providing a robust and scalable infrastructure for handling data retrieval and manipulation. The REST API enables seamless interaction with external APIs, such as the *Free Dictionary API* and *Unsplash*, to retrieve word definitions, images, and other relevant information.

### Single page application

The single-page application (SPA) architecture is utilized to create a fluid and interactive user experience. Developed with *React* and *TypeScript*, the SPA dynamically updates content without the need for full page reloads, resulting in faster performance and smoother navigation. React's component-based architecture allows for modular development and easy maintenance, while TypeScript enhances code quality and developer productivity by providing static type-checking and advanced tooling support.

### Typescript [^1] [^2] [^3]

Do I need to describe it?

1. Type Safety: TypeScript provides static type checking, which helps catch errors at compile time rather than runtime. This can be particularly useful when working with large codebases or when collaborating with other developers.

2. Improved Code Quality: By using TypeScript, you can take advantage of features like classes, interfaces, and modules, which can help you write cleaner, more organized code.

3. Better IDE Support: Many modern code editors like VS Code have excellent TypeScript support, including autocomplete and error highlighting. This can help you write code more quickly and with fewer mistakes.

4. Easier Refactoring: Because TypeScript provides type information, refactoring code can be much easier than in plain JavaScript. You can use tools like automatic renaming and find all references to quickly make changes throughout your codebase.

Overall, TypeScript's features make it a valuable tool for building scalable, maintainable, and robust web applications, enhancing the development experience and ensuring the reliability and maintainability of the Alphabetical Dictionary application.

### Middleware

Middleware is a piece of software that sits between two or more systems or applications to help them communicate with each other. In the context of web development, middleware is a software layer that sits between the web server and the application, and intercepts and processes incoming HTTP requests before they are passed to the application.

Middleware, such as *express-rate-limit*[^5] and *morgan*, is used to enhance the functionality and security of the server-side application. express-rate-limit limits API requests to Unsplash to prevent exceeding the free tier limit, while Morgan is used for logging endpoints to monitor server activity.

### Swagger

Swagger is an essential tool for documenting and testing RESTful APIs. By integrating Swagger with the Alphabetical Dictionary application, developers can define API specifications in a standardized format, generate interactive API documentation, and facilitate API testing. Swagger documentation provides clear and comprehensive information about API endpoints, request parameters, and response payloads, making it easier for developers to understand and interact with the API. Additionally, Swagger's interactive UI allows users to explore and test API endpoints directly from the documentation, improving the developer experience and promoting API adoption.

Overall, Swagger enhances the development process by ensuring consistency, clarity, and usability in API communication.

### Docker [^7] [^8] [^6]

Docker is a containerization platform that allows you to package your application and all its dependencies into a single container, making it easier to deploy and run your application on different environments. Docker can also help you ensure that your application runs consistently across different environments, reducing the risk of compatibility issues. Using Docker also makes it easier to scale your application horizontally by adding more containers, allowing you to handle more traffic.

### Free Dictionary API

The Free Dictionary API is utilized to retrieve comprehensive information about specific words, including definitions, synonyms, and usage examples. It enriches the application's database of words and enhances the user experience by providing accurate and detailed word data.

### Unsplash

 Unsplash is a popular image repository that provides high-quality, royalty-free images. In the Alphabetical Dictionary application, Unsplash is utilized to represent words with visually engaging images. By associating words with relevant images, the application enhances user engagement and immersion, making the learning experience more enjoyable and memorable. Unsplash's vast collection of images ensures that the application can provide diverse and captivating visuals for a wide range of words and concepts.

### Deploy

Deploying the applications was an important step towards making it available to users. One option for hosting the Docker container was render.com, a cloud platform that offered a simple and flexible way to deploy and manage applications. With Render, the containerized application could be deployed easily with just a few clicks, and they offered a range of features such as automatic SSL certificates, load balancing, and automatic scaling.

*But the apps rises too slow because of the free tier.*

Overall, the deployment of the applications was done easily with the help of cloud platforms like render.com, allowing to focus on building the application and serving users.

---

## :rocket: Features

*I am not sure about this.*

1. *Save a words at the local store*
1. *Create some kind of the words history*
1. *...*

## :card_file_box: Last 5 Update

*Check commit history.*

1. *Init Project*
1. *Docker*
1. *Deploy*
1. *Delete Project*

## :link: Footnotes

[^1]: [*Migrating a React project to Typescript. Free course.*](https://www.totaltypescript.com/tutorials/react-with-typescript)

[^2]: [*Migrating a React project to Typescript. Article.*](https://www.totaltypescript.com/add-typescript-to-existing-react-project)

[^3]: [*Converting Sentry’s Entire Frontend to TypeScript. Article.*](https://blog.sentry.io/slow-and-steady-converting-sentrys-entire-frontend-to-typescript)

[^4]: [*SWR. Mutation & Revalidation.*](https://swr.vercel.app/docs/mutation)

[^5]: [*express jsdoc swagger*](https://brikev.github.io/express-jsdoc-swagger-docs/#/README)

[^6]: [*Dockerizing for production a TypeScript React App with NGINX using WSL2 Alpine Linux on Windows 10*](https://blog.devgenius.io/part-two-dockerizing-for-production-a-typescript-react-app-with-nginx-with-wsl2-alpine-linux-on-85660be3956)

[^7]: [*How to Dockerize a ReactJS App ?*](https://www.geeksforgeeks.org/how-to-dockerize-a-reactjs-app/?ref=lbp)

[^8]: [*How to Dockerize an ExpressJS App ?*](https://www.geeksforgeeks.org/how-to-dockerize-an-expressjs-app/?ref=lbp)