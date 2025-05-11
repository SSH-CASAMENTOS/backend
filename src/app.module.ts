import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvConfigModule } from './shared/infrastructure/env-config/env-config.module';
import { UsersModule } from './users/infrastructure/users.module';
import { EventsModule } from './events/events.module';
import { ContractsModule } from './contracts/contracts.module';
import { PaymentsModule } from './payments/payments.module';
import { WeddingsModule } from './weddings/weddings.module';

@Module({
  imports: [EnvConfigModule, UsersModule, EventsModule, ContractsModule, PaymentsModule, WeddingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
