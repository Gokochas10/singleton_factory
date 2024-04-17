import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { Bill } from '../entities/bill.entity';

@Controller('bill')
export class InvoicesController {
  constructor(private readonly invoiceService: InvoicesService) {}

  @Get()
  async findAll(): Promise<Bill[]> {
    return await this.invoiceService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Bill> {
    const bill = await this.invoiceService.findOne(id);
    if (!bill) {
      throw new NotFoundException('Bill does not exist!');
    } else {
      return bill;
    }
  }

  @Post()
  async create(@Body() bill: Bill): Promise<Bill> {
    return this.invoiceService.create(bill);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() bill: Bill): Promise<any> {
    return this.invoiceService.update(id, bill);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    const bill = await this.invoiceService.findOne(id);
    if (!bill) {
      throw new NotFoundException('Bill does not exist!');
    }
    return this.invoiceService.delete(id);
  }
}
