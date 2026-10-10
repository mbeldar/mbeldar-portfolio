const locations = {
  edmonds: {
    name: "Edmonds ferry terminal",
    coords: [47.8111, -122.3831],
    category: "transit",
    label: "E",
    note: "Arrive around noon; target the 12:40 pm sailing.",
  },
  kingston: {
    name: "Kingston ferry terminal",
    coords: [47.7948, -122.4947],
    category: "transit",
    label: "K",
    note: "Gateway to the peninsula and return ferry queue.",
  },
  "port-angeles": {
    name: "Port Angeles stay area",
    coords: [48.1181, -123.4307],
    category: "stay",
    label: "PA",
    note: "Best Friday base for Hurricane Ridge and Saturday US-101 departure.",
  },
  "hurricane-ridge": {
    name: "Hurricane Ridge",
    coords: [47.9694, -123.4986],
    category: "mountain",
    label: "HR",
    note: "5,200-foot developed area; no potable water. Weather-dependent road.",
  },
  "hurricane-hill": {
    name: "Hurricane Hill trailhead",
    coords: [47.9915, -123.5276],
    category: "mountain",
    label: "HH",
    note: "3.2 mi round trip to the summit; only if timing and weather are excellent.",
  },
  "madison-falls": {
    name: "Madison Falls",
    coords: [48.0443, -123.5894],
    category: "forest",
    label: "MF",
    note: "Short Elwha waterfall walk and strong ridge fallback.",
  },
  "lake-crescent": {
    name: "Lake Crescent",
    coords: [48.0587, -123.7985],
    category: "stay",
    label: "LC",
    note: "Scenic stay alternative with fewer evening services.",
  },
  marymere: {
    name: "Marymere Falls trailhead",
    coords: [48.0576, -123.7882],
    category: "forest",
    label: "M",
    note: "1.8 mi round trip through old growth to a 90-foot waterfall.",
  },
  "sol-duc": {
    name: "Sol Duc Falls trailhead",
    coords: [47.9556, -123.8355],
    category: "forest",
    label: "S",
    note: "1.6 mi round trip; especially good in light rain.",
  },
  hoh: {
    name: "Hoh Rain Forest Visitor Center",
    coords: [47.8609, -123.9346],
    category: "forest",
    label: "H",
    note: "Hall of Mosses and Spruce Nature Trail start here.",
  },
  forks: {
    name: "Forks stay area",
    coords: [47.9504, -124.3855],
    category: "stay",
    label: "F",
    note: "Best Saturday base for the 3-day version.",
  },
  rialto: {
    name: "Rialto Beach",
    coords: [47.9212, -124.6388],
    category: "coast",
    label: "R",
    note: "Primary coast stop only if Mora Road has reopened as scheduled.",
  },
  "first-beach": {
    name: "First Beach · La Push",
    coords: [47.9031, -124.6355],
    category: "coast",
    label: "1B",
    note: "Easy scenic Pacific stop on Quileute Reservation land; follow posted access rules.",
  },
  ruby: {
    name: "Ruby Beach",
    coords: [47.7102, -124.4156],
    category: "coast",
    label: "RB",
    note: "Reliable coast fallback with sea stacks and a short forest approach.",
  },
  "ediz-hook": {
    name: "Ediz Hook",
    coords: [48.1357, -123.4499],
    category: "coast",
    label: "EH",
    note: "Drive-up harbor, Strait, and mountain views in Port Angeles.",
  },
  "salt-creek": {
    name: "Salt Creek Recreation Area",
    coords: [48.1647, -123.6972],
    category: "coast",
    label: "SC",
    note: "Strait-side sea cliffs, Tongue Point, and Crescent Bay; a scenic Sunday swap.",
  },
  kalaloch: {
    name: "Kalaloch · Tree of Life",
    coords: [47.6055, -124.3762],
    category: "coast",
    label: "KL",
    note: "Wide beach and suspended-root spruce; fits only a southern return loop.",
  },
  seattle: {
    name: "Seattle",
    coords: [47.6062, -122.3321],
    category: "transit",
    label: "SEA",
    note: "End of trip.",
  },
};

