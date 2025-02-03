// initial_model is a simple JavaScript Object with two keys and no methods
// Used when mounting To do list App
// and as a "reset" state when all todos are delete at once

var intitial_model = { 
    todos: [],  // empty array to be filled later on
    hash: "#/" // hash in the url. To be used  for ROUTING
}

/* module.exports is needed to run the functions using Node.js for testing! */
if (typeof module !== 'undefined' && module.exports){
    module.exports = {
        model: intitial_model
        
    }
}

/**
 * `update` transforms the `model` based on the `action`.
 * @param {String} action - the desired action to perform on the model.
 * @param {Object} model - the App's (current) model (or "state").
 * @return {Object} new_model - the transformed model.
 */
function update(action, model) {
    switch (action) {                  // action (String) determines which case
      default:                         // if action unrecognised or undefined,
        return model;                  // return model unmodified
    }    // default? https://softwareengineering.stackexchange.com/a/201786/211301
   }
