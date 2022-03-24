# VirtusLab Internship Task

Using free API to generate pokemons data from https://pokeapi.co/  
Created by **Samuel Jędrzejewski**  
*samijedrzejewski@gmail.com*

## Task description:

Using ‘Pokémon API’ (https://pokeapi.co) create an interactive catalogue of Pokémon. Data
should be displayed on the screen in the form of a list, you should be able to load more data
as you wish and interact with existing elements.

## Core technology stack:

- React

## UI Preview:

- List with initial 20 Pokémons, containing basic information like: ‘name’, ‘type’ and ‘sprite’.
- Button to load more pokémons onto a screen.
- After clicking the pokémon from the list, you should see on screen extra details about its: ‘weight’ and ‘height’.
- UI doesn’t have to be perfect, just nice and minimalistic.

## Good to have:

- UX enriching elements: loaders, transitions etc.
- Dark and light theme.

## Implementation

In this section I will present my solution to the given assesments. However, it is not perfect in any way. I have just started learning _React_ but I know my implementation is not fitting it 100%.

![Title prewiev](https://github.com/238SAMIxD/virtuslab-internship/blob/main/img/title.png)

### 1. List with initial 20 Pokémons, containing basic information like: ‘name’, ‘type’ and‘sprite’.

![Data prewiev](https://github.com/238SAMIxD/virtuslab-internship/blob/main/img/data.png)

![Smaller screen data prewiev](https://github.com/238SAMIxD/virtuslab-internship/blob/main/img/data2.png)

![Mobile screen data prewiev](https://github.com/238SAMIxD/virtuslab-internship/blob/main/img/data3.png)

I made responsive view of the ferch results depending on device size. It is easy to handle by using grid columns. I also made seperate styles for mobile devises.

First of all I created a _HTML_ placeholder for data and styled it with _CSS_. Secondly I put it into _React_ component to generate view by mapped data arrays.

```html
return (
    <div className="pokemons">{items.map( item => (
        <div className="container-pokemon" key={item.id}>
            <div className="container-pokemon__background"></div>
            <div className="container-pokemon__sprite" style={{backgroundImage: `url(${item.sprites.front_default})`}} onClick={show} data-url={item.url}></div>
            <div className="container-pokemon__data">
                <span className="container-pokemon__data-name">{item.name}</span>{item.types.map( type => <span className="container-pokemon__data-type" style={{backgroundImage: `url("https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/${type.type.name}.svg")`}} data-type={type.type.name} key={type.type.name}></span> )}
            </div>
        </div>
    ))}
    </div>
);
```

### 2. Button to load more pokémons onto a screen.

![Button prewiev](https://github.com/238SAMIxD/virtuslab-internship/blob/main/img/button.png)

Simple styled button. Clicking it calls fetching data function and append it on the website.

```js
function Button() {
  return (
    <div className="container-button" onClick={more}>
      Load More
    </div>
  );
}
```

### 3. After clicking the pokémon from the list, you should see on screen extra details about its: ‘weight’ and ‘height’.

![Modal prewiev](https://github.com/238SAMIxD/virtuslab-internship/blob/main/img/modal.png)

Clicking pokémon sprite icon causes a modal to appear.

```js
function Modal() {
  return (
    <div className="modal" onClick={close}>
      <div className="container-pokemon">
        <div className="modal-close" onClick={close}>
          X
        </div>
        <div className="container-pokemon__background"></div>
        <div className="container-pokemon__sprite"></div>
        <div className="container-pokemon__data">
          <span className="container-pokemon__data-name"></span>
        </div>
        <div className="container-pokemon__details">
          <div className="container-pokemon__details-weight"></div>
          <div className="container-pokemon__details-height"></div>
        </div>
      </div>
    </div>
  );
}
```

### 4. UI doesn’t have to be perfect, just nice and minimalistic.

![UI prewiev](https://github.com/238SAMIxD/virtuslab-internship/blob/main/img/ui.png)

UI is as simple as it should and in the same time nice looking.

### 5. (Additional) UX enriching elements: loaders, transitions etc.

![Loading prewiev](https://github.com/238SAMIxD/virtuslab-internship/blob/main/img/loading.png)

There is loading animation during fetching data from API. Modal is also animated as it slides right from the top and goes away moving out.

```js
if (!isLoaded)
  return (
    <div className="container-loading">
      <div className="container-loading__loader"></div>
    </div>
  );
```

### 6. (Additional) Dark and light theme.

![Theme prewiev](https://github.com/238SAMIxD/virtuslab-internship/blob/main/img/theme.png)

Simple switch between light and dark mode with transition.

```js
function themeChange(e) {
  const root = document.querySelector("#root");

  e.target.style.backgroundImage = root.classList.contains("light")
    ? `url("${sun}")`
    : `url("${moon}")`;
  root.classList.contains("light")
    ? root.classList.remove("light")
    : root.classList.add("light");
}
```

## Hosting website application

As this is _React_ app, it can be easily hosted by _Node.js_.

### Installing

_NPM_ modules should be downloaded by using a command:

```bash
npm install
```

The following dependencies will be installed:

```json
"dependencies": {
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.4",
    "@testing-library/user-event": "^13.5.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.4"
}
```

### Running

To start the application there are several methods:

```bash
npm start
npm run start
react-scripts start
```

Browser will start and head to `http://localhost:3000/`.
