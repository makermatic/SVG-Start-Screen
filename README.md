# SVG Start Screen
 SVG Start Screen Version 1.2.1

## Downloading for Editing for the First Time
1. Create a Github account and make sure you're invited to collaborate.
2. Download any code editor (*VS Code reccomended*) and Github Desktop.
     - Optional: If using *VS Code*, download the Live Server extension for   testing.
3. Go through setup and set your default Github folder
4. Clone the master branch.
        - Optional: Feel free to duplicate the master and make it your own branch
5. Open the folder in your code editor of choice.

## Changing Player Names
1. In `sketch.js`, change the second parameter in lines 10 and/or 11.
    - **Make sure the names are in quotation marks** or the code will crash.
    - If the text looks off in OBS, feel free to change the parameters in line 33 of `icon.js`.
2. Save changes in your code editor and push the changes in Github Desktop.

## Changing Player Icons
1. Find an image or obtain one from the player that best represents him/her.
2. Open `Icon Template.psd` in Photoshop (CC 2020 or earlier).
3. In Photoshop, Drag the *new* image as a new layer.
    - If it prompts you to transform the image, make sure it fits the entire canvas, even if its a small image.
4. Drag the mask from the *original image layer* to the new one
5. Delete the *original image layer* and save your changes.
6. Go to File --> Export As --> Quick Export as PNG.
7. **VERY IMPORTANT:** Save the image as either `P1.png` or `P2.png`, depending on the player you're changing.
    - If asked to replace the image, replace it. Its okay!
    - If you don't do this correctly, the image won't display.
8. Push the changes in Github Desktop.

## Adding a Win Crown
1. In `sketch.js`, add a third parameter in lines 10 or 11 and name it `"win"`
    - Important: You must put quotation marks in front of `win`

## Displaying Final Scores
1. After adding a win crown to the winning player, add a fourth parameter and type in the numerical score
2. For the losing player, add a third parameter with whatever you want, just make sure its in quotation marks. Then type the losing players score in a fourth parameter.
    - The final result should look like this:
        ``p1 = new Icon("player1", "Emagination", "win", 20)``
        ``p2 = new Icon("player1", "Emagination", "s", 16)``

## How to Push Changes in Github Desktop
1. In Github Desktop, verify that changes have been made.
    - The icon parameters have been changed.
    - The images have been replaced and the template file has been updated.
2. In the `summary` window, type in changes that have been made.
    - Example: Updated icons and names for 5/8 show
    - You can ignore `description` as no one reads.
3. Hit `Commit to master`.
4. At the top of the window, hit `Push origin`.
5. After it pushes the changes and resolves deltas, the code should be updated. on the site in >30 seconds, sometimes even shorter.

## Known Issues/Caveats
1. Global variable for timer has been declared, but doesn't serve a purpose. It may slow down netlify, even if it isn't printed to console. But if used properly, it could trigger a movement state for the icons to exit out from the canvas. 
    - **Update**: Timer has been commented out but can easily be brought in
2. While `textAlign()` is set to `CENTER` and has a bounding box of `CENTER`, its possible that having a lot of characters could break that placement.
    - One way to fix it is to decrease `textSize()`, but what if you forget what the original font size was.
3. When `this.crown` and `this.score` are not present, p5 prints out scope warning in console.

## Change Log
### v1.2.1
    - Added final score text into `Icon.js`
    - renamed var `vs` to headFont, since its now also used for score text
### v1.1.2
 - Timer var and widget have been commented out to save OBS/browser performance