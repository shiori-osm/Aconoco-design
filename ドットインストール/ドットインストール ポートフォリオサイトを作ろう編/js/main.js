"use strict";
{
  //Intersection Observer API

  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.Intersecting) {
        return;
      }

      entry.target.classList.add("apear");

      obs.unobserve(entry.target);
    });
    
  }
  const Observer = new IntersectionObserver(callback, options);
}