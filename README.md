# Readme

## About

[TimelineJS](https://timeline.knightlab.com/) is an useful tool. To make a timeline, you can use Google spreadsheet or JSON to store your data. I choose JSON, because I don't like to rely on a 3rd party service, and it seems to me that JSON gives me more freedom.

But editing JSON file is painful, especially when you have many slides in a timeline. Purpose of this tool is to read data from a sqlite db which has the same data structure as the [Google spreadsheet](https://docs.google.com/spreadsheets/u/1/d/1xuY4upIooEeszZ_lCmeNx24eSFWe0rHe9ZdqH2xqVNk/pubhtml), convert it into JSON.

## Usage

### Step 1

Clone the repo

### Step 2

Open the folder, install it to global

```bash
npm install -g .
```

### Step 3

You can use free tool like [DB Browser for SQLite](https://sqlitebrowser.org/) to open `timeline.sqlite`, input timeline data.

### Step 4

After you finish data input, run command below to generate JSON

```bash
timelinejs-s2j <SqliteFilepath> <JSONFilepath>
```

eg.

```bash
timelinejs-s2j timeline.sqlite timeline.json
```

Voila! You'll get TimelineJS ready JSON data in `timeline.json`

## Known Issues

- Not handling all the "time" properties in "date" object
