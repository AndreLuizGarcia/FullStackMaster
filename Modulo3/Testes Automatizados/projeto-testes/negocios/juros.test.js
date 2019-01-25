const juros = require('./juros')
const expect = require('chai').expect


describe('Testando modulo juros', () => {
    it('Calcula juros compostos', () => {
        const test1010 = juros.calculoJuros(1000, 0.01, 1)
        expect(test1010).to.equal(1010)
    })
})