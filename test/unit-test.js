const assert = require('assert');
const message = require('../utils');
describe('Message Test', () => {
 it('Welcome Message', () => {
        assert.strictEqual(message.getWelcomeMessage(), outra mensagem);
    });
 it('Port Test', () => {
        assert.strictEqual(message.getPortMessage(), "Application Running on port");
    });
});
