# Frontend Mentor - QR code component solution

This is my solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

![](./my-app/public/Screenshot%20desktop.png)
![](./my-app/public/Screenshot%20mobile.png)

### Links

- Solution URL: [Github solution](https://github.com/chelsea-here/qr-code-component-main)
- Live Site URL: [Vercel app](https://qr-code-component-main-gold-alpha.vercel.app/)

## My process

1. Github setup (Honestly the hardest part of this project, lol)
2. create-next-app (I used Next.js, ESLINT and Tailwind CSS)
3. update tailwind.config with the project styles (colors, screen design sizes, font sizes and weights)
4. update layout file with project fonts
5. create html and tailwindcss styling

### Built with

- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwindcss](https://tailwindcss.com/) - tailwindcss

### What I learned

Ahhh you think you have it all figured out... just one small thing. You have to center the element horizontally AND vertically. Bahaha. Turns out that there are multiple ways to do this, but none of them are obvious.

1.  You can make the object absolute and add an x and y translation, this didnt work well for me in tailwind so I opted for the next method...
2.  Style using flexbox. Style main with "content-center" in talwindcss to center the card vertically. Style your card as a flexbox column with margin auto to keep the items stacked vertically and centered horizontally. See summary below in both css and tailwindcss languages.

````css
.main {
  align-content: center;
}

.card {
  display: flex;
  flex-direction: column;
  margin: auto;
}
```

```tailwindcss
<main className="content-center">
<div className="flex-col m-auto">
````

### Continued development

I'll continue css tutorials mentioned below for a website I'm working on. I will focus specifically on responsive design for this project.

### Useful resources

- [Git - Your branch and 'origin/xxx' have diverged](https://web.archive.org/web/20150213051658/https://serebrov.github.io/html/2012-02-13-git-branches-have-diverged.html) - This helped me a resolve a consistent error that I've had when I try to use frontend mentor's github setup.
- [CSS Tutorial - Full Course for Beginners](https://youtu.be/Q_ObaXoowoM?si=5ABjWSr26yWmLku9) - This helped me understand flexbox and how to center items both vertically and horizontally using it.
- [CSS Podcast](https://thecsspodcast.libsyn.com/#) - This is a fun and helpful resource for learning the fundamental concepts in css. Amazing that they were able to accomplish this just through audio.

## Author

- Website - [My Github](https://github.com/chelsea-here)
- Frontend Mentor - [@chelsea-here](https://www.frontendmentor.io/profile/chelsea-here)

## Acknowledgments

Thank you too all those who have taken their time to provide free resources. Special thanks to contributors at freecodecamp.org for helping me get started!

## End

```

```
