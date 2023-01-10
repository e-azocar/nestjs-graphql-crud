import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsResolver } from './projects.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { DevelopersModule } from 'src/developers/developers.module';

@Module({
  imports: [TypeOrmModule.forFeature([Project]), DevelopersModule],
  providers: [ProjectsResolver, ProjectsService],
})
export class ProjectsModule {}
