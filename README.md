# Kirs_Mikhail_Crushing_Bugs
My homework assignment about fixing bugs in the JavaScript

## Bug Fix Plan

This game had two bugs and I fixed them in this homework.

### Bug 1: Many Labels in One Drop Zone

Problem:  
When I drag labels I can drop more than one label in the same place. This is not the right way of doing so. There should be only one label in each drop zone.

Solution:  
In the drop() function, I check if the drop zone already has a label inside.  
If it has a label I stop the function and do nothing.  
If it's empty I allow the label to go inside.

I used this.children.length > 0 to check.

### Bug 2: Reset Button is Not Working

Problem:  
When I click the Reset button it does not work and the labels stay where they are.

Solution:
I selected the label box in JavaScript using:
const labelBox = document.querySelector("#label-box");

I selected the reset button using:
const resetBtn = document.querySelector("#reset-btn");

I made a function called "resetThegame" for each label:
function resetThegame() {
    labels.forEach(label => {
        labelBox.appendChild(label);
    });
}

I added an event listener to the reset button:
resetBtn.addEventListener("click", resetThegame);

## Installation

No installation needed

## Usage

You can open it by clicking in index file with your choice of browser.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

Folder structure
html and css update

## Credits

Mikhail Kirs

## License

MIT License
