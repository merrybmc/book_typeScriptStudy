{
  type Reserve = {
    (from: Date, to: Date, destination: string): Reservation;
  };

  let reserve: Reserve = (from, to, destination) => {};

  // ---------------------------------------------------------------
  type Reserve2 = {
    (from: Date, to: Date, destination: string): Reservation;
    (from: Date, destination: string): Reservation;
  };

  let reserve2: Reserve2 = (from: Date, toOrDestination: Date | string, destination?: string) => {};
}
