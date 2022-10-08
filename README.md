[Lelong](https://lelong.azurewebsites.net/) is a show room for real estate.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
![image](https://user-images.githubusercontent.com/94891192/192363184-853d12e8-9d31-4132-b67a-f9ceceefbc48.png)

## Github Action
Github action is set for auto-deployment to Azure App Services when codes are committed.

For NextJS project,
change "start" script in package.json to `node_modules/next/dist/bin/next start -p $PORT`

on Azure App Services configuration page, add environment variable `ROOT_DIRECTORY: /home/site/wwwroot`