const itineraryData = {
  sat: [
    {
      day: "Friday",
      date: "Oct 16",
      subtitle: "Ferry + mountain window",
      events: [
        {
          time: "12:00 pm",
          title: "Join the Edmonds vehicle queue",
          detail: "Target the 12:40 sailing; 1:35 is the planned fallback. Crossing is about 30 minutes.",
          meta: "Do not build the afternoon around catching 11:55 if you arrive at noon.",
          location: "edmonds",
        },
        {
          time: "1:10–2:50",
          title: "Kingston → Port Angeles",
          detail: "Drive WA-104 / US-101. Keep any Port Gamble stop to 10 minutes if you want the ridge window.",
          meta: "Approx. 1 hr 35 min driving after unloading.",
          location: "port-angeles",
        },
        {
          time: "3:10–6:05",
          title: "Hurricane Ridge + short meadow walk",
          wetTitle: "Madison Falls + Port Angeles waterfront",
          detail: "Drive the ridge road, use the overlooks, then walk Big Meadow / Cirque Rim for 0.5–1.0 mile. Begin descending before sunset.",
          wetDetail: "If the ridge is closed or socked in, do the short Madison Falls walk, then use Ediz Hook / the Port Angeles waterfront for the late light.",
          meta: "Sunset 6:28 pm · no potable water at the ridge · road is 45 min from town.",
          note: "Only attempt Hurricane Hill if walking by 4:00 pm, conditions are clear/dry, and everyone wants 3.2 miles.",
          location: "hurricane-ridge",
          wetLocation: "madison-falls",
        },
        {
          time: "7:00 pm",
          title: "Dinner + sleep in Port Angeles",
          detail: "Fuel the car tonight. Staying toward the west side of town makes Saturday smoother.",
          meta: "Recommended Friday stay area.",
          location: "port-angeles",
        },
      ],
    },
    {
      day: "Saturday",
      date: "Oct 17",
      subtitle: "Lake + rainforest + coast + Seattle",
      events: [
        {
          time: "7:15–9:20 am",
          title: "Lake Crescent + Marymere Falls",
          detail: "Drive about 35 minutes, walk the 1.8-mile waterfall trail, and take one short lake viewpoint stop.",
          meta: "60–90 min walking · easy · wet roots can be slick.",
          location: "marymere",
        },
        {
          time: "9:20–11:25 am",
          title: "Drive to Hoh Rain Forest",
          detail: "Continue west on US-101, then Upper Hoh Road. Eat a car snack rather than using a long lunch stop.",
          meta: "Approx. 2 hours; fuel and food are easiest in Forks.",
          location: "hoh",
        },
        {
          time: "11:25 am–1:45 pm",
          title: "Hall of Mosses + Spruce Nature Trail",
          detail: "Do both short loops if on time (0.8 + 1.2 miles). If late, keep Hall of Mosses and leave by 1:30.",
          meta: "The forest works well in light rain.",
          location: "hoh",
        },
        {
          time: "3:00–4:00 pm",
          title: "First Beach + Rialto coastal sampler",
          wetTitle: "Ruby Beach sea stacks or skip exposed coast",
          detail: "Take a 20-minute First Beach look, then use Rialto only after confirming Mora Road reopened. Stay on open beach; the 4:52 pm high tide means no headland ambitions.",
          wetDetail: "Use Ruby Beach if Mora Road remains closed. If wind/surf is unpleasant, take the overlook and preserve a safe ferry margin.",
          meta: "Rialto road was listed closed through Oct 15; reopening is not guaranteed.",
          note: "Never climb on drift logs or turn your back on the ocean.",
          location: "rialto",
          wetLocation: "ruby",
        },
        {
          time: "4:00–7:40 pm",
          title: "Drive to Kingston",
          detail: "Leave the coast on time. Use Forks or Port Angeles for a quick fuel/food stop only if needed.",
          meta: "Planning allowance: ~3 hr 20 min + short buffer; aims to reach the queue 40 min before 8:20.",
          location: "kingston",
        },
        {
          time: "8:20–10:45 pm",
          title: "Ferry + Seattle",
          detail: "Aim for 8:20; 9:10 and 9:40 are realistic fallbacks. The final Edmonds-to-Seattle drive is roughly 30 minutes without traffic.",
          meta: "This is the compressed plan’s pressure point.",
          location: "seattle",
        },
      ],
    },
  ],
  sun: [
    {
      day: "Friday",
      date: "Oct 16",
      subtitle: "Ferry + mountain window",
      events: [
        {
          time: "12:00 pm",
          title: "Join the Edmonds vehicle queue",
          detail: "Target the 12:40 sailing; 1:35 is the planned fallback. Crossing is about 30 minutes.",
          meta: "Vehicle space is first-come, first-served.",
          location: "edmonds",
        },
        {
          time: "1:10–2:50",
          title: "Kingston → Port Angeles",
          detail: "Drive WA-104 / US-101. Keep any Port Gamble stop brief.",
          meta: "Approx. 1 hr 35 min driving after unloading.",
          location: "port-angeles",
        },
        {
          time: "3:10–6:05",
          title: "Hurricane Ridge + short meadow walk",
          wetTitle: "Madison Falls + Port Angeles waterfront",
          detail: "Drive the ridge road, use the overlooks, then walk Big Meadow / Cirque Rim for 0.5–1.0 mile. Begin descending before sunset.",
          wetDetail: "If the ridge is closed or socked in, do the short Madison Falls walk, then use Ediz Hook / the Port Angeles waterfront for the late light.",
          meta: "Sunset 6:28 pm · no potable water at the ridge.",
          note: "Only attempt Hurricane Hill if walking by 4:00 pm and conditions are clear/dry.",
          location: "hurricane-ridge",
          wetLocation: "madison-falls",
        },
        {
          time: "7:00 pm",
          title: "Dinner + sleep in Port Angeles",
          detail: "Fuel tonight and keep breakfast simple for an early westbound start.",
          meta: "Recommended Friday stay area.",
          location: "port-angeles",
        },
      ],
    },
    {
      day: "Saturday",
      date: "Oct 17",
      subtitle: "Lake + rainforest + sunset coast",
      events: [
        {
          time: "7:30–9:35 am",
          title: "Lake Crescent + Marymere Falls",
          detail: "Drive about 35 minutes, walk the 1.8-mile waterfall trail, and take a short lake viewpoint stop.",
          meta: "60–90 min walking · easy.",
          location: "marymere",
        },
        {
          time: "9:35–11:40 am",
          title: "Drive to Hoh Rain Forest",
          detail: "Continue west on US-101, then Upper Hoh Road. Pick up food in Forks or eat a packed lunch.",
          meta: "Approx. 2 hours.",
          location: "hoh",
        },
        {
          time: "11:40 am–2:30 pm",
          title: "Hall of Mosses + Spruce Nature Trail",
          detail: "Walk both short loops (0.8 + 1.2 miles) and leave time for the river edge and a packed lunch.",
          meta: "The forest is a good light-rain activity.",
          location: "hoh",
        },
        {
          time: "3:45–6:20 pm",
          title: "First Beach + Rialto sunset",
          wetTitle: "Ruby Beach sea stacks + shorter weather window",
          detail: "Start with a 20–30 minute First Beach pull-off, then use Rialto only after confirming Mora Road access. Stay on the open beach; Saturday high tide is near 4:52 pm.",
          wetDetail: "Use Ruby Beach if Mora Road remains closed. In strong wind or heavy rain, use the overlook, shorten the stop, and warm up in Forks.",
          meta: "Sunset 6:26 pm · no useful tide-pool window this afternoon.",
          note: "Keep well away from drift logs and breaking waves.",
          location: "rialto",
          wetLocation: "ruby",
        },
        {
          time: "6:45 pm",
          title: "Dinner + sleep in Forks",
          detail: "Book a Forks-area stay; it keeps Sunday from becoming a backtrack marathon.",
          meta: "Recommended Saturday stay area.",
          location: "forks",
        },
      ],
    },
    {
      day: "Sunday",
      date: "Oct 18",
      subtitle: "Waterfall + ferry home",
      events: [
        {
          time: "8:00–9:15 am",
          title: "Forks → Sol Duc trailhead",
          detail: "Take US-101 east, then Sol Duc Road. The road is currently open; recheck after heavy rain or wind.",
          meta: "Approx. 1 hr 15 min.",
          location: "sol-duc",
        },
        {
          time: "9:20–10:40 am",
          title: "Sol Duc Falls",
          detail: "Walk 1.6 miles round trip through old growth to the falls. Add Ancient Groves only if you are running early.",
          meta: "200 ft gain · good in drizzle.",
          location: "sol-duc",
        },
        {
          time: "10:50 am–2:25 pm",
          title: "Sol Duc → Kingston",
          detail: "Return through Port Angeles. Keep lunch/fuel to a short stop to protect the ferry window.",
          meta: "Planning allowance: ~3 hours plus a short buffer.",
          location: "kingston",
        },
        {
          time: "3:10–5:15 pm",
          title: "Ferry + Seattle",
          detail: "Aim for 3:10; 4:00 or 4:40 are easy fallbacks. Expect roughly 30 minutes from Edmonds to Seattle without traffic.",
          meta: "Kingston vehicle boarding-pass rules apply during this window.",
          location: "seattle",
        },
      ],
    },
  ],
};

