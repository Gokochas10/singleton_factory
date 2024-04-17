import { PaymentMethod } from './PaymentMethod';

export class Checker implements PaymentMethod {

    pay (method :number):number {
        return method;
    }
}