export type FieldsErros = {
	[field: string]: string[]
}

export interface ValidatorFields<PropsValidated> {
	errors: FieldsErros;
	validatedData: PropsValidated;
	validate(data: any): boolean;
}
