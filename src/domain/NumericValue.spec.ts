import { describe, it, expect } from 'vitest';
import { NumericValue } from './NumericValue';

describe('NumericValue', () => {
    
    describe('Criação e Conversão a partir de Decimal', () => {
        it('deve converter corretamente de decimal para hexadecimal e binario', () => {
            const value = NumericValue.fromDecimal('255');
            
            expect(value.toDecimalString()).toBe('255');
            expect(value.toHexadecimalString()).toBe('FF');
            expect(value.toBinaryString()).toBe('11111111');
        });

        it('deve lancar erro ao instanciar com decimal invalido', () => {
            expect(() => NumericValue.fromDecimal('abc')).toThrowError('O valor informado não é um formato decimal válido.');
        });
    });

    describe('Criação e Conversão a partir de Hexadecimal', () => {
        it('deve converter corretamente de hexadecimal para decimal e binario', () => {
            const value = NumericValue.fromHexadecimal('A');
            
            expect(value.toDecimalString()).toBe('10');
            expect(value.toHexadecimalString()).toBe('A');
            expect(value.toBinaryString()).toBe('1010');
        });

        it('deve lidar corretamente com letras minusculas no hexadecimal', () => {
            const value = NumericValue.fromHexadecimal('ff');
            
            expect(value.toDecimalString()).toBe('255');
            expect(value.toHexadecimalString()).toBe('FF'); // Deve retornar maiusculo
        });

        it('deve lancar erro ao instanciar com hexadecimal invalido', () => {
            expect(() => NumericValue.fromHexadecimal('xyz')).toThrowError('O valor informado não é um formato hexadecimal válido.');
        });
    });

    describe('Criação e Conversão a partir de Binário', () => {
        it('deve converter corretamente de binario para decimal e hexadecimal', () => {
            const value = NumericValue.fromBinary('101');
            
            expect(value.toDecimalString()).toBe('5');
            expect(value.toHexadecimalString()).toBe('5');
            expect(value.toBinaryString()).toBe('101');
        });

        it('deve lancar erro ao instanciar com binario invalido', () => {
            expect(() => NumericValue.fromBinary('abc')).toThrowError('O valor informado não é um formato binário válido.');
        });
    });
});