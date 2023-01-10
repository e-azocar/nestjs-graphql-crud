<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
  <a href="https://graphql.org/" target="blank"><img src="https://graphql.org/img/logo.svg" width="200" alt="GraphQL Logo" /></a>
</p>

## Description

GraphQL API to manage Developers, Projects and Roles using [Nest](https://github.com/nestjs/nest), [Typescript](https://www.typescriptlang.org/) and [Sqlite](https://www.sqlite.org/index.html) as database.

## Installation

```bash
$ yarn install
```

or

```bash
$ npm install
```

## Running the app

Example with [Yarn](https://yarnpkg.com/)

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test the app

Open [localhost:3000/graphql](http://localhost:3000/graphql) on your browser and test the API with GraphQL playground.

## Examples

- ### Roles

  - Create role

    ```graphql
    mutation {
      createRole(createRoleInput: { name: "Frontend" }) {
        id
      }
    }
    ```

  - Get all roles

    ```graphql
    query {
      roles {
        id
        name
      }
    }
    ```

  - Get role

    ```graphql
    query {
      role(id: 1) {
        name
      }
    }
    ```

- ### Developers

  - Create developer

    ```graphql
    mutation {
      createDeveloper(
        createDeveloperInput: {
          name: "John Doe"
          email: "johndoe@mail.com"
          rolesId: [1, 2, 3]
        }
      ) {
        id
        name
      }
    }
    ```

  - Update developer

    ```graphql
    mutation {
      updateDeveloper(
        updateDeveloperInput: {
          id: 1
          name: "Johnny Doe"
          email: "johndoe@mail.com"
          rolesId: [1, 2, 3]
        }
      ) {
        id
        name
      }
    }
    ```

  - Get all developers

    ```graphql
    query {
      developers {
        id
        name
        email
        roles {
          name
        }
        projects {
          name
        }
      }
    }
    ```

  - Get all developers (with filters)

    ```graphql
    query {
      developers(roleId: 1, projectId: 1) {
        id
        name
        email
        roles {
          name
        }
        projects {
          name
        }
      }
    }
    ```

  - Get developer

    ```graphql
    query {
      developer(id: 1) {
        name
        email
        roles {
          name
        }
        projects {
          name
        }
      }
    }
    ```

- ### Projects

  - Create project

    ```graphql
    mutation {
      createProject(
        createProjectInput: {
          name: "Chat Application"
          description: "Build Chat Application"
          status: OPEN
          rolesId: [1, 2, 3]
        }
      ) {
        id
        name
      }
    }
    ```

  - Update project

    ```graphql
    mutation {
      updateProject(
        updateProjectInput: {
          id: 1
          name: "Chat App"
          description: "Build Chat Application"
          status: IN_PROGRESS
          rolesId: [1, 2, 3, 4]
        }
      ) {
        id
        name
      }
    }
    ```

  - Add developer to project

    ```graphql
    mutation {
      addDeveloper(addDeveloperInput: { id: 1, developerId: 1 }) {
        name
        developers {
          name
        }
        roles {
          name
        }
      }
    }
    ```

  - Get all projects

    ```graphql
    query {
      projects {
        id
        name
        description
        roles {
          name
          id
        }
        developers {
          name
        }
      }
    }
    ```

  - Get all projects (with filters)

    ```graphql
    query {
      projects(roleId: 1, status: OPEN) {
        id
        name
        description
        roles {
          name
          id
        }
        developers {
          name
        }
      }
    }
    ```

  - Get project

    ```graphql
    query {
      project(id: 1) {
        id
        name
        description
        status
        roles {
          name
          id
        }
        developers {
          name
        }
      }
    }
    ```
