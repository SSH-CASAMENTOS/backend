import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

describe('UsersService', () => {
  let service: UsersService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: PrismaService,
          useValue: {
            user: {
              create: jest.fn().mockResolvedValue({ id: 'uuid', fullName: 'Test', email: 'test@test.com', password: '123', company: 'Comp' }),
              findMany: jest.fn().mockResolvedValue([]),
              findUnique: jest.fn().mockResolvedValue(null),
              update: jest.fn().mockResolvedValue({}),
              delete: jest.fn().mockResolvedValue({}),
            },
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should create a user', async () => {
    const dto: CreateUserDto = { fullName: 'Test', email: 'test@test.com', password: '123', company: 'Comp' };
    await expect(service.create(dto)).resolves.toHaveProperty('id');
    expect(prisma.user.create).toHaveBeenCalledWith({ data: dto });
  });

  it('should return all users', async () => {
    await expect(service.findAll()).resolves.toEqual([]);
    expect(prisma.user.findMany).toHaveBeenCalled();
  });

  it('should return a user by id', async () => {
    (prisma.user.findUnique as jest.Mock).mockResolvedValueOnce({ id: 'uuid' });
    await expect(service.findOne('uuid')).resolves.toEqual({ id: 'uuid' });
    expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { id: 'uuid' } });
  });

  it('should update a user', async () => {
    const dto: UpdateUserDto = { fullName: 'Updated' };
    (prisma.user.update as jest.Mock).mockResolvedValueOnce({ id: 'uuid', fullName: 'Updated' });
    await expect(service.update('uuid', dto)).resolves.toEqual({ id: 'uuid', fullName: 'Updated' });
    expect(prisma.user.update).toHaveBeenCalledWith({ where: { id: 'uuid' }, data: dto });
  });

  it('should remove a user', async () => {
    (prisma.user.delete as jest.Mock).mockResolvedValueOnce({ id: 'uuid' });
    await expect(service.remove('uuid')).resolves.toEqual({ id: 'uuid' });
    expect(prisma.user.delete).toHaveBeenCalledWith({ where: { id: 'uuid' } });
  });
});
