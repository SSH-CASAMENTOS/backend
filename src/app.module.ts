import { Module } from '@nestjs/common';
import { AuthModule } from './new-modules/auth/auth.module';
import { ContractsModule } from './new-modules/contracts/contracts.module';
import { EventsModule } from './new-modules/events/events.module';
import { PaymentsModule } from './new-modules/payments/payments.module';
import { UsersModule } from './new-modules/users/users.module';
import { WeddingsModule } from './new-modules/weddings/weddings.module';
@Module({
  imports: [
    UsersModule,
    EventsModule,
    ContractsModule,
    PaymentsModule,
    WeddingsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
