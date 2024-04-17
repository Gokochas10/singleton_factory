import { Cash } from './Cash';
import { CreditCard } from './CreditCard';
import { Checker } from './Checker';
import { WireTransfer } from './WireTransfer';

export class PaymentFactory { 
    static createPaymentMethod(type: string) {
        if (type === 'cash') {
            return new Cash();
        } else if (type === 'credit') {
            return new CreditCard();
        } else if (type === 'check') {
            return new Checker();
        } else if (type === 'wiretransfer') {
            return new WireTransfer();
        }
    }
}