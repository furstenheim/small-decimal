const integralPower = 2 ** 32
const bigintPower = BigInt(integralPower)
class Decimal {
  constructor (number) {
    const integralPart = parseInt(number)
    const floatPart = number - integralPart

    const precissionPart = parseInt(floatPart * integralPower)

    this._number = BigInt(integralPart) * bigintPower + BigInt(precissionPart)
  }

  toString () {
    // TODO add decimal part
    return (this._number / bigintPower).toString()
  }

  toNumber () {
    return parseInt(this._number / bigintPower) + parseFloat((this._number % bigintPower)) / integralPower
  }

  div (decimal) {
    const result = new Decimal(0)
    result._number = this._number * bigintPower / decimal._number
    return result
  }

  divToInt (decimal) {
    const result = new Decimal(0)
    result._number = (this._number / decimal._number) * bigintPower
    return result
  }

  add (decimal) {
    const result = new Decimal(0)
    result._number = (this._number + decimal._number)
    return result
  }

  sub (decimal) {
    const result = new Decimal(0)
    result._number = (this._number - decimal._number)
    return result
  }

  mul (decimal) {
    const result = new Decimal(0)
    result._number = (this._number * decimal._number) / bigintPower
    return result
  }

  lessThan (decimal) {
    return this._number < decimal._number
  }

  greaterThanOrEqualTo (decimal) {
    return this._number >= decimal._number
  }

  greaterThan (decimal) {
    return this._number >= decimal._number
  }

  neg () {
    const result = new Decimal(0)
    result._number = -this._number
    return result
  }

  static max (decimal1, decimal2) {
    if (decimal1._number > decimal2._number) {
      return decimal1
    }
    return decimal2
  }

  static min (decimal1, decimal2) {
    if (decimal1._number > decimal2._number) {
      return decimal2
    }
    return decimal1
  }

  equals (decimal2) {
    return this._number === decimal2._number
  }

  floorToPowOf2 () {
    if (this._number <= 1) {
      throw new Error('Only positive logarithms allow')
    }
    const current = new Decimal(1)
    let next = BigInt(2 ** 32)

    while (true) {
      if (next > this._number) {
        return current
      }
      current._number = next

      if (next === this._number) {
        return current
      }
      next = next * BigInt(2)
    }
  }

  floorLog2 () {
    if (this._number <= 1) {
      throw new Error('Only positive logarithms allow')
    }
    const current = new Decimal(-1)

    let next = BigInt(2 ** 32)

    while (true) {
      if (next > this._number) {
        return current
      }

      current._number += bigintPower

      if (next === this._number) {
        return current
      }

      next = next * BigInt(2)
    }
  }

  // TODO implement decimal numbers
  mod (decimal) {
    const mod = (this._number / bigintPower) % (decimal._number / bigintPower)
    const result = new Decimal(0)
    result._number = mod * bigintPower
    return result
  }

  floor () {
    const floor = this._number - this._number % bigintPower
    const result = new Decimal(0)
    result._number = floor
    return result
  }
}

module.exports = {
  Decimal
}
