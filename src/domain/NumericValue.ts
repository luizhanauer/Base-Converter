export class NumericValue {
    private readonly base10Value: number;

    private constructor(value: number) {
        this.base10Value = value;
    }

    public static fromDecimal(value: string): NumericValue {
        const parsed = parseInt(value, 10);
        NumericValue.ensureValidNumber(parsed, "decimal");
        return new NumericValue(parsed);
    }

    public static fromHexadecimal(value: string): NumericValue {
        const parsed = parseInt(value, 16);
        NumericValue.ensureValidNumber(parsed, "hexadecimal");
        return new NumericValue(parsed);
    }

    public static fromBinary(value: string): NumericValue {
        const parsed = parseInt(value, 2);
        NumericValue.ensureValidNumber(parsed, "binário");
        return new NumericValue(parsed);
    }

    private static ensureValidNumber(value: number, baseName: string): void {
        if (Number.isNaN(value)) {
            throw new Error(`O valor informado não é um formato ${baseName} válido.`);
        }
    }

    public toDecimalString(): string {
        return this.base10Value.toString(10);
    }

    public toHexadecimalString(): string {
        return this.base10Value.toString(16).toUpperCase();
    }

    public toBinaryString(): string {
        return this.base10Value.toString(2);
    }
}