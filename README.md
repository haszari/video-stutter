
# Video Stutter

A very basic app to play a single video file forever, jumping to a random position and play rate every now and then. 

## Getting started

- clone this repo
- set up some video file(s) (see below)
- hack [`VideoStutter.js`](src/components/VideoStutter.js) to import your video
- `yarn start`

## Why

Sometimes I want a background for [DJ mix livestreams](https://www.youtube.com/user/haszaritube), and I have some mesmerising phone videos which just need to be played forever to meet this need.

## How to set up video files 

Short version: `npm install <folder>`

The video files need to be importable using `npm import`. I set this up by making a folder elsewhere on my disk with some video files, adding a basic `package.json` file, and then installing that as symlinked npm module.

Then you can import any video files from under that module (see [`VideoStutter.js`](src/components/VideoStutter.js)).

## How to configure the jump interval

There are constants at the top of [`VideoStutter.js`](src/components/VideoStutter.js) where you can set a tempo in BPM. 

#### built using _Create React App_

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

