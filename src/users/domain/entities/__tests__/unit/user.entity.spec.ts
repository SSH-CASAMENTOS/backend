import { UserDataBuilder } from "@/users/domain/testing/helpers/user-data-builder";
import { UserEntity, UserProps } from "../../user.entity";

describe('UserEntity unit tests', () => {
	let props: UserProps;
	let sut: UserEntity;

	beforeEach(() => {
		props = UserDataBuilder({});

		sut = new UserEntity(props);
	});

	it('Constructor method', () => {
		expect(sut.props).toEqual({
			...props,
			createdAt: expect.any(Date)
		});
	})

	it('Getter of name field', () => {
		expect(sut.props.name).toBeDefined();
		expect(sut.props.name).toEqual(props.name);
		expect(typeof sut.props.name).toEqual("string");
	});

	it('Setter of name field', () => {
		sut['name'] = 'New Name';

		expect(sut.props.name).toEqual('New Name');
		expect(typeof sut.props.name).toEqual("string");
	});

	it('Getter of email field', () => {
		expect(sut.props.email).toBeDefined();
		expect(sut.props.email).toEqual(props.email);
		expect(typeof sut.props.email).toEqual("string");
	});

	it('Setter of email field', () => {
		sut['email'] = 'New email';

		expect(sut.props.email).toEqual('New email');
		expect(typeof sut.props.email).toEqual("string");
	});

	it('Getter of password field', () => {
		expect(sut.props.password).toBeDefined();
		expect(sut.props.password).toEqual(props.password);
		expect(typeof sut.props.password).toEqual("string");
	});


	it('Setter of password field', () => {
		sut['password'] = 'New password';

		expect(sut.props.password).toEqual('New password');
		expect(typeof sut.props.password).toEqual("string");
	});


	it('Getter of createdAt field', () => {
		expect(sut.props.createdAt).toBeDefined();
		expect(sut.props.createdAt).toBeInstanceOf(Date);
	});

	it('Should update a user', () => {
    sut.update('other name')
    expect(sut.props.name).toEqual('other name')
  })

  it('Should update the password field', () => {
    sut.updatePassword('other password')
    expect(sut.props.password).toEqual('other password')
  })
});