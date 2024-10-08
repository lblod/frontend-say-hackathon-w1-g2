import Application from 'frontend-say-hackathon-w1-g2/app';
import config from 'frontend-say-hackathon-w1-g2/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
