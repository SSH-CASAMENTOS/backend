import { isUUIDValidV4 } from "@/shared/utils/uuid";
import { Entity } from "../../entity";

type StubProps = {
	prop1: string;
	prop2: number;
}

class StubEntity extends Entity<StubProps> { }

describe('Entity unit tests', () => {
	it('Should set props and id', () => {
		const props = { prop1: 'prop1', prop2: 12 }
		const sut = new StubEntity(props);

		expect(sut.props).toEqual(props);
		expect(sut._id).not.toBeNull();
		expect(isUUIDValidV4(sut._id)).toBeTruthy();
	})

	it('Should accept a valid uuid', () => {
		const props = { prop1: 'prop1', prop2: 12 }
		const id = '5e5a9d45-d7f6-4fb3-bf88-e240e35aca06';
		const sut = new StubEntity(props, id);

		expect(isUUIDValidV4(sut._id)).toBeTruthy();
		expect(sut._id).toEqual(id);
	})

	it('Should convert a entity to JSON', () => {
		const props = { prop1: 'prop1', prop2: 12 }
		const id = '5e5a9d45-d7f6-4fb3-bf88-e240e35aca06';
		const sut = new StubEntity(props, id);

		expect(sut.toJSON()).toStrictEqual({
			id,
			...props
		})
	})
});