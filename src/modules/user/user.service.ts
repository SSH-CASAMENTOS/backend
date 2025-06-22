import { BcryptHelper } from '@/common/helpers/bcrypt';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/services/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
		private readonly prisma: PrismaService,
	) {}

  async create({ email, password, name }: CreateUserDto) {
    return this.prisma.user.create({ data: {
			email,
			password: await BcryptHelper.hashPassword(password),
			profiles: {
				create: {
					name
				}
			}
		} });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

	findByEmail(email: string) {
		return this.prisma.user.findUnique({ where: { email } });
	}

  async update(id: string, updateUserDto: UpdateUserDto) {
    const data: UpdateUserDto = { ...updateUserDto };

    if (updateUserDto.password) {
      data.password = await BcryptHelper.hashPassword(updateUserDto.password);
    } else {
      delete data.password;
    }

    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
