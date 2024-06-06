# React Table-and-Card

It's a simple example of showing datas in a table. you can insert, mutate and delete datas.


## Installation

#### 1. modules

```bash
npm install
```

#### 2. json-server

json-server is an easy way to have database without having it; in fact we create an API to communicate with a local json file.
Before start using it we need to install it globally.

```bash
sudo npm install -g json-server
```

##  Start

#### app

```bash
npm start
```

#### json-server

By this command we will watch our json file in /data/db.json on http://localhost:3001/invoices .
Don't be worry if you have deleted datas and want them back, I already have created a copy of them located on /data/db-copy.json .

```bash
json-server -w data/db.json -p 3001
```