# CodeQuiz_<!DOCTYPE html>
  <html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    
    <title>Quick Quiz - Play</title>
    <link rel="stylesheet" href="App.css" />
    <link rel="stylesheet" href="CodeQuiz.css" />
  </head>
  <body>
    <div class="container">
      <div id="game" class="justify-center flex-column">
        <div id="hud">
          <div id="hud-item">
            <p id="progressText" class="hud-prefix">
              Question
            </p>
            <div id="progressBar">
              <div id="progressBarFull"></div>
            </div>
          </div>
          <div id="hud-item">
            <p class="hud-prefix">
              Score
            </p>
            <h1 class="hud-main-text" id="score">
              0
            </h1>
          </div>
        </div>
        <h2 id="question">Which Star Wars Character gets his hand sliced off during a fight?</h2>
        <div class="choice-container">
          <p class="choice-prefix">B</p>
          <p class="choice-text" data-number="1">Luke Skywalker</p>
        </div>
        <div class="choice-container">
          <p class="choice-prefix">B</p>
          <p class="choice-text" data-number="2">Luke Skywalker</p>
        </div>
        <div class="choice-container">
          <p class="choice-prefix">C</p>
          <p class="choice-text" data-number="3">Obi Wan</p>
        </div>
        <div class="choice-container">
          <p class="choice-prefix">D</p>
          <p class="choice-text" data-number="4">Darth Maul</p>
        </div>
      </div>
    </div>
    <script src="End.js"></script>
    <script src="CodeQuiz.js"></script>
  </body>
</html>
