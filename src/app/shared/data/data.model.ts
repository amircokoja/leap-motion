export interface Department {
  id: string;
  name: string;
  description: string;
}

export interface IClinic {
  id: string;
  name: string;
  image: string;
}

export interface IAppointment {
  id: string;
  date: string;
  name: string;
  block: string;
  floor: string;
  clinic: string;
  doctor: string;
  time: string;
  queue: string;
  yourTurn: string;
  image: string;
}
