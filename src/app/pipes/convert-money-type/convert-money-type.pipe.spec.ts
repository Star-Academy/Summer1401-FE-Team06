import {MoneyFormatPipe} from './convert-money-type.pipe';

describe('ConvertMoneyTypePipe', () => {
    it('create an instance', () => {
        const pipe = new MoneyFormatPipe();
        expect(pipe).toBeTruthy();
    });
});
