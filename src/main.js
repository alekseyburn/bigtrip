import {createTripInfoTemplate} from "./components/trip-info";
import {createTripCostTemplate} from "./components/trip-cost";
import {createSiteMenuTemplate} from "./components/site-menu";
import {createFilterTemplate} from "./components/filter";
import {createSortTemplate} from "./components/sort";
import {createEditFormTemplate} from "./components/edit-form";
import {createTripDaysListTemplate} from "./components/trip-days-list";
import {createTripDayTemplate} from "./components/trip-day";
import {createEventItemTemplate} from "./components/event-item";

const DAYS_COUNT = 3;
const tripMainElement = document.querySelector(`.trip-main`);
const tripControlsElement = document.querySelector(`.trip-controls`);
const controlsTitleElement = tripControlsElement.querySelector(`h2`);
const tripEventsElement = document.querySelector(`.trip-events`);
const eventsTitleElement = tripEventsElement.querySelector(`h2`);

function render(container, template, place = `beforeend`) {
  container.insertAdjacentHTML(place, template);
}

render(tripMainElement, createTripInfoTemplate(), `afterbegin`);

const tripInfoElement = document.querySelector(`.trip-info`);
render(tripInfoElement, createTripCostTemplate());

render(controlsTitleElement, createSiteMenuTemplate(), `afterend`);
render(tripControlsElement, createFilterTemplate());

render(eventsTitleElement, createSortTemplate(), `afterend`);
render(tripEventsElement, createEditFormTemplate());
render(tripEventsElement, createTripDaysListTemplate());

const tripListElement = document.querySelector(`.trip-days`);
render(tripListElement, createTripDayTemplate());

const tripDayElement = tripListElement.querySelector(`.trip-days__item`);
const eventsList = tripDayElement.querySelector(`.trip-events__list`);

for (let i = 0; i < DAYS_COUNT; i++) {
  render(eventsList, createEventItemTemplate());
}
