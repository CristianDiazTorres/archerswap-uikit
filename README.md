# archerswap UIkit

<!-- [![Version](https://img.shields.io/npm/v/@archerswap-libs/uikit)](https://www.npmjs.com/package/@archerswap-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@archerswap-libs/uikit)](https://www.npmjs.com/package/@archerswap-libs/uikit) -->

archerswap UIkit is a set of React components and hooks used to build pages on archerswap's apps. It also contains a theme file for dark and light mode.

## Install

`npm i archerswap-uikit`


## Deployment Guide

### 1. Edit ONG token address 
first go to `src/widgets/Menu/components/CakePrice.tsx`, find `PriceLink` tag and change the ONG token address to current mainnet address.

```
https://info.archerswap.com/token/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82 
--> https://info.archerswap.com/token/[ONG-address]
```
then go to `package.json` and increase version.

then run 
```
npm run build
npm login
npm publish
```


## Setup

### Theme

Before using archerswap UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from 'archerswap-uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from 'archerswap-uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://archerswap.github.io/pancake-uikit/)

## How to Customize UIkit

First clone this repo to local and then start editing the components, theme, etc.

When is finished the Customization of the UIkit build it using:

`npm run build`

Commit everything to the git repo and if you are using a diferent repo just change it in package.json.

If you have a commit error due to husky you can try:

`git commit -am 'commit' --no-verify`

That should solve the problem, then push to remote repo.

After this you need to [publish the npm packege](https://zellwk.com/blog/publish-to-npm/)

Be aware of the versions, If you make an update change the version in package.json so when you publish this's not gonna throw you an error.

Go to the npm package you create an you are ready to use it.
