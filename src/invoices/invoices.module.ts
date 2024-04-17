import { Module } from '@nestjs/common';
import { InvoicesController } from './invoices.controller';
import { InvoicesService } from './invoices.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bill } from 'src/entities/bill.entity';

@Module({
  controllers: [InvoicesController],
  imports: [TypeOrmModule.forFeature([Bill])],
  providers: [InvoicesService],
})
export class InvoicesModule {}
