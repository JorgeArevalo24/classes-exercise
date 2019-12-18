describe('Game class specifications', function () {

  let game, seconds = 150, maxCities = 300

  beforeEach(function () {
    game = new Game(seconds, maxCities)
  })

  it("should exist", function () {
    expect(typeof Game).toBe("function")
    expect(typeof game).toBe("object")
  })

  it('should receive 2 arguments (seconds & maxCities)', () => {
    expect(Game.length).toEqual(2);
  })

  it('should have an internal "_seconds" property, storing an Int value', () => {
    expect(game._seconds).toBeDefined()
    expect(typeof game._seconds).toBe('number')
  })

  it('should receive the "seconds" property as its 1st argument', () => {
    expect(game._seconds).toEqual(seconds)
  })

  it('should have an internal "_maxCities" property, storing an Int value', () => {
    expect(game._maxCities).toBeDefined()
    expect(typeof game._maxCities).toBe('number')
  })

  it('should receive the "_maxCities" property as its 2nd argument', () => {
    expect(game._maxCities).toEqual(maxCities)
  })

  it('should have an internal "_endTime" property, storing a Date object', () => {
    expect(game._endTime).toBeDefined()
    expect(typeof game._endTime).toBe("object")
    expect(game._endTime.setSeconds()).toBeDefined()
  })

  it('"_endTime" date should represent "_startTime" date plus the extra seconds on "_seconds"', () => {
    expect(game._endTime.getTime()).toBe(new Date().getTime() + seconds * 1000)
  })

  it('should have an internal "_coastalCities" property, storing an Int value', () => {
    expect(game._coastalCities).toBeDefined()
    expect(typeof game._coastalCities).toBe('number')
  })

  it('"_coastalCities" property value should be higher than 0 and lower than "_maxCities" value', () => {
    expect(game._coastalCities > 0 && game._coastalCities < game._maxCities).toBeTruthy()
  })

  it('should have an internal "_inlandCities" property, storing an Int value', () => {
    expect(game._inlandCities).toBeDefined()
    expect(typeof game._inlandCities).toBe('number')
  })

  it('"_inlandCities" property value should be higher than 0 and lower than "_maxCities" value', () => {
    expect(game._inlandCities > 0 && game._inlandCities < game._maxCities).toBeTruthy()
  })

  it('"_inlandCities" property value should be higher than 0 and lower than "_maxCities" value', () => {
    expect(game._inlandCities > 0 && game._inlandCities < game._maxCities).toBeTruthy()
  })

  it('should have an internal "_cities" property, storing an Array', () => {
    expect(Array.isArray(game._cities)).toBeTruthy()
  })

  it('"getDetails()" method should return "Quedan X ciudades costeras y X ciudades de interior"', () => {
    expect(/Quedan \d ciudades costeras y \d ciudades de interior/.test(game.getDetails())).toBeTruthy()
  })

  it('"getDeadline()" method should return "La partida terminará a las hh:mm:ss"', () => {
    expect(/La partida terminará a las \d\d:\d\d:\d\d/.test(game.getDeadline())).toBeTruthy()
  })

})




describe('City class specifications', function () {

  let city, population = 1000, meters = 100

  beforeEach(function () {
    city = new City()
  })

  it("should exist", function () {
    expect(typeof City).toBe("function")
    expect(typeof city).toBe("object")
  })

  it('should receive 2 arguments (population, meters)', () => {
    expect(City.length).toEqual(2)
  })


})