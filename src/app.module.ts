import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { ContractModule } from './modules/contract/contract.module';
import { EventModule } from './modules/event/event.module';
import { PaymentModule } from './modules/payment/payment.module';
import { UserModule } from './modules/user/user.module';
import { WeddingModule } from './modules/wedding/wedding.module';
@Module({
  imports: [
    UserModule,
    EventModule,
    ContractModule,
    PaymentModule,
    WeddingModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
