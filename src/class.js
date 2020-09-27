'use strict';

import { logger } from '../lib/logger.js';


export class pomodoro {

  state = {
    name: '',
    text: ''
  };

  constructor(name) {
    this.state.name = name;
  };

  printState() {
    console.log(this.state.name);

    logger.push({
      action: `click button`,
      name: this.state.name
    });
  };
};