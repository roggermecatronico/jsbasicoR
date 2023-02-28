let car = {
    color: 'red',
    brand: 'Kia',
  }
export function solution(car) {
    console.log(car)
    if (car.licensePlate != undefined) {
      car.drivingLicense = true
      return car
    } else {
      car.drivingLicense = false
      return car
    }
  }

  export function solution1(car) {
    // Tu código aquí 👈
    !car["licensePlate"] ? car.drivingLicense = false : car.drivingLicense = true
    return car
  }


solution(car)
console.log(car)