const state = {
  duration: new URLSearchParams(window.location.search).get("return") === "sun" ? "sun" : "sat",
  weather: new URLSearchParams(window.location.search).get("weather") === "wet" ? "wet" : "clear",
};

let map;
let routePrimary;
let routeOptional;
const markers = {};

function initMap() {
  const mapElement = document.querySelector("#map");
  if (!window.L) {
    mapElement.innerHTML = '<div class="map-fallback"><strong>Map tiles could not load.</strong><br>Use the location buttons with your navigation app, and download an offline NPS map before departure.</div>';
    return;
  }

  map = L.map("map", { scrollWheelZoom: false }).setView([47.95, -123.64], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  Object.entries(locations).forEach(([id, place]) => {
    const icon = L.divIcon({
      className: "custom-div-icon",
      html: `<div class="map-marker marker-${place.category}"><span>${place.label}</span></div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 27],
      popupAnchor: [0, -24],
    });
    const marker = L.marker(place.coords, { icon }).addTo(map);
    marker.bindPopup(`<span class="popup-kind">${place.category}</span><br><strong>${place.name}</strong><br>${place.note}`);
    marker.category = place.category;
    markers[id] = marker;
  });

  renderRoute();
}

function renderRoute() {
  if (!map) return;
  if (routePrimary) routePrimary.remove();
  if (routeOptional) routeOptional.remove();

  const primaryStops = state.duration === "sat"
    ? ["edmonds", "kingston", "port-angeles", state.weather === "wet" ? "madison-falls" : "hurricane-ridge", "port-angeles", "marymere", "hoh", state.weather === "wet" ? "ruby" : "rialto", "kingston", "edmonds", "seattle"]
    : ["edmonds", "kingston", "port-angeles", state.weather === "wet" ? "madison-falls" : "hurricane-ridge", "port-angeles", "marymere", "hoh", state.weather === "wet" ? "ruby" : "rialto", "forks"];
  const optionalStops = state.duration === "sun" ? ["forks", "sol-duc", "kingston", "edmonds", "seattle"] : [];

  routePrimary = L.polyline(primaryStops.map((id) => locations[id].coords), {
    color: "#255f4c",
    weight: 4,
    opacity: 0.78,
  }).addTo(map);

  if (optionalStops.length) {
    routeOptional = L.polyline(optionalStops.map((id) => locations[id].coords), {
      color: "#b56d22",
      weight: 4,
      opacity: 0.75,
      dashArray: "8 8",
    }).addTo(map);
  }

  const bounds = routeOptional
    ? L.featureGroup([routePrimary, routeOptional]).getBounds()
    : routePrimary.getBounds();
  map.fitBounds(bounds, { padding: [28, 28] });
}

function activeEventData(event) {
  const wet = state.weather === "wet";
  return {
    ...event,
    title: wet && event.wetTitle ? event.wetTitle : event.title,
    detail: wet && event.wetDetail ? event.wetDetail : event.detail,
    location: wet && event.wetLocation ? event.wetLocation : event.location,
  };
}

function renderItinerary() {
  const root = document.querySelector("#itinerary");
  root.innerHTML = itineraryData[state.duration]
    .map((day) => {
      const events = day.events
        .map((rawEvent) => {
          const event = activeEventData(rawEvent);
          const mapButton = event.location && locations[event.location]
            ? `<button class="location-button" data-location="${event.location}" type="button">Map</button>`
            : "";
          return `
            <article class="event">
              <div class="event-time">${event.time}</div>
              <div>
                <h3>${event.title}</h3>
                <p>${event.detail}</p>
                <span class="event-meta">${event.meta}</span>
                ${event.note ? `<br><span class="event-note">${event.note}</span>` : ""}
              </div>
              ${mapButton}
            </article>`;
        })
        .join("");

      return `
        <div class="day-block">
          <div class="day-label">
            <p>${day.date}</p>
            <strong>${day.day}</strong>
            <span class="small-copy">${day.subtitle}</span>
          </div>
          <div class="day-events">${events}</div>
        </div>`;
    })
    .join("");

  root.querySelectorAll("[data-location]").forEach((button) => {
    button.addEventListener("click", () => showLocation(button.dataset.location));
  });
}

function updateControls() {
  document.querySelectorAll("[data-duration]").forEach((button) => {
    const active = button.dataset.duration === state.duration;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll("[data-weather]").forEach((button) => {
    const active = button.dataset.weather === state.weather;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  const durationText = state.duration === "sun"
    ? "Recommended 3-day version: Port Angeles Friday, Forks Saturday, Sol Duc Sunday, Seattle around 4–5 pm."
    : "Compressed 2-day version: Port Angeles Friday, west side Saturday, Seattle around 9:30–10:45 pm.";
  const weatherText = state.weather === "wet"
    ? " Rain mode swaps the ridge/coast emphasis for lower-elevation fallbacks."
    : " View mode uses Hurricane Ridge Friday and Rialto only after access is confirmed.";
  document.querySelector("#plan-summary").textContent = durationText + weatherText;
}

function updateUrl() {
  const query = new URLSearchParams();
  query.set("return", state.duration);
  query.set("weather", state.weather);
  window.history.replaceState({}, "", `${window.location.pathname}?${query}`);
}

function applyState() {
  updateControls();
  renderItinerary();
  renderRoute();
  updateUrl();
}

function showLocation(id) {
  const place = locations[id];
  if (!place) return;
  if (map && markers[id]) {
    if (!map.hasLayer(markers[id])) markers[id].addTo(map);
    map.setView(place.coords, id === "seattle" ? 9 : 11, { animate: true });
    markers[id].openPopup();
    document.querySelector("#map-title").scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    showToast(`${place.name}: ${place.note}`);
  }
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function currentPlanText() {
  const lines = [
    "OLYMPIC PENINSULA · OCT 16–18, 2026",
    state.duration === "sun" ? "Return: Sunday afternoon" : "Return: Saturday night",
    state.weather === "wet" ? "Weather mode: rain / low cloud" : "Weather mode: views / mixed",
    "",
  ];

  itineraryData[state.duration].forEach((day) => {
    lines.push(`${day.day.toUpperCase()} · ${day.date}`);
    day.events.forEach((rawEvent) => {
      const event = activeEventData(rawEvent);
      lines.push(`${event.time} — ${event.title}`);
    });
    lines.push("");
  });

  lines.push("Live checks: WSF vehicle wait; NPS road/weather line 360-565-3131; Mora Road access; NOAA La Push tides.");
  return lines.join("\n");
}

async function copyPlan() {
  try {
    await navigator.clipboard.writeText(currentPlanText());
    showToast("Plan summary copied.");
  } catch {
    showToast("Copy was blocked; use Print instead.");
  }
}

document.querySelectorAll("[data-duration]").forEach((button) => {
  button.addEventListener("click", () => {
    state.duration = button.dataset.duration;
    applyState();
  });
});

document.querySelectorAll("[data-weather]").forEach((button) => {
  button.addEventListener("click", () => {
    state.weather = button.dataset.weather;
    applyState();
  });
});

document.querySelectorAll(".stay-section [data-location], .hikes-section [data-location], .coast-section [data-location]").forEach((button) => {
  button.addEventListener("click", () => showLocation(button.dataset.location));
});

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("active", item === button));
    Object.values(markers).forEach((marker) => {
      if (!map) return;
      const visible = filter === "all" || marker.category === filter;
      if (visible && !map.hasLayer(marker)) marker.addTo(map);
      if (!visible && map.hasLayer(marker)) marker.removeFrom(map);
    });
  });
});

document.querySelector("#copy-plan").addEventListener("click", copyPlan);

initMap();
applyState();
