import { PaymentMethod } from './PaymentMethod';

export class WireTransfer implements PaymentMethod {

    pay (method :number):number {
        return method;
    }
}