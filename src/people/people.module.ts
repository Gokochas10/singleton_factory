import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { ClientsModule } from 'src/clients/clients.module';

@Module({
  controllers: [PeopleController],
  providers: [PeopleService],
  imports: [ClientsModule],
})
export class PeopleModule {}
