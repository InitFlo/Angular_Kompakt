import { of } from "rxjs";
import { customersMock } from "../api/customers";

export const createCustomerServiceMock = function () {
    const service = {
     getAll: jest.fn(),
     deleteById: jest.fn(),
     getById: jest.fn(),
     postOne: jest.fn(),
     putOne: jest.fn(),
   }
 
   service.deleteById.mockReturnValue(of({}));
   service.getAll.mockReturnValue(of(customersMock));
   service.getById.mockReturnValue(of(customersMock[0]));
   service.postOne.mockReturnValue(of(customersMock[0]));
   service.putOne.mockReturnValue(of(customersMock[0]));
 
   return service;
 }