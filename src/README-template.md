# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop](/design/desktop.png)
![Mobile](/design/mobile.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SASS
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

#### SASS

Tried working with SASS this time. I learned about partial and mixins in SASS.

Partials in SASS are files that can be imported to other sass files. Usually you can use partial files when you want to write a css files full of variables.

\_variables.scss

```css
$c-p-red: hsl(1, 90%, 64%);
$c-p-blue: hsl(219, 85%, 26%);

$c-n-white: hsl(0, 0%, 100%);
```

Mixins are CSS functions that lets you take a param as an argument. It's purpose is to reuse lines of CSS such as the typical display:flex, justify-content:center, align-items:center. In this case, you will take a param when you want to change the flex-direction to either row or column.

\_\_mixin.scss

```css
@mixin flexCenter($direction) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
}
```

Usage of mixin function in Notification.scss

```css
@import "../sass_styles/variables";
@import "../sass_styles/mixin";
.notification__header {
  @include flexCenter(row);
  justify-content: space-between;
}
```

Additionally, I learned more baout the file structure of using CSS and JSX. In my file structure, I ensure each page or component has an accompying scss file. For partial scss files, they go in their own folder.

![File Struct](/design/file_struct.png)

As I was planning out on how to use an array of JS objects to represent the notifications, I noticed that I should create a function that generates a template JSX. I created a utility function: createNotification.jsx.
Through this function, I input the Type (a JS enum object) and the notification object to create the template.

createNotification.jsx - short snippet of code

```js
export function createNotification(type, notification) {
  switch (type) {
    case Type.REACTION:
      return (
        <p className={`notification__info__text`}>
          <span className="notification__info__text__user">
            {notification.name}{" "}
          </span>
          reacted to your recent post
          <span className="notification__info__text__event">
            {" "}
            {notification.event}{" "}
          </span>
          {!notification.seen && <span className="unseen-notification"></span>}
        </p>
      );

    case Type.COMMENT:
      return (
        <p className="notification__info__text">
          <span className="notification__info__text__user">
            {notification.name}{" "}
          </span>
          commented on your
          <span className="notification__info__text__event club">
            {" "}
            {notification.event}{" "}
          </span>

          {!notification.seen && <span className="unseen-notification"></span>}
        </p>
      );
  }
```

Type.js - created an enum

```js
export const Type = Object.freeze({
  REACTION: "reaction",
  COMMENT: "comment",
  FOLLOW: "follow",
  MEMBER_JOIN: "member_join",
  DM: "DM",
  MEMBER_LEFT: "member_left",
});
```

### Continued development

Currently, the design does not match one to one but I am satisfied as I was learning the following:

- File structure of React with CSS
- Working with arrays in JS
- Module importing and exporting
- SASS with React

### Useful resources

- [Sass in 20 minutes](https://www.youtube.com/watch?v=Zz6eOVaaelI) - Quick tutorial on using Sass with some examples
- [Shoppie Repo](https://github.com/GedalyaKrycer/the-shoppies/tree/main) - Good repo in learning how others created their file structure and for inspiration

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

Beans
