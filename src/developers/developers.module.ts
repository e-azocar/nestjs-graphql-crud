import { Module } from '@nestjs/common';
import { DevelopersService } from './developers.service';
import { DevelopersResolver } from './developers.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Developer } from './developers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Developer])],
  providers: [DevelopersService, DevelopersResolver],
  exports: [DevelopersService],
})
export class DevelopersModule {}
