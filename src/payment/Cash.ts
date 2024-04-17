import { PaymentMethod } from './PaymentMethod';

export class Cash implements PaymentMethod {

    pay (method :number):number {
        return method;
    }
}