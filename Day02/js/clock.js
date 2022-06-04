const SECOND_HAND = ".second-hand";
const MIN_HAND = ".min-hand";
const HOUR_HAND = ".hour-hand";

const getDegree = (value) => value * 360 + 90;

const getTimeDegreeBySelector = (date) => (selector) =>
  ({
    [SECOND_HAND]: getDegree(date.getSeconds() / 60),
    [MIN_HAND]: getDegree(date.getMinutes() / 60),
    [HOUR_HAND]: getDegree(date.getHours() / 12),
  }[selector]);

const makeElementDegUpdater = (date) => (selector) => {
  const degree = getTimeDegreeBySelector(date)(selector);
  const element = document.querySelector(selector);
  element.style.setProperty("--rotateDeg", `${degree}deg`);
};

const timeClock = () => {
  const now = new Date();
  const update = makeElementDegUpdater(now);
  const hands = [SECOND_HAND, MIN_HAND, HOUR_HAND];
  hands.forEach(update);
};

setInterval(timeClock, 1000);
