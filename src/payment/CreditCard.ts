import { PaymentMethod } from './PaymentMethod';

export class CreditCard implements PaymentMethod {

    pay (method :number):number {
        return method;
    }
}