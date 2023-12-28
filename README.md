# Drakefy

A chrome extension that replaces all images on your webpage to Drake's images

![drakefy screeenshot](assets/images/screenshot.png)

## Project Files Description
This project includes 3 files and 2 directories.

### Files
- manifest.json: Configuration file that provides information about the extension to the browser
- content.js: Has access to the DOM (Document Object Model), hence contains the code to modify the appearance of web pages
- rename_images.py: A python script to rename all the images in the `assets` directory

### Directories
- assets: Root directory for all assets.
    - images: This directory contains all images

## Instructions for Implementation
1. Clone this repository
2. Access `chrome://extensions/` through your browser's address bar
3. Click on `Load unpacked`
4. Choose the cloned directory
5. Ensure the extension is enabled
6. Visit any website containing images, such as https://www.youtube.com/

## Issues
The extension may not function correctly on all sites. This issue could be related to the necessity of waiting for all documents to finish loading.
