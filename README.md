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

## Author

<table style="width:100%">
  <tr>
    <td>
        <div align="center">
            <a href="./docs/img/photo.png" target="_blank" rel="author">
                <img src="https://avatars.githubusercontent.com/u/61360270?v=4" style="border-radius: 10%; min-width: 100px;" alt="Emmanuel Azócar's Photo" width="200px">
            </a>
            <h2>
                <a href="https://github.com/e-azocar" target="_blank" rel="author">
                    Emmanuel Azócar
                </a>
            </h2>
        </div>
    </td>
    <td>
        <div align="center">
            <a href="mailto:azocarmel@gmail.com" target="_blank" rel="author">
                <img src="https://img.icons8.com/color/48/000000/message-squared.png" style="border-radius: 10%" alt="My GitHub" height="45px">
                <h3>
                    <a href="mailto:azocarmel@gmail.com">
                      Email me to azocarmel@gmail.com
                    </a>
                </h3>
            </a>
            <a href="https://www.linkedin.com/in/e-azocar/" target="_blank" rel="author">
                <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="My Linkedin" height="45px">
                <h3>
                    Connect to my Linkedin
                </h3>
            </a>
            <a href="https://github.com/e-azocar" target="_blank" rel="author">
                <img src="https://img.icons8.com/glyph-neue/64/null/github.png" 
			style="border-radius: 10%" alt="My GitHub" height="45px"
		>
                <h3>
                    GitHub
                </h3>
            </a>
        </div>
    </td>
  </tr>
</table>
