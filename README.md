# Readme

## About

[TimelineJS](https://timeline.knightlab.com/) is an useful tool. To make a timeline, you can use Google spreadsheet or JSON to store your data. i I choose JSON, because I don't like to rely on a 3rd party service, and it seems to me that JSON gives me more freedom.

But editing JSON file is painful, especially when you have many slides in a timeline. Purpose of this tool is to read data from a sqlite db which has the same data structure as the [Google spreadsheet](https://docs.google.com/spreadsheets/u/1/d/1xuY4upIooEeszZ_lCmeNx24eSFWe0rHe9ZdqH2xqVNk/pubhtml), convert it into JSON.

## Usage

### Step 1

Currently I don't know how to make a npm package, so just simply download below files

- `package.json`
- `index.js`
- `timeline.sqlite`

### Step 2

Install the dependencies

```bash
npm install
```

### Step 3

You can use free tool like [DB Browser for SQLite](https://sqlitebrowser.org/) to open `timeline.sqlite`, input timeline data.

### Step 4

After you finish data input

```bash
node index.js
```

Voila! You'll get TimelineJS ready JSON data in `timeline_out.json`

## Known Issues

- Not handling all the "time" properties in "date" object