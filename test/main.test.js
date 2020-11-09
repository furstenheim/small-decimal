/* globals describe it */
const main = require('../index')
const { expect } = require('chai')

describe('Constructor', function () {
  const testCases = [
    {
      input: 1,
      expected: BigInt(2 ** 32)
    },
    {
      input: 0.5,
      expected: BigInt(2 ** 31)
    },
    {
      input: 2,
      expected: BigInt(2 ** 33)
    },
    {
      input: 2 ** 63,
      expected: BigInt(2 ** 63) * BigInt(2 ** 32)
    },
    {
      input: 2 ** 51 + 0.5,
      expected: BigInt(2 ** 51) * BigInt(2 ** 32) + BigInt(2 ** 31)
    }
  ]

  testCases.forEach(function ({ input, expected }) {
    it(`Check ${input}`, function () {
      const result = new main.Decimal(input)
      expect(result._number).equal(expected)
    })
  })
})

describe('Div', function () {
  const testCases = [
    {
      input1: 1,
      input2: 1,
      expected: 1
    },
    {
      input1: 2,
      input2: 1,
      expected: 2
    },
    {
      input1: 1,
      input2: 2,
      expected: 0.5
    },
    {
      input1: 5,
      input2: 2,
      expected: 2.5
    },
  ]

  testCases.forEach(function ({ input1, input2, expected }) {
    it(`Check ${input1} div ${input2}`, function () {
      const result = new main.Decimal(input1).div(new main.Decimal(input2))
      expect(result).deep.equal(new main.Decimal(expected))
    })
  })
})

describe('divToInt', function () {
  const testCases = [
    {
      input1: 1,
      input2: 1,
      expected: 1
    },
    {
      input1: 2,
      input2: 1,
      expected: 2
    },
    {
      input1: 1,
      input2: 2,
      expected: 0
    },
    {
      input1: 5,
      input2: 2,
      expected: 2
    },
  ]

  testCases.forEach(function ({ input1, input2, expected }) {
    it(`Check ${input1} div ${input2}`, function () {
      const result = new main.Decimal(input1).divToInt(new main.Decimal(input2))
      expect(result).deep.equal(new main.Decimal(expected))
    })
  })
})

describe('add', function () {
  const testCases = [
    {
      input1: 1,
      input2: 1,
      expected: 2
    },
    {
      input1: 2,
      input2: 1,
      expected: 3
    },
    {
      input1: 1,
      input2: 2,
      expected: 3
    },
    {
      input1: 5,
      input2: 2,
      expected: 7
    },
    {
      input1: 5.5,
      input2: 2.5,
      expected: 8
    },
    {
      input1: 3.1,
      input2: 3.2,
      expected: 6.3
    },
  ]

  testCases.forEach(function ({ input1, input2, expected }) {
    it(`Check ${input1} div ${input2}`, function () {
      const result = new main.Decimal(input1).add(new main.Decimal(input2))
      expect(result).deep.equal(new main.Decimal(expected))
    })
  })
})

describe('sub', function () {
  const testCases = [
    {
      input1: 1,
      input2: 1,
      expected: 0
    },
    {
      input1: 2,
      input2: 1,
      expected: 1
    },
    {
      input1: 1,
      input2: 2,
      expected: -1
    },
    {
      input1: 5,
      input2: 2,
      expected: 3
    },
    {
      input1: 5.5,
      input2: 2.5,
      expected: 3
    },
    {
      input1: 3.2,
      input2: 3.1,
      expected: 0.1000000001
    }
  ]

  testCases.forEach(function ({ input1, input2, expected }) {
    it(`Check ${input1} sub ${input2}`, function () {
      const result = new main.Decimal(input1).sub(new main.Decimal(input2))
      expect(result).deep.equal(new main.Decimal(expected))
    })
  })
})

describe('mul', function () {
  const testCases = [
    {
      input1: 1,
      input2: 1,
      expected: 1
    },
    {
      input1: 2,
      input2: 1,
      expected: 2
    },
    {
      input1: 1,
      input2: 2,
      expected: 2
    },
    {
      input1: 5,
      input2: 2,
      expected: 10
    },
    {
      input1: 5.5,
      input2: 2.5,
      expected: 13.75
    },
  ]

  testCases.forEach(function ({ input1, input2, expected }) {
    it(`Check ${input1} mul ${input2}`, function () {
      const result = new main.Decimal(input1).mul(new main.Decimal(input2))
      expect(result).deep.equal(new main.Decimal(expected))
    })
  })
})

describe('neg', function () {
  const testCases = [
    {
      input1: 1,
      expected: -1
    },
    {
      input1: 2,
      expected: -2
    },
    {
      input1: 100000000,
      expected: -100000000
    },
    {
      input1: 5,
      expected: -5
    },
    {
      input1: 5.5,
      expected: -5.5
    }
  ]

  testCases.forEach(function ({ input1, input2, expected }) {
    it(`Check ${input1}`, function () {
      const result = new main.Decimal(input1).neg()
      expect(result).deep.equal(new main.Decimal(expected))
    })
  })
})

describe('floorToPow2', function () {
  const testCases = [
    {
      input1: 1,
      expected: 1
    },
    {
      input1: 2,
      expected: 2
    },
    {
      input1: 2.1,
      expected: 2
    },
    {
      input1: 4,
      expected: 4
    },
    {
      input1: 18,
      expected: 16
    },
    {
      input1: 45,
      expected: 32
    },
    {
      input1: 1070,
      expected: 1024
    }
  ]

  testCases.forEach(function ({ input1, input2, expected }) {
    it(`Check ${input1}`, function () {
      const result = new main.Decimal(input1).floorToPowOf2()
      expect(result).deep.equal(new main.Decimal(expected))
    })
  })
})
