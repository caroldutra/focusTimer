export function Sounds() {
  const forestAudio = new Audio("js/sounds/forest.wav");
  const rainAudio = new Audio("js/sounds/rain.wav");
  const coffeeShopAudio = new Audio("js/sounds/coffeeShop.wav");
  const firePlaceAudio = new Audio("js/sounds/firePlace.wav");
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );
  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );

  forestAudio.loop = true;
  rainAudio.loop = true;
  coffeeShopAudio.loop = true;
  firePlaceAudio.loop = true;

  forestAudio.volume = 0.5;
  rainAudio.volume = 0.5;
  coffeeShopAudio.volume = 0.5;
  firePlaceAudio.volume = 0.5;

  return {
    forestAudio,
    rainAudio,
    coffeeShopAudio,
    firePlaceAudio,
    buttonPressAudio,
    kitchenTimer,
  };
}
