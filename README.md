This project was developed by Daniel Salazar, Michael Borland, and Mark Scarna for Conjure SWF.

# Getting Started

Download and Install [Knex](https://github.com/knex/documentation) using your prefered package manager. 

[Nodejs](https://nodejs.org/en) is our personal choice with npm and yarn
```
npm install --global yarn
```

Make sure your [Docker](https://www.docker.com/products/docker-desktop/) is installed and up-to-date. 

Download the official docker image for [PostgreSQL](https://hub.docker.com/_/postgres)

```
docker pull postgres
```
---

## Create `Thoth` database

- Create the directory for the persistent PostgreSQL data
    ```
    mkdir -p $HOME/docker/volumes/postgres
    ```
- Start the container
    ```
    docker run --name postgres -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=thoth -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres
    ```
- Verify Thoth database creation
    ```
    docker exec -it postgres /bin/bash

    psql -U postgres

    \list
    ``` 
    You should see thoth present in the list of databases.

## Populate Database

- Create tables in Thoth database 
    ```
    npx knex migrate:latest
    ```
- Seed data into tables
    ```
    npx knex seed:run
    ```

## Starting the Dev Server

- If using Yarn 
    ```
    yarn dev
    ```
- If using npm
    ```
    npm start dev
    ```

# Adding data to database

## Updating database
- After changing data you must run these 3 commands
```
npx knex migrate:rollback

npx knex migrate:latest

npx knex seed:run
```

## Changing or Adding Shops to the database
- Navigate to `./knex/seeds/02_shops.js`
- Add new Shop to end of array
> **Warning**  
> If you delete any existing shop data you will have to pull from repository to repopulate data.

### Example Shop data format
```
{
	name: 'ShopName',
	description: 'ShopDescription',
	location: 'ShopLocation',
	contact: 'ShopEmail',
	branch_id: 1,
	img: 'ShopImg'
}
```
NOTE: For branch_id ---> 1 = Air Force, 2 = Navy, 3 = Army, 4 = Space Force, 5 = Marines.
NOTE: For img ---> `ShopImg` needs to match name of png in the `./public/images` folder without the file extension (Case sensitive).

## Changing or Adding Projects to the database
- Navigate to `./knex/seeds/03_projects.js`
- Add new Project to end of array
> **Warning**  
> If you delete any existing project data you will have to pull from repository to repopulate data.

### Example Project data format
```
{
	shop_id: 1,
	project_name: 'ProjectName',
	tags: [
		'ProjectTags1',
        'ProjectTags2',
        'ProjectTags3'
		],
	lang: ['ProjectLanguages', 'ProjectLanguages2'],
	short_desc:
		"ProjectDescription",
	project_img: 'ProjectImg'
}
```
NOTE: For shop_id ---> The position in the shop array is the shop id.

Ex: Conjure is the first item in the array so shop_id = 1

NOTE: For img ---> `ProjectImg` needs to match name of png in the `./public/images` folder without the file extension (Case sensitive).