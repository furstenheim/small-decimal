const PRECISSION = 32
const integralPower = 2 ** 32
const bigintPower = BigInt(integralPower)
class Decimal {
  constructor (number) {
    const integralPart = parseInt(number)
    const floatPart = number - integralPart

    const precissionPart = parseInt(floatPart * integralPower)


    this._number = BigInt(integralPart) * bigintPower + BigInt(precissionPart)
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

  mul (decimal) {
    const result = new Decimal(0)
    result._number = (this._number * decimal._number) / bigintPower
    return result
  }

  neg () {
    const result = new Decimal(0)
    result._number = - this._number
    return result
  }
}

module.exports = {
  Decimal
}
