/* global describe, it */
'use strict'

const expect = require('chai').expect
const insertString = require('../index')

describe('#insertString()', () => {
  describe('#insertion', () => {
    it('should do an insert', () => {
      const str = 'I have an apple.'
      const insert = 'an orange and '
      const index = 7
      const result = insertString(str, insert, index)
      const expected = 'I have an orange and an apple.'
      expect(result).to.equal(expected)
    })
  })

  describe('#simple character substitutions', () => {
    it('should add a character at the beginning of the string', () => {
      const str = 'abc'
      const insert = '0'
      const index = -1
      const result = insertString(str, insert, index, -1)
      const expected = '0abc'
      expect(result).to.equal(expected)
    })

    it('should substitute the first character of the string', () => {
      const str = 'abc'
      const insert = '1'
      const index = 0
      const result = insertString(str, insert, index, -1)
      const expected = '1bc'
      expect(result).to.equal(expected)
    })

    it('should substitute the median character of the string', () => {
      const str = 'abc'
      const insert = '2'
      const index = 1
      const result = insertString(str, insert, index, -1)
      const expected = 'a2c'
      expect(result).to.equal(expected)
    })

    it('should substitute the last character of the string', () => {
      const str = 'abc'
      const insert = '3'
      const index = 2
      const result = insertString(str, insert, index, -1)
      const expected = 'ab3'
      expect(result).to.equal(expected)
    })

    it('should add a character at the end of the string', () => {
      const str = 'abc'
      const insert = '4'
      const index = 3
      const result = insertString(str, insert, index, -1)
      const expected = 'abc4'
      expect(result).to.equal(expected)
    })
  })

  describe('#simple string substitutions', () => {
    it('should add a string at the beginning of the string', () => {
      const str = 'cat'
      const insert = 'a '
      const index = -2
      const result = insertString(str, insert, index, -1)
      const expected = 'a cat'
      expect(result).to.equal(expected)
    })

    it('should substitute the beginning of the string', () => {
      const str = 'cat'
      const insert = 'a br'
      const index = -3
      const result = insertString(str, insert, index, -1)
      const expected = 'a brat'
      expect(result).to.equal(expected)
    })

    it('should substitute the median part of the string', () => {
      const str = 'cat'
      const insert = 'o'
      const index = 1
      const result = insertString(str, insert, index, -1)
      const expected = 'cot'
      expect(result).to.equal(expected)
    })

    it('should substitute the end of the string', () => {
      const str = 'cat'
      const insert = 'ars pollute'
      const index = 1
      const result = insertString(str, insert, index, -1)
      const expected = 'cars pollute'
      expect(result).to.equal(expected)
    })

    it('should add a string at the end of the string', () => {
      const str = 'cat'
      const insert = ' in a hat'
      const index = 3
      const result = insertString(str, insert, index, -1)
      const expected = 'cat in a hat'
      expect(result).to.equal(expected)
    })
  })

  describe('#complex string substitutions', () => {
    it('should work with a substitution shorter than what is substituted', () => {
      const str = 'My name is Jack Black and I act.'
      const insert = 'Joe'
      const index = 11
      const numCharsToRemove = 10
      const result = insertString(str, insert, index, numCharsToRemove)
      const expected = 'My name is Joe and I act.'
      expect(result).to.equal(expected)
    })

    it('should work with a substitution longer than what is substituted', () => {
      const str = 'My name is Jack Black and I act.'
      const insert = 'Jack Lancelot Black'
      const index = 11
      const numCharsToRemove = 10
      const result = insertString(str, insert, index, numCharsToRemove)
      const expected = 'My name is Jack Lancelot Black and I act.'
      expect(result).to.equal(expected)
    })
  })
})
