import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './new-modules/users/users.module';
import { EventsModule } from './new-modules/events/events.module';
import { ContractsModule } from './new-modules/contracts/contracts.module';
import { PaymentsModule } from './new-modules/payments/payments.module';
import { WeddingsModule } from './new-modules/weddings/weddings.module';
@Module({
  imports: [
    UsersModule,
    EventsModule,
    ContractsModule,
    PaymentsModule,
    WeddingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
