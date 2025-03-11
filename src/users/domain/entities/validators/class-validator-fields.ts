import { validateSync } from "class-validator";
import { FieldsErros, ValidatorFields } from "./validator-fields.interface";

export abstract class ClassValidatorFields<PropsValidated> implements ValidatorFields<PropsValidated> {
	errors: FieldsErros = null;
	validatedData: PropsValidated = null;

	validate(data: any): boolean {
		const erros = validateSync(data);
		if (erros.length) {
			this.errors = {};
			erros.forEach((error) => {
				if (!this.errors[error.property]) {
					this.errors[error.property] = [];
				}
				this.errors[error.property].push(Object.values(error.constraints)[0]);
			});
			return false;
		}
		this.validatedData = data;
		return !erros.length;
	};
}