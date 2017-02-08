'use strict';

const NetworkedPhysics = {
    schema: {
        property1: 1
    },

    init: () => {

        // TODO: on object added events, add an element dynamically
        // TODO: on object removal events, remove an element dynamically
    },

    tick: () => {
        // for each object in the world, update the corresponding
        // a-frame element
        this.gameEngine.world.forEachObject((id, o) => {
            let el = o.renderObj;
            if (el) {
                el.setAttribute('quaternion', o.quaternion);
                el.setAttribute('position', o.position);
            }
        });
    }
};

module.exports = NetworkedPhysics;
