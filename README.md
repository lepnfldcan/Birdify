# Birdify 🐦

Birdify is an interactive web app that lets users explore various bird sounds by clicking buttons or pressing specific keys on the keyboard. Originally adapted from a drum kit project as part of a capstone project from *The App Brewery* course taught by Dr. Angela Yu, this project demonstrates HTML, CSS, and JavaScript skills, including event handling, audio control, and UI animation.

## Features

- **Interactive Bird Sounds**: Click or press the designated key to hear each bird's unique call.
- **Keyboard Controls**: Each bird sound can also be triggered by a keyboard press, providing an alternative way to explore the sounds.
- **Visual Feedback**: Buttons provide visual feedback when clicked or when a key is pressed, enhancing user experience.
- **Responsive Layout**: The app is styled to be visually appealing on different screen sizes.

## Technologies Used

- **HTML**: Structuring the interactive elements and descriptions for each bird.
- **CSS**: Custom styling for a cohesive and responsive design.
  - *Animations and Transitions*: CSS animations for button feedback.
- **JavaScript**: Controls the audio playback, event listeners, and interactive effects.
  - *Event Handling*: Click and keydown event listeners for interactivity.
  - *Audio API*: Uses JavaScript's `Audio` object for smooth play/pause toggling.

## Project Setup

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/lepnfldcan/Birdify.git
   ```
2. Open the project folder and run `index.html` in a browser.

## Usage

1. **Explore Bird Calls**:
   - Click any button with a bird's name or image to hear its call.
   - Alternatively, press the corresponding keyboard key to play/pause the sound.

2. **Reset the Sound**:
   - Press the same button or key again to pause and reset the bird call.

## Project Structure

```
Birdify/
├── images/               # Bird images used for button backgrounds
├── sounds/               # Bird sound files in .mp3 and .wav formats
├── index.html            # Main HTML file
├── styles.css            # CSS for styling and animations
└── index.js              # JavaScript for interactive functionality
```

## Background

Birdify was adapted as part of a capstone project from *The App Brewery* course taught by Dr. Angela Yu. Originally a drum kit project, this adaptation showcases a creative twist on the original codebase to produce a unique, nature-themed application.

## Future Improvements

- **Additional Bird Information**: Add tooltips or modals with fun facts about each bird.
- **Progress Bar**: Implement a visual progress bar to indicate the sound duration.
- **Enhanced Mobile Support**: Optimize layout further for small screen sizes.

## Demo

You can view the live version of Birdify here: [Birdify on GitHub Pages](https://lepnfldcan.github.io/Birdify/)

## License

This project is open-source and available under the MIT License.

